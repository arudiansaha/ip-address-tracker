import React from 'react';
import styles from '@styles/IpTracker.module.css';
import type Geolocation from '@interfaces/geolocation';

interface Props {
  content: Geolocation;
}

export default function IpTrackerInfo({ content }: Props) {
  return (
    <div className={styles.info}>
      <span className={styles.field}>
        <h2 className={styles.title}>Ip Address</h2>
        <p className={styles.text}>{content.ip}</p>
      </span>

      <span className={styles.divide} />

      <span className={styles.field}>
        <h2 className={styles.title}>Location</h2>
        <p
          className={styles.text}
        >{`${content.location.city}, ${content.location.region} ${content.location.postalCode}`}</p>
      </span>

      <span className={styles.divide} />

      <span className={styles.field}>
        <h2 className={styles.title}>Timezone</h2>
        <p className={styles.text}>{`UTC${content.location.timezone}`}</p>
      </span>

      <span className={styles.divide} />

      <span className={styles.field}>
        <h2 className={styles.title}>Isp</h2>
        <p className={styles.text}>{content.isp}</p>
      </span>
    </div>
  );
}
