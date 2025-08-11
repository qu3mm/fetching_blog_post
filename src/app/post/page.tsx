import Link from "next/link";

type Post = {
  posts: {
    id: number;
    title: string;
    body: string;
    tags?: string[] | undefined;
    reactions: {
      likes: number;
      dislikes: number;
    };
  }[];
};

const page = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data: Post = await res.json();

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
          >
            <div>
              <h2 className="tex    t-xl font-semibold mb-3 text-blue-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-6">{post.body}</p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-sm">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-green-600 font-medium">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="inline"
                  >
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
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="inline"
                  >
                    <rect width="16" height="16" rx="4" />
                  </svg>
                  {post.reactions.dislikes} Dislikes
                </span>
              </div>
              <Link
                href={`/post/${post.id}`}
                className="text-blue-600 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
