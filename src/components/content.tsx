import { Post } from "@/app/page";
import { Box, Card, Group, Text, Title } from "@mantine/core";
import Link from "next/link";

type Props = {
  post: Post;
};

export const Content = (props: Props) => {
  const { post } = props;
  return (
    <Card padding="xl" my={20}>
      <Group justify="space-between" mt="10" mb="xs">
        <Box maw={800}>
          <Title order={2} lineClamp={1}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </Title>
        </Box>
      </Group>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} lineClamp={3}>
          {post.content}
        </Text>
      </Group>
    </Card>
  );
};
