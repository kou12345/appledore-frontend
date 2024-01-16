import { BasicPluginsComponentsDemo } from "@/components/basic-editor";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Post Edit</h1>
      {params.id}
      <BasicPluginsComponentsDemo />
    </div>
  );
}
