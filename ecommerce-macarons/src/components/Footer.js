import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Macaron Shop</p>
      <div className={styles.links}>
        <a href="#">Mentions légales</a>
      </div>
    </footer>
  );
}
