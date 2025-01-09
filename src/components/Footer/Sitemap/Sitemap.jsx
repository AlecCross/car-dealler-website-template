import React from 'react'
import styles from './Sitemap.module.css'

export default function Sitemap() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Sitemap</div>
            <div className={styles.list}>
                <div>Home</div>
                <div>About Us</div>
                <div>Stories</div>
                <div>Contacts</div>
                <div>404 page</div>
            </div>
        </div>
    )
}
