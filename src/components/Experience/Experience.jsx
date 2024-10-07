import React from "react";

import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <p className={styles.text01}>Atualmente estou em uma equipe multifuncional</p>
      <p className={styles.text02}>que valoriza a melhoria da vida das pessoas através da tecnologia</p>
      <img src={getImageUrl("skills/image.png")} alt="Hero image of me" className={styles.skillsImage}/>
    </section>
  );
};
