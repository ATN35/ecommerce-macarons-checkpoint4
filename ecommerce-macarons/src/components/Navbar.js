import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <Link href="/" legacyBehavior>
        <Image src="/logo-macarons.png" alt="Logo" width={60} height={60} />
        </Link>
      </div>
      <div className={styles.icons}>
        <Link href="/search" legacyBehavior>
          <a className={styles.icon}>🔍</a>
        </Link>
        <Link href="/login" legacyBehavior>
          <a className={styles.icon}>👤</a>
        </Link>
        <Link href="/cart" legacyBehavior>
          <a className={styles.icon}>🛒</a>
        </Link>
      </div>
    </nav>
  );
}
