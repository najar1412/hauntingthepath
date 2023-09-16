import { BackgroundImage, Avatar } from "@mantine/core";

import mapImage from "../assets/tmp_map.jpg";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import articleIcon from "../assets/push_pin_FILL1_wght700_GRAD200_opsz48.svg"

import styles from "./Map.module.css"

const redIcon = L.icon({
  iconUrl: articleIcon,
  iconSize: [40, 40],
  // popupAnchor: [0, -20]
});

export const Map = ({articles}) => {
  return (
    <MapContainer className={styles.map} center={[51.505, -0.09]} zoom={13} boundsOptions={{
      paddingLeft: 360,
    }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {articles.map(article => <Marker position={article.latLong} icon={redIcon}>
        <Popup>
          {article.title}
        </Popup>
      </Marker>)}
      
    </MapContainer>
  );
};
