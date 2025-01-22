import React from 'react';
import styles from './Section2.module.css';

const Section2 = () => {
    return (
        <div className={styles.section2}>
            <div className={styles.container}>
                <h2>Our value</h2>
                <p>We are a team of professionals who are passionate about what we do. We are dedicated to providing the best service to our clients.</p>
                <p>Recently with the spread of the sober curious movement, we are seeing more bars, restaurants and services offering a variety of non-alcoholic beverages. However, we still feel that there is space for non-alcoholic beverages that are better-suited for people who want to pair with a good meal. It can often be too sugary or sweet. It can be healthy but not so tasty.</p>
            </div>
            <img src="/images/about-us.png" alt="About Us" className={styles.image} />
        </div>
    );
};

export default Section2;
