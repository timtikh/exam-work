import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import marker from './marker-icon.png';
import { Icon } from 'leaflet'
const myIcon = new Icon({
    iconUrl: marker,
    iconSize: [50, 50]
})

const Map = ({ position }) => {
    return (
        <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={myIcon}>
                <Popup>
                    Местоположение вашего офиса.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
