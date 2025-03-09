import { TPost } from "@/types/typeBlog";
import { createRequest } from "@/utils/createRequest";
import Link from "next/link";

const getData = async () => {
  const posts = await createRequest("/posts", {
    method: "GET",
  });
  return posts;
};

export default async function Blog() {
  const posts: TPost[] = (await getData()) as TPost[];
  return (
    <div className="py-6 lg:py-12">
      <div className="grid gap-6 px-4 mx-auto md:grid-cols-2 md:px-6 lg:grid-cols-2xl max-w-6xl">
        {posts.map((item) => (
          <div className="space-y-2" key={item.id}>
            <Link className="font-medium" href={`/${item.id}`}>
              <h2 className="text-2xl font-bold tracking-tight leading-6">
                {item.title}
              </h2>
            </Link>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
