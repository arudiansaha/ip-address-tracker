import React from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
  useMap,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import styles from '@styles/MapView.module.css';
import 'leaflet/dist/leaflet.css';
import markerIcon from '@assets/images/icon-location.png';

interface Props {
  latitude: number;
  longitude: number;
}

function LocationMarker({ latitude, longitude }: Props) {
  const map = useMap();
  map.flyTo([latitude, longitude], 15);

  return (
    <Marker
      position={[latitude, longitude]}
      icon={
        new Icon({
          iconUrl: markerIcon,
          iconSize: [46, 52],
          iconAnchor: [12, 41],
        })
      }
    >
      <Popup>Found it!</Popup>
    </Marker>
  );
}

export default function MapView({ latitude, longitude }: Props) {
  return (
    <div className={styles.background}>
      <div className={styles.pattern} />
      <MapContainer
        zoomControl={false}
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom
        style={{ height: '68vh' }}
      >
        <ZoomControl position="bottomright" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker latitude={latitude} longitude={longitude} />
      </MapContainer>
    </div>
  );
}
