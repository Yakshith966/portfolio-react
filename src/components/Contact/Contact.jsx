import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}><h2>Contact
            <p>Feel free to reach out</p>
        </h2>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt="Email icon" />
                <a href="mailto:yakshithkumar948@gmail.com">yakshithkumar948@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt="Linkedin icon" />
                <a href="https://www.linkedin.com/in/yakshith-salian-a57a33246/">Linkedin.com/yakshith-salian</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt="GitHub icon" />
                <a href="https://github.com/Yakshith966">github.com/Yakshith966</a>
            </li>

        </ul>
    </footer>
}
