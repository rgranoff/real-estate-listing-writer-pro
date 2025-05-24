import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="https://www.realestatemarketing.pro/">
            <Image
              src="/logo.png"
              alt="Real Estate Marketing Pro"
              width={280}
              height={80}
              priority
            />
          </Link>
        </div>
        <nav className={styles.nav}>
          {[
            ["HOME", "/"],
            ["ABOUT", "/about"],
            ["SERVICES", "/services"],
            ["PRICING", "/pricing"],
            ["MARKETING KIT", "/marketing-kit"],
            ["AI LISTING WRITER PRO", "/ai-listing-writer-pro"],
            ["CLIENT PORTAL", "/client-portal"],
            ["TESTIMONIALS", "/testimonials"],
            ["TERMS", "/terms"],
            ["CONTACT", "/contact"],
          ].map(([label, href]) => (
            <Link key={label} href={`https://www.realestatemarketing.pro${href}`}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
