import React from 'react';
import Header from '@components/Header';
import IpTracker from '@components/IpTracker';
import MapView from '@components/MapView';

export default function App() {
  return (
    <>
      <Header />
      <IpTracker />
      <MapView />
    </>
  );
}
