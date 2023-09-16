import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { Map } from "./components/Map";
import { Sidebar } from "./components/Sidebar";

export default function App() {
  return (
    <MantineProvider
      theme={{
        primaryColor: 'stone-mason',
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
        <Sidebar />
        <Map />
      </main>
    </MantineProvider>
  );
}
