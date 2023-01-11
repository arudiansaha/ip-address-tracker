import React, { ChangeEvent, MouseEvent } from 'react';
import styles from '@styles/IpTracker.module.css';

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function IpTrackerSearch({ value, onChange, onClick }: Props) {
  return (
    <form className={styles.search}>
      <input
        type="text"
        name=""
        id=""
        className={styles.input}
        placeholder="Search for any IP address or domain"
        value={value}
        onChange={onChange}
      />
      <button type="submit" className={styles.submit} onClick={onClick}>
        Search
      </button>
    </form>
  );
}
