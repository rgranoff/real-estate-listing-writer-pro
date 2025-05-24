// components/Header.js
import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="https://www.realestatemarketing.pro/">
        <Image
          src="/logo.png"
          alt="Real Estate Marketing Pro"
          width={250}
          height={60}
          className={styles.logo}
        />
      </a>
      <nav className={styles.nav}>
        <a href="https://www.realestatemarketing.pro/">HOME</a>
        <a href="https://www.realestatemarketing.pro/about">ABOUT</a>
        <a href="https://www.realestatemarketing.pro/services">SERVICES</a>
        <a href="https://www.realestatemarketing.pro/pricing">PRICING</a>
        <a href="https://www.realestatemarketing.pro/marketing-kit">MARKETING KIT</a>
        <a href="https://www.realestatemarketing.pro/ai-listing-writer-pro">AI LISTING WRITER PRO</a>
        <a href="https://www.realestatemarketing.pro/client-portal">CLIENT PORTAL</a>
        <a href="https://www.realestatemarketing.pro/testimonials">TESTIMONIALS</a>
        <a href="https://www.realestatemarketing.pro/terms">TERMS</a>
        <a href="https://www.realestatemarketing.pro/contact">CONTACT</a>
      </nav>
    </header>
  );
};

export default Header;
