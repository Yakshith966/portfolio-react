import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./About.module.css"

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")}
                alt="Me sitting with laptop" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon"  />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I'm a backend developer with experience in building optimized website</p>
                    </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a backend developer with experience in building optimized website using API's</p>
                    </div>
                </li >
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Flutter Developer</h3>
                        <p>I have good hands on Android development and IOS development</p>
                    </div>
                </li>
            </ul>

        </div>
    </section>

};