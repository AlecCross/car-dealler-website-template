import Button from '@/components/Button/Button'
import styles from './Error.module.css'
import React from 'react'

export default function Error404() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.error404}>404</div>
        <Button>Back To Home</Button>
      </div>
      <p>
        The page you're looking for might have been moved, deleted, or never existed in the first place.
        Don't worry it happens to the best of us.
      </p>
    </div>
  )
}
