'use client'

import { useEffect } from 'react'

export default function CalculateElementsHeight() {
  useEffect(() => {
    const updateElementsHeight = () => {
      setTimeout(() => {
        const header = document.querySelector('header')
        const footer = document.querySelector('footer')
        const adminBar = document.querySelector('.admin-bar')
        if (header) {
          document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`)
        }
        if (footer) {
          document.documentElement.style.setProperty('--footer-height', `${footer.offsetHeight}px`)
        }
        if (adminBar) {
          document.documentElement.style.setProperty(
            '--payload-admin-bar-height',
            `${adminBar.offsetHeight}px`,
          )
        }
      }, 300)
    }

    updateElementsHeight()

    window.addEventListener('resize', updateElementsHeight)
    return () => window.removeEventListener('resize', updateElementsHeight)
  }, [])

  return null
}
