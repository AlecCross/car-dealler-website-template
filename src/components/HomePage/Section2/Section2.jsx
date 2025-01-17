import React from 'react'
import styles from './Section2.module.css'

export default function Section2() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Our services</h1>
            <div className={styles.services}>
                <div className={styles.serviceColumnLeft}>
                    <div className={styles.service}>
                        <div className={styles.serviceContent}>
                            <h2 className={styles.serviceTitle}>Enhance productivity</h2>
                            <p className={styles.serviceDescription}>We are streamline your processes, optimize workflows, and empower your team to focus on what matters most – serving your customers. Say goodbye to inefficiencies and hello to increased output.</p>
                        </div>
                        <div className={styles.serviceIcon}>
                            <img src="/icons/icon-chart.svg" alt="Service 1" />
                        </div>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.serviceContent}>
                            <h2 className={styles.serviceTitle}>Complete support</h2>
                            <p className={styles.serviceDescription}>Your success is our priority. Our dedicated support team is available around the clock, ensuring that you have the assistance you need, precisely when you need it.</p>
                        </div>
                        <div className={styles.serviceIcon}>
                            <img src="/icons/icon-like.svg" alt="Service 2" />
                        </div>
                    </div>
                </div>
                <div className={styles.serviceColumnRight}>
                    <div className={styles.service}>
                        <div className={styles.serviceContent}>
                            <h2 className={styles.serviceTitle}>Innovative technology</h2>
                            <p className={styles.serviceDescription}>Stay ahead in the competitive landscape with our state-of-the-art, avant-garde POS solutions. We harness the latest advancements in technology to bring you intuitive, user-friendly systems that not only meet but exceed industry standards.</p>
                        </div>
                        <div className={styles.serviceIcon}>
                            <img src="/icons/icon-verified.svg" alt="Service 3" />
                        </div>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.serviceContent}>
                            <h2 className={styles.serviceTitle}>Reduce downtime</h2>
                            <p className={styles.serviceDescription}>Time is money, and we understand the impact of downtime on your operations. Our services are engineered to minimize disruptions.</p>
                        </div>
                        <div className={styles.serviceIcon}>
                            <img src="/icons/icon-filter.svg" alt="Service 4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
