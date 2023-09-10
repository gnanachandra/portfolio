/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
interface Blog {
  slug: string;
  title: string;
  brief: string;
  coverImage: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.post("https://api.hashnode.com/", {
          query: `
            {
              user(username: "gnanachandra") {
                publication {
                  posts(page: 0) {
                    slug
                    title
                    brief
                    coverImage
                  }
                }
              }
            }
          `,
        });
        const { data } = response.data;
        if (data && data.user && data.user.publication) {
          const { posts } = data.user.publication;
          setBlogs(posts);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div id="blogs" className="w-full py-10 bg-white">
      <div className="mx-auto">
        <div className="flex flex-wrap w-full mb-4 flex-col items-center text-center md:mb-10">
          <h1 className="text-3xl lg:text-4xl font-medium mb-2 text-gray-900">
            Blogs
          </h1>
          <p className="text-lg font-medium leading-relaxed text-gray-500 ">
            Read my latest articles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 h-full gap-10 mx-auto w-full">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="rounded-md border border-black w-full"
            >
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="h-48 w-full object-cover rounded-t-md"
              />
              <div className="p-4 flex flex-col justify-between">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600">
                  {blog.brief.split(" ").slice(0, 25).join(" ")}
                </p>
                <div className="mt-4">
                  <Button>
                    <a
                      href={`https://gnanachandra.hashnode.dev/${blog.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More{" "}
                      <ArrowUpRight className="inline-block ml-1" size={12} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
