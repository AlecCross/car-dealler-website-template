import React from 'react'
import styles from '../Card_Blog/Card_Blog.module.css'
import Image from 'next/image'

export default function Card_Blog() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrap}>
        <div className={styles.data}>Jul 10, 2023</div>
        <div className={styles.title}>Seamlessly sync your systems for efficiency</div>
      </div>
      <div className={styles.container}>
        <img src="/images/resolven6 1.png" alt="resolven6 1.png"/>
      </div>
    </div>
  )
}
