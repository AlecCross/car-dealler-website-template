import React from 'react';
import styles from './Section1-About.module.css';

const Section1About = () => {
    return (
        <div className={styles.section1}>
            <div className={styles.container}>
                <h1>About Us</h1>
                <p>If you're just getting started or searching for a change, you've come to the correct spot.</p>
            </div>
            <img src="/images/about/AboutUs.png" alt="About Us" className={styles.image} />
        </div>
    );
};

export default Section1About;
