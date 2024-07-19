import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Search.module.css";
import Link from "next/link";

export default function Search() {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const data = [
    "macaron vanille",
    "macaron chocolat",
    "macaron pistache",
    "macaron orange",
    "macaron mangue",
    "macaron citron",
    "macaron framboise",
  ];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    filterData(value);
  };

  const filterData = (query) => {
    const results = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(results);
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <Image
          src="/vue-dessus-macarons-dans-bol.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <h1>Barre de Recherche</h1>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Quel macaron vous ferait plaisir..."
        className={styles.input}
      />
      <ul className={styles.ul}>
        {filteredData.map((item, index) => (
          <li key={index} className={styles.li}>
            {item}
          </li>
        ))}
      </ul>
      <Link href="/" legacyBehavior>
          <a className={styles.backButton}>retour</a>
        </Link>
    </div>
  );
}
