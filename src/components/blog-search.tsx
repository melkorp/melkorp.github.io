"use client";

import { useMemo, useState } from "react";

import Link from "next/link";

import { posts } from "@/data/blog";

export default function BlogSearch() {
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const searchContent = `
        ${post.title}
        ${post.description}
        ${post.tags.join(" ")}
      `.toLowerCase();

      return searchContent.includes(query.toLowerCase());
    });
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Поиск статьи..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="mb-10 w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4 outline-none transition focus:border-blue-500"
      />

      <div className="grid gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8"
          >
            <h2 className="mb-4 text-2xl font-semibold">{post.title}</h2>

            <p className="mb-6 text-zinc-400">{post.description}</p>

            <div className="mb-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-400 transition hover:text-blue-300"
            >
              Читать →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
