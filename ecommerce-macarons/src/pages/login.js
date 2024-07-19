import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h2>Connexion / Inscription</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}