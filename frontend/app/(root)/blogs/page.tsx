"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs/")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 mt-8 text-4xl font-bold text-gray-900">
            Latest Articles
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover insightful stories and creative ideas from our community
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.length > 0 ? (
            blogs.map((blog: Record<string, string>, i) => (
              <article
                key={i}
                className="rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-full flex-col p-6">
                  <div className="mb-4">
                    <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-800">
                      {blog.category || "General"}
                    </span>
                  </div>

                  <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900">
                    {blog.title}
                  </h3>

                  <p className="mb-5 line-clamp-3 grow text-gray-600">
                    {blog.subtitle || "Read this interesting article..."}
                  </p>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-sm text-gray-500">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                    <Link
                      href={`/blogs/${blog._id}`}
                      className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700"
                    >
                      Read more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto size-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                No articles yet
              </h3>
              <p className="mt-1 text-gray-500">
                Check back later for new content
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
