import React from 'react'
import GrowYourBusiness from '../GrowYourBusiness/GrowYourBusiness'
import styles from './Logos.module.css'

export default function Logos() {
    return (
        <div className={styles["logos-wrapper"]}>
            <GrowYourBusiness />
            <GrowYourBusiness />
            <GrowYourBusiness />
            <GrowYourBusiness />
            <GrowYourBusiness />
            <GrowYourBusiness />
        </div>
    )
}
