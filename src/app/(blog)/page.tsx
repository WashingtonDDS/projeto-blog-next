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
  const posts: TPost[] = await getData();
  return (
    <div className="py-6 lg:py-12">
      <div className="grid gap-6 px-4 mx-auto md:grid-cols-2 md:px-6 lg:grid-cols-2xl max-w-6xl">
        {posts.map((item) => (
          <div className="space-y-2" key={item.id}>
            <Link className="font-medium" href="#">
              <h2 className="text-2xl font-bold tracking-tight leading-6">
                The Art of the Perfect Cup: A Coffee Lover's Guide
              </h2>
            </Link>
            <p className="text-gray-500 dark:text-gray-400">
              Posted on August 24, 2023
            </p>
            <p>
              For many people, the day doesn't truly start until they've had
              their first cup of coffee. Whether it's a rich and velvety latte,
              a bold and...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
