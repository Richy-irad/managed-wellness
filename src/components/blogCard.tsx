import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/types";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block bg-surface rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative h-44 w-full">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-muted-yellow text-primary text-xs font-bold tracking-wide uppercase">
          {post.category}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-y-2">
        <h3 className="text-h4 font-bold text-dark leading-snug group-hover:text-deep-blue transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-warm-grey leading-relaxed line-clamp-2">{post.excerpt}</p>
        <div className="mt-2 flex items-center gap-x-3 text-xs text-cool-grey">
          <span>{post.author}</span>
          <span>·</span>
          <span>{post.readingTimeMinutes} min read</span>
        </div>
      </div>
    </Link>
  );
}
