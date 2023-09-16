import "@mantine/core/styles.css";
import "leaflet/dist/leaflet.css";

import { useEffect, useState } from "react";

import { MantineProvider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Map } from "./components/Map";
import { Sidebar } from "./components/Sidebar";
import { PostModal } from "./components/PostModal";

import { data } from "./data/data";

export default function App() {
  const [opened, { open, close }] = useDisclosure(false);
  const [postData, setPostData] = useState({});
  const [articles, setArticles] = useState([]);

  const handleModal = () => {
    // setPostData()
    open();
  };

  useEffect(() => {
    setArticles(data);
  }, []);

  return (
    <MantineProvider
      theme={{
        primaryColor: "stone-mason",
        primaryShade: 2,
        colors: {
          "stone-mason": [
            "#8191a6",
            "#626973",
            "#bfa393",
            "#8c796d",
            "#0d0d0d",
            "#8191a6",
            "#626973",
            "#bfa393",
            "#8c796d",
            "#0d0d0d",
          ],
        },
      }}
    >
      <main>
        <Sidebar openModal={handleModal} articles={articles} />
        <Map articles={articles} />
      </main>
      <PostModal opened={opened} close={close} data={postData} />
    </MantineProvider>
  );
}
