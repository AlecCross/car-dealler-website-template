import React from 'react';
import styles from './Nav.module.css';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>PayPalace</div>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/stories">Stories</Link>
      <div className={styles.menu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </nav>
  );
}
