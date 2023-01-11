import React from 'react';
import styles from '@styles/MapView.module.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function MapView() {
  return (
    <div className={styles.background}>
      <div className={styles.pattern} />
      <MapContainer
        center={[0, 0]}
        zoom={13}
        scrollWheelZoom
        style={{ height: '80vh' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>You are on here.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
