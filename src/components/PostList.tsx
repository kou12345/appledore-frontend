"use server";

import { PostCard } from "./PostCard";

export const PostList = async () => {
  const posts = await getPosts();
  return (
    <div className="col-start-2  col-span-4">
      {posts.map((post, index) => {
        return <PostCard key={index} post={post} />;
      })}
    </div>
  );
};

const getPosts = async (): Promise<TPost[]> => {
  const res = await fetch("http://localhost:1323/", { cache: "no-store" });
  const data = await res.json();
  console.log(data);
  if (!res.ok) {
    console.log("error");
    return [];
  }
  const posts = data.map((post: any) => {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      createdAt: new Date(post.created_at),
      updatedAt: new Date(post.updated_at),
    };
  });
  console.log(posts);
  return posts;
};

export type TPost = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};
