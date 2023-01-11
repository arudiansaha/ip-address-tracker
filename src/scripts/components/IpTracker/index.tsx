import React, { ChangeEvent, MouseEvent } from 'react';
import styles from '@styles/IpTracker.module.css';
import type Geolocation from '@interfaces/geolocation';
import IpTrackerInfo from './IpTrackerInfo';
import IpTrackerSearch from './IpTrackerSearch';

interface Props {
  searchValue: string;
  searchChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  searchClickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
  trackerContent: Geolocation;
}

export default function IpTracker({
  searchValue,
  searchChangeHandler,
  searchClickHandler,
  trackerContent,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <IpTrackerSearch
        value={searchValue}
        onChange={searchChangeHandler}
        onClick={searchClickHandler}
      />
      <IpTrackerInfo content={trackerContent} />
    </div>
  );
}
