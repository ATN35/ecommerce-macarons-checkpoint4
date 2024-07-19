import styles from "../styles/CommentForm.module.css";
import { useState } from "react";

export default function CommentForm() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className={styles.commentForm}>
      <h3>Laissez un commentaire</h3>
      <form>
        <div className={styles.rating}>
          <label>
            Note:
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`${styles.star} ${star <= rating ? styles.filled : ""}`}
                onClick={() => handleRating(star)}
              >
                ★
              </span>
            ))}
          </label>
        </div>
        <textarea placeholder="Commentaire" required></textarea>
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Email" required />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
