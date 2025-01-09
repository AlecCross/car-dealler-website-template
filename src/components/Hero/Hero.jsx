import React from 'react'
import Button from '../Button/Button'
import styles from  '../Hero/Hero.module.css'

export default function Hero() {
    return (
        <div>
            <p>An entirely new visual experience for wireless POS devices</p>
             <div className={styles.wrapper}>
                <Button>Contact</Button>
                <p>An entirely new visual experience for wireless POS devices</p>
            </div>
        </div>
    )
}
