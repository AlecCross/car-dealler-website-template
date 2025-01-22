import Card_Blog from '@/components/Card_Blog/Card_Blog'
import React from 'react'
import styles from './Stories.module.css'

export default function Stories() {
  return (
    <div>
      <h1>Stories</h1>
      <div className={styles.cards}>
        <Card_Blog imageSrc={"/images/stories/resolven6 1.png"} />
        <Card_Blog imageSrc={"/images/stories/image2.png"} />
        <Card_Blog imageSrc={"/images/stories/image3.png"} />
        <Card_Blog imageSrc={"/images/stories/image4.png"} />
        <Card_Blog imageSrc={"/images/stories/image5.png"} />
        <Card_Blog imageSrc={"/images/stories/image.png"} />
      </div>
    </div>
  )
}
