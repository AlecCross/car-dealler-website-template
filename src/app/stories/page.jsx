import Card_Blog from '@/components/Card_Blog/Card_Blog'
import React from 'react'
import styles from './Stories.module.css'

export default function Stories() {
  return (
    <div>
      Stories
      <div className={styles.cards}>
        <Card_Blog />
        <Card_Blog />
        <Card_Blog />
        <Card_Blog />
        <Card_Blog />
        <Card_Blog />
      </div>
    </div>
  )
}
