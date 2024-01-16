"use server";

import { TPost } from "@/components/PostList";

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-start-2  col-span-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {post.title}
        </h1>
        <div className="mt-3">
          <p>
            <small className="text-sm font-medium leading-none">
              作成日時: {post.createdAt.toLocaleString("ja")}
            </small>
          </p>
          <p>
            <small className="text-sm font-medium leading-none">
              更新日時: {post.updatedAt.toLocaleString("ja")}
            </small>
          </p>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">{post.content}</p>
      </div>
    </div>
  );
}

const getPostById = async (id: string): Promise<TPost> => {
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
