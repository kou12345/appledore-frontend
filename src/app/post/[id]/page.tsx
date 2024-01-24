"use server";

import { Post } from "@/app/page";
import { Button, Flex, GridCol, Text, Title } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);
  return (
    <>
      <GridCol span={3}></GridCol>
      <GridCol span={6}>
        <Flex justify="space-between" mb={16}>
          <Title order={1} lineClamp={1}>
            {post.title}
          </Title>
          {/* <EditButton postId={post.id} />
          <Link href={`/post/${params.id}/edit`}>Edit</Link>
          <Button leftSection={<IconEdit size={14} />} variant="default">
            <Link href={`/post/${params.id}/edit`}>Edit</Link>
          </Button>
           */}
          <Link href={`/post/${params.id}/edit`} passHref legacyBehavior>
            <Button leftSection={<IconEdit size={14} />} variant="default" component="a">
              Edit
            </Button>
          </Link>
        </Flex>

        <Text size="md">{post.content}</Text>
      </GridCol>
      <GridCol span={3}></GridCol>
    </>
  );
}

const getPostById = async (id: string): Promise<Post> => {
  const res = await fetch(`http://localhost:1323/post/${id}`);
  const data = await res.json();
  console.log(data);

  return {
    id: data.id,
    title: data.title,
    content: data.content,
    createdAt: new Date(data.created_at),
    updatedAt: new Date(data.updated_at),
  };
};
