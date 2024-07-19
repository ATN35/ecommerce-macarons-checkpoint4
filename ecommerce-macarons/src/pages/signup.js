import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Signup.module.css';
import Link from 'next/link';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [preference, setPreference] = useState('macaron');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, preference }),
    });

    const result = await response.json();

    if (response.ok) {
      router.push('/login');
    } else {
      setError(result.error || 'Une erreur est survenue.');
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h2>Inscription</h2>
        <br />
        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <p className={styles.error}>{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmez le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <div className={styles.radioGroup}>
            <p>Laquelle de ces deux friandises préférez-vous ?</p>
            <label>
              <input
                type="radio"
                name="preference"
                value="macaron"
                checked={preference === 'macaron'}
                onChange={(e) => setPreference(e.target.value)}
                required
              />
              Macaron
            </label>
            <label>
              <input
                type="radio"
                name="preference"
                value="cookie"
                checked={preference === 'cookie'}
                onChange={(e) => setPreference(e.target.value)}
              />
              Cookie
            </label>
          </div>
          <button className={styles.button} type="submit">S'inscrire</button>
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
