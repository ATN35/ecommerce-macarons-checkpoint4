import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Login.module.css';
import Link from 'next/link';

export default function Login() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h2>Connexion</h2>
        <br />
        <form className={styles.form}>
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Mot de passe" required />
          <button type="submit">Se connecter</button>
        </form>
        <div className={styles.signupLink}>
          <p>Vous n'avez pas de compte ?</p>
          <Link href="/signup" legacyBehavior>
            <a className={styles.signupButton}>S'inscrire</a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
