import React from 'react'
import styles from './Section1.module.css'

export default function Section1() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Work faster and smarter with our scalable payment</h1>
            <div className={styles.container}>
                <div className={styles.images}>
                    <img src="/images/home-page/section1/image1.png" alt="section1" />
                    <img src="/images/home-page/section1/image2.png" alt="section1" />
                </div>
                <div className={styles["container-right"]}>
                    <p className={styles.text}>Our guiding principle is to support many thriving small and medium sized businesses.</p>
                    <div className={styles.list}>
                        <div className={styles.listItem}>
                            <img src="/icons/section1-card2.svg" alt="section1" />
                            <p className={styles.listItemText}>Smart terminals are designed to give you seamless payment experience.</p>
                        </div>
                        <div className={styles.listItem}>
                            <img src="/icons/section1-dollar.svg" alt="section1" />
                            <p className={styles.listItemText}>Accept digital payments anywhere with advanced security features</p>
                        </div>
                        <div className={styles.listItem}>
                            <img src="/icons/section1-wallet.svg" alt="section1" />
                            <p className={styles.listItemText}>Sync your payment processing with your online shopping cart </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
