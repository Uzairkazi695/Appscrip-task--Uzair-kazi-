"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/ui/footer.module.css";
import {
  FaGooglePay,
  FaCcMastercard,
  FaPaypal,
  FaApplePay,
  FaAmazonPay,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { LiaFlagUsaSolid } from "react-icons/lia";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.newsletter}>
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from Appscrip.</p>
            <form className={styles.subscribeForm}>
              <input type="email" placeholder="Enter your e-mail..." />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
          <div>
            <div className={styles.contact}>
              <h3>CONTACT US</h3>
              <p>+91 1125654256</p>
              <p>customercare@appscrip.com</p>
            </div>
            <div className={styles.currency}>
              <h3>CURRENCY</h3>
              <div className={styles.currencySelector}>
                <LiaFlagUsaSolid className={styles.icons} />
                <span>USD</span>
              </div>
            </div>
            <p>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomSection}>
          <div className={styles.column}>
            <h3
              className={styles.mobileAccordionToggle}
              onClick={() => toggleSection("brand")}
            >
              Appscrip
              <span className={styles.mobileAccordionTogglePlus}>
                {openSection === "brand" ? "-" : "+"}
              </span>
            </h3>
            <ul className={openSection === "brand" ? styles.open : ""}>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3
              className={styles.mobileAccordionToggle}
              onClick={() => toggleSection("quickLinks")}
            >
              QUICK LINKS
              <span className={styles.mobileAccordionTogglePlus}>
                {openSection === "quickLinks" ? "-" : "+"}
              </span>
            </h3>
            <ul className={openSection === "quickLinks" ? styles.open : ""}>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3
              className={styles.mobileAccordionToggle}
              onClick={() => toggleSection("followUs")}
            >
              FOLLOW US
              <span className={styles.mobileAccordionTogglePlus}>
                {openSection === "followUs" ? "-" : "+"}
              </span>
            </h3>
            <ul
              className={`${styles.socialLinks} ${
                openSection === "followUs" ? styles.open : ""
              }`}
            >
              <li>
                <Link href="https://instagram.com">
                  <FaInstagram className={styles.icons} />
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com">
                  <FaLinkedin className={styles.icons} />
                </Link>
              </li>
            </ul>
            <div className={styles.paymentSection}>
              <h3>APPSCRIP ACCEPTS</h3>
              <div className={styles.paymentMethods}>
                <FaGooglePay className={styles.icons} />
                <FaCcMastercard className={styles.icons} />
                <FaPaypal className={styles.icons} />
                <SiAmericanexpress className={styles.icons} />
                <FaApplePay className={styles.icons} />
                <FaAmazonPay className={styles.icons} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>Copyright © 2024 Appscrip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
