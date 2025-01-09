import React from 'react';
import styles from './OfficesAddresses.module.css';

export default function OfficesAddresses() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Corporate offices</h2>
      <div className={styles.list}>
        <div className={styles.office}>
          <p>Los Angeles, CA</p>
          <p>1255 Canyon Avenue</p>
          <p>Los Angeles, CA 90017</p>
        </div>
        <div className={styles.office}>
          <p>New York, NY</p>
          <p>2841 Gold Street</p>
          <p>New York, NY 10005</p>
        </div>
        <div className={styles.office}>
          <p>Chicago, IL</p>
          <p>156 Oak Avenue</p>
          <p>Chicago, IL 60604</p>
        </div>
      </div>
    </div>
  );
}
