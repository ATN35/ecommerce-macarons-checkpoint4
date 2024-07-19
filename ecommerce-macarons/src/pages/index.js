// pages/index.js
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Product from "../components/Product";
import CommentForm from "../components/CommentForm";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Macaron shop</title>
        <meta
          name="description"
          content="Bienvenue dans notre boutique de macarons"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>
          <h1 className={styles.h1}>Bienvenue dans l'Univers Délicieux des Macarons!</h1>

          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h2>Découvrez Nos Macarons</h2>
              <Image
                src="/macarons-choco-noisette.png"
                alt="Macarons"
                layout="responsive"
                width={1200}
                height={800}
                quality={100}
                className={styles.heroImage}
              />
            </div>
          </section>

          <section className={styles.story}>
            <div className={styles.storyContent}>
              <h2>Mon histoire</h2>
              <Image
                src="/origine-des-macarons.webp"
                alt="Our Story"
                layout="responsive"
                width={1200}
                height={800}
                quality={100}
                className={styles.storyImage}
              />
              <p>
                Depuis mon enfance, les macarons de ma grand-mère étaient ma
                douceur préférée. En grandissant, j'ai voulu partager cette
                passion et cette joie avec le monde. Aujourd'hui, chaque macaron
                que je crée dans ma boutique est un hommage à ces souvenirs
                précieux. Goûtez et expérimentez ces petites bouchées de bonheur
                et découvrez l’amour et la passion que j’y mets.
              </p>
            </div>
          </section>

          <section className={styles.shop}>
            <h2>Shop Macarons</h2>
            <br />
            <div className={styles.products}>
              <Product
                name="Macaron 1"
                description="Delicious macaron"
                price="5"
                imageUrl="/macaron-vanille.jpg"
              />
              <Product
                name="Macaron 2"
                description="Tasty macaron"
                price="6"
                imageUrl="/macaron-framboise.jpg"
              />
            </div>
          </section>

          <section className={styles.comments}>
            <h2>Comments</h2>
            <br />
            <CommentForm />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
