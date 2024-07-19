import styles from "../styles/Product.module.css";
import Image from "next/image";

export default function Product({ name, description, price, imageUrl }) {
  return (
    <div className={styles.product}>
      <Image
        src={imageUrl}
        alt={name}
        width={300}
        height={200}
        objectFit="cover"
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price} €</p>
      <button>Acheter</button>
    </div>
  );
}
