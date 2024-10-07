import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre Mim</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Frontend</h3>
              <p>
              Sou um desenvolvedor frontend com experiência em construção responsiva
              e sites otimizados
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Backend</h3>
              <p>
              Tenho experiência no desenvolvimento de sistemas back-end rápidos e otimizados
              com APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>CyberSecurity</h3>
              <p>
              Atuo na área de segurança da informação, tenho experiência com 
              criptografia e defesa cibernética
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
