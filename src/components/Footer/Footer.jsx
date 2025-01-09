import React from 'react'
import styles from './Footer.module.css'
import FollowUs from './FollowUs/FollowUs'
import Sitemap from './Sitemap/Sitemap'

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.container}>
                <div>
                    <p>By subscribing, you agree to our Privacy Policy, and you agree to receive updates from us.</p>
                </div>
                <div><FollowUs /></div>
                <div><Sitemap /></div>
            </div>
            <div>Container</div>
            <div className={styles.logo}>PayPalace</div>
        </footer>
    )
}
