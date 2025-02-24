"use client"
import LoadingDots from "@/components/shared/LoadingDots/LoadingDots";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

export type Post = {
  postId: string;
  hideCommenting: boolean;
  title: string;
  date: string;
  content: string;
  slug: string;
  featuredImage: string;
  categories: string[];
  featureFlags: Record<string, unknown>;
  publishedDate: string;
};

const Page = () => {
  const [blogs, setBlogs] = useState<Post[]>([]);

  const fetchBlogs = useCallback(async () => {
    const blogs = await fetch(`${process.env.NEXT_PUBLIC_BLOG_API}/`, {
      cache: "force-cache",
    }).then((res) => res.json());
    setBlogs(blogs.feed);
  }, [setBlogs]);

  useEffect(() => {
    if (blogs.length === 0) {
      fetchBlogs();
    }
  }, [blogs.length, fetchBlogs]);

  return (
    <div className="px-40 max-988:px-4 max-w-[80rem] mx-auto pb-24">
      <h1 className="text-5xl max-988:text-3xl font-fjalla uppercase text-center text-[#3E3E3E] mb-12">Our Latest News</h1>
      <div className="flex items-center justify-center">
        {
          blogs.length > 0 ? 
          blogs.map((blog) => (
            <Link key={blog.postId} href={`/news/${blog.slug}`} className="relative group rounded-3xl block overflow-hidden">
              <Image className="object-cover object-top w-full h-96" height={2000} width={2000} src={blog.featuredImage} priority alt={`${blog.title}'s Blog Post`} />
              <div className="flex flex-col gap-2 absolute bottom-0 left-0 right-0 h-fit p-4 bg-black/40 backdrop-blur-md">
                <div className="flex items-center justify-between gap-4 text-white">
                  <h1 className="text-2xl">{blog.title}</h1>
                  <GoArrowUpRight size={28} className="group-hover:rotate-45 transition-all duration-200" />
                </div>
                <p className="line-clamp-1 text-gray-200 mr-32">{blog.content}</p>
                <div className="flex items-center justify-end gap-2 text-white">
                  <div className="flex items-center justify-center rounded-full h-7 w-7 border-1.5 border-white">
                    <FiCalendar size={14} className="relative right-[0.5px] bottom-[0.5px]" />
                  </div>
                  <p>{dayjs(blog.publishedDate).format("MMM DD, YYYY")}</p>
                </div>
              </div>
            </Link>
          ))
          : <LoadingDots />
        }
      </div>
    </div>
  )
}

export default Page;