import { Modal, Title, Text } from "@mantine/core";

export const PostModal = ({ opened, close, data }) => {
  return (
    <Modal opened={opened} onClose={close} withCloseButton={false}>
      <Title>{data.title}</Title>
      <Text>{data.content}</Text>
    </Modal>
  );
};
