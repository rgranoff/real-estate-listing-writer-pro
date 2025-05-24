import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function Header() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src="/logo.png" alt="Real Estate Marketing Pro" width={180} height={60} />
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>HOME</Link>
          <Link href="/about" className={styles.link}>ABOUT</Link>
          <Link href="/services" className={styles.link}>SERVICES</Link>
          <Link href="/pricing" className={styles.link}>PRICING</Link>
          <Link href="/marketing-kit" className={styles.link}>MARKETING KIT</Link>
          <Link href="/chat" className={styles.link}>AI LISTING WRITER PRO</Link>
          <Link href="/client-portal" className={styles.link}>CLIENT PORTAL</Link>
          <Link href="/testimonials" className={styles.link}>TESTIMONIALS</Link>
          <Link href="/terms" className={styles.link}>TERMS</Link>
          <Link href="/contact" className={styles.link}>CONTACT</Link>
        </nav>
      </header>
    </>
  );
}
