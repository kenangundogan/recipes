import type { CollectionAfterReadHook } from 'payload'
import { User } from 'src/payload-types'

// The `user` collection has access control locked so that users are not publicly accessible
// This means that we need to populate the authors manually here to protect user privacy
// GraphQL will not return mutated user data that differs from the underlying schema
// So we use an alternative `populatedAuthors` field to populate the user data, hidden from the admin UI
export const populateAuthors: CollectionAfterReadHook = async ({ doc, req, req: { payload } }) => {
  if (doc?.authors && doc?.authors?.length > 0) {
    const authorDocs: User[] = []

    for (const author of doc.authors) {
      try {
        const authorDoc = await payload.findByID({
          id: typeof author === 'object' ? author?.id : author,
          collection: 'users',
          depth: 1,
        })

        if (authorDoc) {
          authorDocs.push(authorDoc)
        }

        if (authorDocs.length > 0) {
          const populatedAuthors = []

          for (const authorDoc of authorDocs) {
            let profilePicture = null

            // Eğer profilePicture ID olarak geliyorsa, ayrı bir query ile media objesini getir
            if (authorDoc.profilePicture && typeof authorDoc.profilePicture === 'string') {
              try {
                profilePicture = await payload.findByID({
                  id: authorDoc.profilePicture,
                  collection: 'media',
                  depth: 0,
                })
              } catch {
                // hata durumunda null bırak
              }
            } else if (typeof authorDoc.profilePicture === 'object') {
              profilePicture = authorDoc.profilePicture
            }

            populatedAuthors.push({
              id: authorDoc.id,
              name: authorDoc.name,
              firstName: authorDoc.general?.firstName || '',
              lastName: authorDoc.general?.lastName || '',
              profilePicture: profilePicture,
            })
          }

          doc.populatedAuthors = populatedAuthors
        }
      } catch {
        // swallow error
      }
    }
  }

  return doc
}
