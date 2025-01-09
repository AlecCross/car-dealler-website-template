import React from 'react'
import styles from '../Team_Card/Team_Card.module.css'

export default function Team_Card() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <img src="/images/about us4 1.png" alt="about us4 1.png" />
            </div>
            <div className={styles.text_wrapper}>
                <div >Richard Lowe</div>
                <div >Founder</div>
            </div>
        </div>
    )
}
