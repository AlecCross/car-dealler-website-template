import React from 'react'
import styles from './Section1.module.css'

export default function Section1() {
    return (
        <section>
            <h1 className={styles.title}>Work faster and smarter with our scalable payment</h1>
            <div className={styles.hero}>
                <div className={styles.heroImages}>
                    <img src="/images/home-page/section1/Imgs.png" alt="Laptop" className={styles.mainImg} />
                </div>
                <div className={styles.heroContent}>
                    <p className={styles.description}>
                        Our guiding principle is to support many thriving small and medium-sized businesses.
                    </p>
                    <div className={styles.heroFeatures}>
                        <div className={styles.feature}>
                            <img src="/icons/section1-card2.svg" alt="Feature 1" />
                            <p>Smart terminals are designed to give you a seamless payment experience.</p>
                        </div>
                        <div className={styles.feature}>
                            <img src="/icons/section1-dollar.svg" alt="Feature 2" />
                            <p>Accept digital payments anywhere with advanced security features.</p>
                        </div>
                        <div className={styles.feature}>
                            <img src="/icons/section1-wallet.svg" alt="Feature 3" />
                            <p>Sync your payment processing with your online shopping cart.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
