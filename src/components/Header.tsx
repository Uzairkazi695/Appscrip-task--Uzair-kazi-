"use client";

import { useState, useEffect } from "react";
import { FaReact, FaShoppingBag } from "react-icons/fa";
import { CiHeart, CiMenuBurger, CiSearch, CiUser } from "react-icons/ci";
import styles from "@/app/ui/header.module.css";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isMenuOpen]);

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
              <IoMdClose className={styles.menuIcon} />
            ) : (
              <CiMenuBurger className={styles.menuIcon} />
            )}
          </button>
          <div>
            <FaReact />
          </div>
          <div className={styles.logo}>LOGO</div>
          <div className={styles.actions}>
            <button aria-label="Search">
              <CiSearch className={styles.icon} />
            </button>
            <button aria-label="Wishlist">
              <CiHeart className={styles.icon} />
            </button>
            <button aria-label="Cart">
              <FaShoppingBag className={styles.icon} />
            </button>
            <button aria-label="Account">
              <CiUser className={styles.icon} />
            </button>
            <select className={styles.langSelect}>
              <option value="eng">ENG</option>
              <option value="esp">ESP</option>
              <option value="fra">FRA</option>
            </select>
          </div>
        </div>

        <div
          className={`${styles.menuItems} ${isMenuOpen ? styles.menuOpen : ""}`}
        >
          <a>SHOP</a>
          <a>SKILLS</a>
          <a>STORIES</a>
          <a>ABOUT</a>
          <a>CONTACT US</a>
        </div>
      </nav>
    </header>
  );
}
