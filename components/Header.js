import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="https://www.realestatemarketing.pro/" className={styles.logoLink}>
          <img src="/logo.png" alt="Real Estate Marketing Pro" className={styles.logo} />
        </a>
        <nav className={styles.nav}>
          <a href="https://www.realestatemarketing.pro/" className={styles.link}>HOME</a>
          <a href="https://www.realestatemarketing.pro/about" className={styles.link}>ABOUT</a>
          <a href="https://www.realestatemarketing.pro/services" className={styles.link}>SERVICES</a>
          <a href="https://www.realestatemarketing.pro/pricing" className={styles.link}>PRICING</a>
          <a href="https://www.realestatemarketing.pro/marketing-kit" className={styles.link}>MARKETING KIT</a>
          <a href="https://www.realestatemarketing.pro/ai-listing-writer-pro" className={styles.link}>AI LISTING WRITER PRO</a>
          <a href="https://www.realestatemarketing.pro/client-portal" className={styles.link}>CLIENT PORTAL</a>
          <a href="https://www.realestatemarketing.pro/testimonials" className={styles.link}>TESTIMONIALS</a>
          <a href="https://www.realestatemarketing.pro/terms" className={styles.link}>TERMS</a>
          <a href="https://www.realestatemarketing.pro/contact" className={styles.link}>CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
