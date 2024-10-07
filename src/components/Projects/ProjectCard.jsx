import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <>
    <section className={styles.container}> 
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
          <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.image}
            />
      <div className={styles.topBlur} />
    </section>
    </>
  );
};
