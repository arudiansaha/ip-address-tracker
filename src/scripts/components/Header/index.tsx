import React from 'react';
import styles from '@styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <h1 className={styles.title}>IP Address Tracker</h1>
    </header>
  );
}
