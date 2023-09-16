import { useEffect, useState } from "react";
import { Container, ScrollArea } from "@mantine/core";

import { SidebarItem } from "./SidebarItem";

import styles from "./Sidebar.module.css";

import {data} from "../data/data"

export const Sidebar = ({openModal, articles}) => {
  

  return (
    <aside className={styles.aside}>
      <Container h={"100vh"} style={{ overflowY: "hidden" }} pr={0}>
        <ScrollArea h={"100vh"} offsetScrollbars>
          {
            articles.map(article => <SidebarItem data={article} />)
          }
          {/* <SidebarItem site={'Buckingham Palace'} openModal={openModal}/>
          <SidebarItem site={'Palace of Westminster'} openModal={openModal}/>
          <SidebarItem site={'Big Ben'} openModal={openModal}/>
          <SidebarItem site={'Westminster Abbey'} openModal={openModal}/>
          <SidebarItem site={'St. Paul’s Cathedral'} openModal={openModal}/>
          <SidebarItem site={'Tower Bridge'} openModal={openModal}/>
          <SidebarItem site={'Tower of London'} openModal={openModal}/>
          <SidebarItem site={'London Eye'} openModal={openModal}/> */}
        </ScrollArea>
      </Container>
    </aside>
  );
};
