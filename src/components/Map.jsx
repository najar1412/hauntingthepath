import { BackgroundImage, Avatar } from "@mantine/core";

import mapImage from "../assets/tmp_map.jpg";

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
        backgroundColor: 'var(--mantine-color-stone-mason-2)'
      }}
    />
  );
};

export const Map = () => {
  return (
    <BackgroundImage
      h={"100vh"}
      w={"100vw"}
      src={mapImage}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1, overflow: 'hidden' }}
    >
      <MapMarker lat={"12%"} long={"75%"} />
      <MapMarker lat={"50%"} long={"12%"} />
      <MapMarker lat={"25%"} long={"43%"} />
      <MapMarker lat={"42%"} long={"91%"} />
    </BackgroundImage>
  );
};
