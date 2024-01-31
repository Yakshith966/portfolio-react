import React, { useState, useEffect } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    const textToType = "Hi, I'm Yakshith";
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= textToType.length) {
        setVisibleText(textToType.substring(0, index));
        index += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 300); // Adjust the interval for typing speed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={`${styles.title} ${styles.typingAnimation}`}>
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>{visibleText}</span>
        </h1>
        <p className={styles.description}>
          I'm a full-stack developer. Reach out if you have any query...!
        </p>
        <a href="mailto:yakshithkumar948@gmail.com" className={styles.contactBtn}>
          Contact
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
