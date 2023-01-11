import React from 'react';
import styles from '@styles/IpTracker.module.css';

export default function IpTrackerInfo() {
  return (
    <div className={styles.info}>
      <span className={styles.field}>
        <h2 className={styles.title}>Ip Address</h2>
        <p className={styles.text}>192.168.0.1</p>
      </span>

      <span className={styles.divide} />

      <span className={styles.field}>
        <h2 className={styles.title}>Location</h2>
        <p className={styles.text}>Brooklyn, NY 1001</p>
      </span>

      <span className={styles.divide} />

      <span className={styles.field}>
        <h2 className={styles.title}>Timezone</h2>
        <p className={styles.text}>UTC-05.00</p>
      </span>

      <span className={styles.divide} />

      <span className={styles.field}>
        <h2 className={styles.title}>Isp</h2>
        <p className={styles.text}>SpaceX Starlink</p>
      </span>
    </div>
  );
}
