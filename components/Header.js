import styles from './Header.module.css';
import Image from 'next/image';
import Head from 'next/head';

export default function Header() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className={styles.header}>
        <a href="https://www.realestatemarketing.pro/" className={styles.logoLink}>
          <Image
            src="/logo.png"
            alt="Real Estate Marketing Pro"
            width={270}
            height={80}
            className={styles.logo}
            priority
          />
        </a>
        <nav className={styles.nav}>
          <a href="https://www.realestatemarketing.pro/">HOME</a>
          <a href="https://www.realestatemarketing.pro/about">ABOUT</a>
          <a href="https://www.realestatemarketing.pro/services">SERVICES</a>
          <a href="https://www.realestatemarketing.pro/pricing">PRICING</a>
          <a href="https://www.realestatemarketing.pro/marketing-kit">MARKETING KIT</a>
          <a href="/chat">AI LISTING WRITER PRO</a>
          <a href="https://www.realestatemarketing.pro/client-portal">CLIENT PORTAL</a>
          <a href="https://www.realestatemarketing.pro/testimonials">TESTIMONIALS</a>
          <a href="https://www.realestatemarketing.pro/terms">TERMS</a>
          <a href="https://www.realestatemarketing.pro/contact">CONTACT</a>
        </nav>
      </header>
    </>
  );
}
