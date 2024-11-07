"use client"

import styles from "@/app/ui/hero-section.module.css"

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          DISCOVER OUR PRODUCTS
        </h1>
        <p className={styles.heroDescription}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit impedit harum dignissimos? Corporis excepturi culpa quam a incidunt, repellendus in.
        </p>
      </div>
    </section>
  )
}