import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, me chamo Matheus</h1>
        <p className={styles.description}>
        Sou um engenheiro de software apaixonado por programar, 
        com habilidades em front-end, back-end e segurança da informação, sempre em busca de inovação e aprimoramento.
        </p>
        <a href="mailto:matheus.cantieree@gmail.com" className={styles.contactBtn}>
          Contato
        </a>
      </div>
      <img src={getImageUrl("hero/me-image-hero-icon.jpg")} alt="Hero image of me" className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
