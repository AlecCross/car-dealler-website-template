import React from 'react'
import Button from '../Button/Button'
import styles from './Section5.module.css'

export default function Section5() {
    return (
        <div className={styles.container}>
            <p className={styles.text}>
                We would love to hear from you. Fill in the web form below and our sales rep will reach out to you within 24 hours.
            </p>
            <div className={styles.forms}>
                <input className={styles.input} type="text" name="" id="" />
                <input className={styles.input} type="text" name="" id="" />
                <textarea name="" id="" className={styles.textArea}></textarea>
                <Button variant='variant3'>Sing Up</Button>
            </div>
        </div>
    )
}
