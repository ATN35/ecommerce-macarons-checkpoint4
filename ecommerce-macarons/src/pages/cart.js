import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Cart.module.css';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCartItems() {
      try {
        const response = await fetch('/api/cart');
        const data = await response.json();
        setCartItems(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to fetch cart items:', error);
        setCartItems([]);
      }
    }

    fetchCartItems();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.backgroundImageWrapper}>
          <Image 
            src="/macaron-cafe.jpg"
            alt="Background" 
            layout="fill" 
            objectFit="cover" 
            quality={100} 
            className={styles.backgroundImage}
          />
        </div>
        <h2>Votre panier</h2>
        <div className={styles.cartItems}>
          {cartItems.length === 0 ? (
            <p>Votre panier est vide.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <Image 
                  src={item.product.imageUrl} 
                  alt={item.product.name} 
                  width={80} 
                  height={80} 
                  className={styles.itemImage}
                />
                <div className={styles.itemDetails}>
                  <p className={styles.itemName}>{item.product.name}</p>
                  <p>Quantité: {item.quantity}</p>
                  <p className={styles.itemPrice}>Prix: {item.product.price} €</p>
                </div>
              </div>
            ))
          )}
        </div>
        <button className={styles.button}>Commander</button>
      </main>
      <Footer />
    </div>
  );
}
