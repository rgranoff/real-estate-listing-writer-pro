import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo.png"
            alt="REAL ESTATE MARKETING .PRO"
            width={400}
            height={80}
            priority
          />
        </Link>
        <nav className={styles.nav}>
          {[
            ['HOME', '/'],
            ['ABOUT', '/about'],
            ['SERVICES', '/services'],
            ['PRICING', '/pricing'],
            ['MARKETING KIT', '/marketing-kit'],
            ['AI LISTING WRITER PRO', '/ai-listing-writer-pro'],
            ['CLIENT PORTAL', '/client-portal'],
            ['TESTIMONIALS', '/testimonials'],
            ['TERMS', '/terms'],
            ['CONTACT', '/contact'],
          ].map(([label, href]) => (
            <Link key={label} href={href} className={styles.navLink}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
