import React from 'react'
import styles from "./Section6.module.css";
import Card_Blog from '@/components/Card_Blog/Card_Blog';

const Section6 = () => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Srories</h3>
            <div className={styles.card_blog}>
                <Card_Blog />
                <Card_Blog />
                <Card_Blog />
            </div>
        </div>
    )
}

export default Section6
