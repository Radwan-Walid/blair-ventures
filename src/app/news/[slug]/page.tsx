import dayjs from "dayjs";
import { Post } from "../page";
import Image from "next/image";

type slugParams = Promise<{ slug: string }>;

const BlogPost = async ({ params }: { params: slugParams }) => {
    const { slug } = await params;

    const post: Post = (
      await fetch(`${process.env.NEXT_PUBLIC_BLOG_API}/`, {
        cache: "force-cache",
      }).then((res) => res.json())
    ).feed.find((post: Post) => post.slug === slug);

  return (
    <div className="px-40 max-988:px-4 max-w-[80rem] mx-auto pb-24 flex flex-col gap-4">
      <Image className="object-cover object-top w-full h-96 rounded-3xl" height={2000} width={2000} src={post.featuredImage} priority alt={`${post.title}'s Blog Post`} />
      <p className="px-4 py-0.5 text-white rounded-full bg-gray-400 w-fit">{dayjs(post.publishedDate).format("MMM DD, YYYY")}</p>
      <p className="text-lg">{post.content}</p>
    </div>
  )
}

export default BlogPost;