import React from 'react'
import styles from '../Card_Blog/Card_Blog.module.css'

export default function Card_Blog({ imageSrc }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrap}>
        <div className={styles.data}>Jul 10, 2023</div>
        <div className={styles.title}>Seamlessly sync your systems for efficiency</div>
      </div>
      <div className={styles.container}>
        <img src={imageSrc} alt="Blog Image"/>
      </div>
    </div>
  )
}
