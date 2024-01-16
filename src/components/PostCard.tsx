import Link from "next/link";
import { TPost } from "./PostList";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

type Props = {
  post: TPost;
};

export const PostCard = (props: Props) => {
  const { post } = props;
  console.log(post);
  return (
    <Card className="my-5">
      <CardHeader>
        <CardTitle>
          <Link href={`/post/${post.id}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent>{<p>{post.content}</p>}</CardContent>
      <CardFooter>
        <div>
          <p>作成日時: {post.createdAt.toLocaleString("ja")}</p>
          <p>更新日時: {post.updatedAt.toLocaleString("ja")}</p>
        </div>
      </CardFooter>
    </Card>
  );
};
