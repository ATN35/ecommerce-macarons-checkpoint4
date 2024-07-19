import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/Product.module.css';

const Product = ({ name, description, price, imageUrl, id }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleAddToCart = async () => {
    if (!session) {
      alert('Please sign in to add items to your cart.');
      router.push('/api/auth/signin');
      return;
    }

    try {
      const res = await fetch('/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: id, quantity: 1 }),
      });

      if (res.ok) {
        router.push('/cart');
      } else {
        console.error('Failed to add to cart');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.product}>
      <Image
        src={imageUrl}
        alt={name}
        width={300}
        height={300}
        className={styles.productImage}
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Acheter</button>
    </div>
  );
};

export default Product;
