import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Cart.module.css';

export default function Cart() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h2>Votre panier</h2>
        <div className={styles.cartItems}>
          {/* List of cart items */}
        </div>
        <button>Commander</button>
      </main>
      <Footer />
    </div>
  );
}