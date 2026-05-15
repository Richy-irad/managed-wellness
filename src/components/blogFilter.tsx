"use client";

import { useState } from "react";
import { BlogPost } from "@/lib/types";
import BlogCard from "@/components/blogCard";

type BlogFilterProps = {
  posts: BlogPost[];
};

export default function BlogFilter({ posts }: BlogFilterProps) {
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold font-josefin-sans tracking-wide transition-colors ${
              active === cat
                ? "bg-deep-blue text-white"
                : "bg-concrete text-warm-grey hover:bg-cool-grey/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
