import React, { ChangeEvent, MouseEvent, useState } from 'react';
import axios from 'axios';
import Header from '@components/Header';
import IpTracker from '@components/IpTracker';
import MapView from '@components/MapView';
import useLocalStorage from '@hooks/use-local-storage';

export default function App() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useLocalStorage('GEO_DATA', {
    ip: '192.212.174.101',
    location: {
      country: 'US',
      city: 'Brooklyn',
      region: 'NY',
      lat: 37.40599,
      lng: -122.078514,
      postalCode: '10001',
      timezone: '-05:00',
      geonameId: 5375481,
    },
    isp: 'SpaceX Starlink',
  });

  const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const searchClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const BASE_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;
    const params = /[^\d*.\d]/gi.test(search)
      ? `domain=${search || 'google.com'}`
      : `ipAddress=${search || '8.8.8.8'}`;

    axios
      .get(`${BASE_URL}/country,city?apiKey=${API_KEY}&${params}`)
      .then((response) => setResult(response.data))
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <>
      <Header />
      <IpTracker
        searchValue={search}
        searchChangeHandler={searchChangeHandler}
        searchClickHandler={searchClickHandler}
        trackerContent={result}
      />
      <MapView latitude={result.location.lat} longitude={result.location.lng} />
    </>
  );
}
