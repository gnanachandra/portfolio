/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowUpRight, Calendar, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Blog {
  slug: string;
  title: string;
  brief: string;
  url: string;
  publishedAt: string;
  readTimeInMinutes: number;
  coverImage: {
    url: string;
    attribution?: string;
    photographer?: string;
  } | null;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.post("https://gql.hashnode.com", {
          query: `
            query Publication {
              publication(host: "gnanachandra.hashnode.dev") {
                posts(first: 6) {
                  edges {
                    node {
                      title
                      brief
                      url
                      slug
                      publishedAt
                      readTimeInMinutes
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

        if (data?.publication?.posts?.edges) {
          const posts = data.publication.posts.edges.map(
            (edge: any) => edge.node
          );
          setBlogs(posts);
        } else {
          setError("No blog posts found");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Failed to fetch blog posts");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white" id="blogs">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="inline-block mb-4">
              <span className="px-3 py-1 text-sm font-medium text-orange-800 bg-orange-100 rounded-full">
                📝 Latest Articles
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
              Blog Posts
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Loading my latest articles...
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white shadow-lg rounded-2xl animate-pulse">
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="p-6 space-y-4">
                  <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
                  <div className="w-full h-4 bg-gray-300 rounded"></div>
                  <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
                  <div className="w-1/2 h-10 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white" id="blogs">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="px-3 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-full">
                ❌ Error
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
              Blog Posts
            </h1>
            <p className="text-xl text-red-500">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white" id="blogs">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="px-3 py-1 text-sm font-medium text-orange-800 bg-orange-100 rounded-full">
              📝 Latest Articles
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Blog Posts
          </h1>
          <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-600">
            Read my latest thoughts on technology, development, and industry
            insights.
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={
                    blog.coverImage?.url ||
                    "/placeholder.svg?height=200&width=400"
                  }
                  alt={blog.title}
                  className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:opacity-100" />

                {/* Floating Read Time */}
                {blog.readTimeInMinutes && (
                  <div className="absolute flex items-center gap-1 px-3 py-1 text-sm font-medium text-gray-700 rounded-full top-4 right-4 bg-white/90 backdrop-blur-sm">
                    <Clock size={12} />
                    {blog.readTimeInMinutes} min
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-gray-900 transition-colors duration-300 line-clamp-2 group-hover:text-orange-600">
                    {blog.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">
                    {blog.brief && blog.brief.split(" ").length > 25
                      ? `${blog.brief.split(" ").slice(0, 25).join(" ")}...`
                      : blog.brief}
                  </p>
                </div>

                {blog.publishedAt && (
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>
                      {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                )}

                <Button
                  variant="outline"
                  className="w-full text-orange-600 transition-all duration-300 border-2 border-orange-200 group/button hover:bg-orange-500 hover:text-white hover:border-orange-500"
                  asChild>
                  <a
                    href={
                      blog.url ||
                      `https://gnanachandra.hashnode.dev/${blog.slug}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2">
                    <BookOpen size={16} />
                    Read Article
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                    />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {blogs.length === 0 && !loading && !error && (
          <div className="py-16 text-center">
            <div className="mb-4 text-6xl">📝</div>
            <p className="text-xl text-gray-500">
              No blog posts available at the moment.
            </p>
          </div>
        )}

        {/* Call to Action */}
        {blogs.length > 0 && (
          <div className="mt-16 text-center">
            <p className="mb-6 text-gray-600">Want to read more articles?</p>
            <a
              href="https://gnanachandra.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-xl hover:scale-105">
              Visit My Blog
              <ArrowUpRight className="ml-2" size={18} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
