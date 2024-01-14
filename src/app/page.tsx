"use server";

import { Header } from "@/components/Header";
import { PostList } from "@/components/PostList";

export default async function Home() {
  return (
    <div>
      <Header />
      <PostList />
    </div>
  );
}
