import React from 'react';
import styles from './Button.module.css';

export default function Button({ variant = 'default', children }) {
    // Збираємо класи на основі переданого варіанту outline variant3
    const buttonClass = `${styles.button} ${styles[variant]}`;

    return (
        <button className={buttonClass}>
            {children}
        </button>
    );
}
