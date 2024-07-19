import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Signup.module.css';
import Link from 'next/link';

export default function Signup() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h2>Inscription</h2>
        <br />
        <form className={styles.form}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Mot de passe" required />
          <input type="password" placeholder="Confirmez le mot de passe" required />
          <div className={styles.radioGroup}>
            <p>Laquelle de ses deux friandises préférer vous ?</p>
            <label>
              <input type="radio" name="preference" value="macaron" required />
              Macaron
            </label>
            <label>
              <input type="radio" name="preference" value="cookie" />
              Cookie
            </label>
          </div>
          <button type="submit">S'inscrire</button>
        </form>
        <div className={styles.loginLink}>
          <p>Vous avez déjà un compte ?</p>
          <Link href="/login" legacyBehavior>
            <a className={styles.loginButton}>Se connecter</a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
