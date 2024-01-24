"use server";

import { Content } from "@/components/content";
import { GridCol } from "@mantine/core";

export type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <>
      <GridCol span={3}></GridCol>
      <GridCol span={6}>
        {posts.map((post, index) => {
          return <Content key={index} post={post} />;
        })}
      </GridCol>
      <GridCol span={3}></GridCol>
    </>
  );
}

const getPosts = async (): Promise<Post[]> => {
  const res = await fetch("http://localhost:1323/", { cache: "no-cache" });
  const data = await res.json();
  console.log("data: ", data);

  // データ整形
  const posts: Post[] = data.map((post: any) => {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      createdAt: new Date(post.created_at),
      updatedAt: new Date(post.updated_at),
    };
  });

  return posts;
};
