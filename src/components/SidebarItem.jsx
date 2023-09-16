import {
  Container,
  Button,
  Text,
  Avatar,
  Group,
  Space,
} from "@mantine/core";

export const SidebarItem = ({ site }) => {
  return (
    <Container py={"2rem"}>
      <Group justify="space-between" opacity={0.8}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            size={"xs"}
            mr={"1rem"}
            color={"var(--mantine-color-stone-mason-4)"}
          />
          <Text
            size={"xs"}
            c={"var(--mantine-color-stone-mason-4)"}
            tt={"uppercase"}
          >
            Alex
          </Text>
        </div>
        <Text
          size={"xs"}
          c={"var(--mantine-color-stone-mason-4)"}
          tt={"uppercase"}
        >
          21 Mar 2023
        </Text>
      </Group>
      <Text tt={"uppercase"} fw={500} c={"var(--mantine-color-stone-mason-4)"}>
        {site}
      </Text>
      <Space h="xs" />
      <Text c="white" size={"xs"} lineClamp={3} fs="italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <Space h="md" />
      <Button size={"xs"} tt={"uppercase"}>
        read more
      </Button>
    </Container>
  );
};
