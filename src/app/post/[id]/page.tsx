"use server";

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);
  return <div className="grid grid-cols-6 gap-4"></div>;
}

const getPostById = async (id: string) => {
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
