import React from 'react';
import styles from '@styles/IpTracker.module.css';

export default function IpTrackerSearch() {
  return (
    <form className={styles.search}>
      <input
        type="text"
        name=""
        id=""
        className={styles.input}
        placeholder="Search for any IP address or domain"
      />
      <button type="submit" className={styles.submit}>
        Search
      </button>
    </form>
  );
}
