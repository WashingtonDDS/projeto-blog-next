import { TPostProps } from "@/types/typeBlog";
import { createRequest } from "@/utils/createRequest";

const getPost = async (id: string) => {
  const post = await createRequest(`/posts/${id}`, {
    method: "GET",
  });
  return post;
};

export default async function Post({ params }: TPostProps) {
  const post = await getPost(params.id);
  return (
    <div className="py-6 px-6 lg:py-12 text-center max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold tracking-tight">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
