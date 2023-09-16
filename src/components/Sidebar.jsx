import { Container, ScrollArea } from "@mantine/core";

import { SidebarItem } from "./SidebarItem";

import styles from "./Sidebar.module.css";

export const Sidebar = ({openModal, articles}) => {
  
  return (
    <aside className={styles.aside}>
      <Container h={"100vh"} style={{ overflowY: "hidden" }} pr={0}>
        <ScrollArea h={"100vh"} offsetScrollbars>
          {
            articles.map(article => <SidebarItem data={article} openModal={openModal} />)
          }
        </ScrollArea>
      </Container>
    </aside>
  );
};
