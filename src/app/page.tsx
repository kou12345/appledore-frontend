"use server";

import { Header } from "@/components/Header";
import { PostList } from "@/components/PostList";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-6 gap-4  ">
        <Suspense fallback={<Loading />}>
          <PostList />
        </Suspense>
      </div>
    </div>
  );
}

const Loading = () => {
  return (
    <div className="col-start-2  col-span-4">
      <div className="space-y-2">
        <Card className="my-5">
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-4 w-3/4" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="mb-1 h-4 w-2/3" />
            <Skeleton className="mb-1 h-4 w-5/6" />
            <Skeleton className="mb-1 h-4 w-3/4" />
            <Skeleton className="mb-1 h-4 w-5/6" />
          </CardContent>
          <CardFooter className="block">
            <Skeleton className="mb-1 h-4 w-1/2" />
            <Skeleton className="h-4 w-1/2" />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
