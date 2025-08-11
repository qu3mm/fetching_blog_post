import { notFound } from "next/navigation";
import React from "react";

type postParams = {
  params: {
    postID: string;
  };
};


const page = async ({ params }: postParams) => {
  const param = await params;
  const res = await fetch(`https://dummyjson.com/posts/${param.postID}`);
  if (!res.ok) {
    // throw new Error("Failed to fetch post");
    notFound();
  }
  const post = await res.json();
  return (
    <div
      key={post.id}
      className="max-w-2xl max-h-4xl mx-auto my-5  bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col justify-center hover:shadow-2xl transition-shadow duration-300"
    >
      <div>
        <h2 className="text-xl font-semibold mb-3 text-blue-800">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-6">{post.body}</p>
        <div className="mb-4">
          <h3 className="text-md font-medium text-gray-700 mb-2">
            Post Details
          </h3>
          <ul className="list-disc list-inside text-gray-500">
            <li>
              <span className="font-semibold">Post ID:</span> {post.id}
            </li>
            {post.tags && post.tags.length > 0 && (
              <li>
                <span className="font-semibold">Tags:</span>{" "}
                {post.tags.join(", ")}
              </li>
            )}
            <li>
              <span className="font-semibold">Likes:</span>{" "}
              {post.reactions.likes >= 1000
                ? `${(post.reactions.likes / 1000)
                    .toFixed(1)
                    .replace(/\.0$/, "")}k`
                : post.reactions.likes}
            </li>
            <li>
              <span className="font-semibold">Dislikes:</span>{" "}
              {post.reactions.dislikes}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-green-600 font-medium">
            <svg width="16" height="16" fill="currentColor" className="inline">
              <circle cx="8" cy="8" r="8" />
            </svg>
            {post.reactions.likes >= 1000
              ? `${(post.reactions.likes / 1000)
                  .toFixed(1)
                  .replace(/\.0$/, "")}k`
              : post.reactions.likes}{" "}
            Likes
          </span>
          <span className="flex items-center gap-1 text-red-500 font-medium">
            <svg width="16" height="16" fill="currentColor" className="inline">
              <rect width="16" height="16" rx="4" />
            </svg>
            {post.reactions.dislikes} Dislikes
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
