import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/types";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col justify-between rounded-2xl overflow-hidden min-h-[22.5rem] p-6 hover:-translate-y-1 transition-transform duration-250"
    >
      <Image
        src={post.coverImage}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div
        className="absolute inset-0 z-10"
        style={{ background: "linear-gradient(to top, var(--color-overlay-photo) 0%, transparent 60%)" }}
      />

      <span className="relative z-20 self-start px-3 py-1 rounded-full bg-sage-green text-primary text-xs font-bold tracking-wide uppercase">
        {post.category}
      </span>

      <div className="relative z-20 flex flex-col gap-y-2">
        <h3 className="text-h4 font-bold text-white leading-snug line-clamp-2">{post.title}</h3>
        <p className="text-sm text-white/80 leading-relaxed line-clamp-2">{post.excerpt}</p>
        <div className="mt-1 flex items-center gap-x-3 text-xs text-white/60">
          <span>{post.author}</span>
          <span>·</span>
          <span>{post.readingTimeMinutes} min read</span>
        </div>
      </div>
    </Link>
  );
}
