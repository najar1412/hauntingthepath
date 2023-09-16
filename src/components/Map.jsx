import { BackgroundImage, Avatar } from "@mantine/core";

import mapImage from "../assets/tmp_map.jpg";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styles from "./Map.module.css"

const MapMarker = ({ lat, long }) => {
  return (
    <Avatar
      color="var(--mantine-color-stone-mason-4)"
      size="lg"
      style={{
        position: "abolute",
        top: `${lat}`,
        left: `${long}`,
        transform: "translate(-50%, -50%)",
        backgroundColor: "var(--mantine-color-stone-mason-2)",
      }}
    />
  );
};

export const Map = ({articles}) => {
  return (
    <MapContainer className={styles.map} center={[51.505, -0.09]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {articles.map(article => <Marker position={article.latLong}>
        <Popup>
          {article.title}
        </Popup>
      </Marker>)}
      
    </MapContainer>
  );
};
