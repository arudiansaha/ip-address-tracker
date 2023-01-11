import React from 'react';
import styles from '@styles/IpTracker.module.css';
import IpTrackerInfo from './IpTrackerInfo';
import IpTrackerSearch from './IpTrackerSearch';

export default function IpTracker() {
  return (
    <div className={styles.wrapper}>
      <IpTrackerSearch />
      <IpTrackerInfo />
    </div>
  );
}
