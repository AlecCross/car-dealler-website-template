import React from 'react';
import styles from './Email.module.css';
import Button from '../../Button/Button';

export default function Email() {
    return <div className={styles.container}>
        <div className={styles.leftContainer}>
            <div className={styles.input}>
                <input type="email" placeholder="Enter your email" />
            </div>
            <p>By subscribing, you agree to our Privacy Policy, and you agree to receive updates from us.</p>
        </div>
                <div>
                    <Button variant='variant3'>Subscribe</Button>
                </div>
       
    </div>;
}
