import { Container, ScrollArea } from "@mantine/core";

import { SidebarItem } from "./SidebarItem";

import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <Container h={"100vh"} style={{ overflowY: "hidden" }} pr={0}>
        <ScrollArea h={"100vh"} offsetScrollbars>
          <SidebarItem site={'Buckingham Palace'}/>
          <SidebarItem site={'Palace of Westminster'}/>
          <SidebarItem site={'Big Ben'}/>
          <SidebarItem site={'Westminster Abbey'}/>
          <SidebarItem site={'St. Paul’s Cathedral'}/>
          <SidebarItem site={'Tower Bridge'}/>
          <SidebarItem site={'Tower of London'}/>
          <SidebarItem site={'London Eye'}/>
        </ScrollArea>
      </Container>
    </aside>
  );
};
