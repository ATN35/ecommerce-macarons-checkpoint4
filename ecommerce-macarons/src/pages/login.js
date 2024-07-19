import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Login.module.css';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (response.ok) {
      // Redirige vers une page protégée ou la page d'accueil
      router.push('/dashboard'); // Modifier selon votre besoin
    } else {
      setError(result.error || 'Une erreur est survenue.');
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h2>Connexion</h2>
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
