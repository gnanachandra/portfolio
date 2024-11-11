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
        const response = await axios.post("https://gql.hashnode.com", {
          query: `
            query Publication {
              publication(host: "gnanachandra.hashnode.dev") {
                posts(first: 10) {
                  edges {
                    node {
                      title
                      brief
                      url
                      slug
                      
                      coverImage {
                        url
                        attribution
                        photographer
                      }
                    }
                  }
                }
              }
            }
          `,
        });
        const { data } = response.data;
        const posts = data.publication.posts.edges;
        const blogs: any[] | ((prevState: Blog[]) => Blog[]) = []
        posts?.map((post: { node: any; })=>{
          blogs.push(post.node)        
        })
        setBlogs(blogs)
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div id="blogs" className="py-10 w-full bg-white">
      <div className="mx-auto">
        <div className="flex flex-col flex-wrap items-center mb-4 w-full text-center md:mb-10">
          <h1 className="mb-2 text-3xl font-medium text-gray-900 lg:text-4xl">
            Blogs
          </h1>
          <p className="text-lg font-medium leading-relaxed text-gray-500">
            Read my latest articles
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-4 gap-10 mx-auto w-full h-full md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="w-full rounded-md border border-black">
              <img
                src={blog.coverImage?.url}
                alt={blog.title}
                className="object-cover w-full h-48 rounded-t-md"
              />
              <div className="flex flex-col justify-between p-4">
                <h2 className="mb-2 text-xl font-semibold">{blog.title}</h2>
                <p className="text-gray-600">
                  {blog.brief.split(" ").slice(0, 25).join(" ")}
                </p>
                <div className="mt-4">
                  <Button>
                    <a
                      href={`https://gnanachandra.hashnode.dev/${blog.slug}`}
                      target="_blank"
                      rel="noopener noreferrer">
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
