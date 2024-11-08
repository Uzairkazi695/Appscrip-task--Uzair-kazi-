'use client'

import { useState, useEffect } from 'react'
import styles from '@/app/ui/header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [isMenuOpen])

  return (
    <header className={styles.header}>
      <div className={styles.topBanner}>
        <span>Lorem ipsum dolor</span>
        <span>Lorem ipsum dolor</span>
        <span>Lorem ipsum dolor</span>
      </div>
      
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <button 
            className={styles.menuButton} 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg viewBox="0 0 24 24" className={styles.menuIcon}>
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className={styles.menuIcon}>
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
          <div>*</div>
          <div className={styles.logo}>
            LOGO
          </div>
          <div className={styles.actions}>
            <button aria-label="Search">
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button aria-label="Wishlist">
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button aria-label="Cart">
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button aria-label="Account">
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <select className={styles.langSelect}>
              <option value="eng">ENG</option>
              <option value="esp">ESP</option>
              <option value="fra">FRA</option>
            </select>
          </div>
        </div>

        <div className={`${styles.menuItems} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <a>SHOP</a>
          <a >SKILLS</a>
          <a >STORIES</a>
          <a>ABOUT</a>
          <a>CONTACT US</a>
        </div>
      </nav>
    </header>
  )
}