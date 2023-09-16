import { Container, Button, Text, Avatar, Group, Space } from "@mantine/core";

export const SidebarItem = ({ data, openModal }) => {
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
            {data.pubDate}
          </Text>
        </div>
        <Text
          size={"xs"}
          c={"var(--mantine-color-stone-mason-4)"}
          tt={"uppercase"}
        >
          {data.user}
        </Text>
      </Group>
      <Text tt={"uppercase"} fw={500} c={"var(--mantine-color-stone-mason-4)"}>
        {data.title}
      </Text>
      <Space h="xs" />
      <Text
        c={"var(--mantine-color-stone-mason-4)"}
        size={"xs"}
        lineClamp={3}
        fs="italic"
      >
        {data.content}
      </Text>
      <Space h="md" />
      <Button size={"xs"} tt={"uppercase"} onClick={() => openModal(data)}>
        read more
      </Button>
    </Container>
  );
};
