"use client";

import { Button } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

type Props = {
  postId: string;
};

export const EditButton = (props: Props) => {
  const router = useRouter();
  return (
    <Button
      leftSection={<IconEdit size={14} />}
      variant="default"
      onClick={() => router.push(`/post/${props.postId}/edit`)}
    >
      Edit
    </Button>
  );
};
