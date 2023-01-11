import React from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
  useMap,
} from 'react-leaflet';
import L from 'leaflet';
import styles from '@styles/MapView.module.css';
import 'leaflet/dist/leaflet.css';

interface Props {
  latitude: number;
  longitude: number;
}

function LocationMarker({ latitude, longitude }: Props) {
  const map = useMap();
  map.flyTo([latitude, longitude], 15);

  const icon = L.icon({
    iconUrl: 'src/assets/images/icon-location.png',
    iconSize: [41, 47],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });

  return (
    <Marker position={[latitude, longitude]} icon={icon}>
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
