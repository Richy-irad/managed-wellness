import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import blog from "@/data/blog.json";
import SectionLabel from "@/components/sectionLabel";
import DarkCTA from "@/components/darkCTA";
import BlogCard from "@/components/blogCard";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blog.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blog.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blog
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  return (
    <main>
      <section className="bg-hero-bg py-20 lg:py-28 px-5 lg:px-0">
        <div className="lg:mx-40 flex flex-col gap-y-6 max-w-3xl">
          <SectionLabel label={post.category} inverted />
          <h1 className="text-h1 font-bold text-white leading-tight tracking-tight">
            {post.title}
          </h1>
          <p className="text-body-lg text-white/70">{post.excerpt}</p>
          <div className="flex items-center gap-x-4 text-sm text-white/50 font-josefin-sans">
            <span>{post.author}</span>
            <span>·</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{post.readingTimeMinutes} min read</span>
          </div>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-x-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span aria-hidden="true">›</span>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <span aria-hidden="true">›</span>
              </li>
              <li className="text-white/90">{post.title}</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="px-5 lg:px-0 bg-white pt-12">
        <div className="lg:mx-40">
          <div className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-5 lg:px-0 bg-white">
        <div className="lg:mx-40 max-w-2xl">
          <p className="text-body-lg text-warm-grey leading-relaxed">{post.content}</p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 px-5 lg:px-0 bg-section-wash">
          <div className="lg:mx-40 flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-3">
              <SectionLabel label="More Articles" />
              <h2 className="text-h3 font-bold text-dark">Related reading</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <DarkCTA />
    </main>
  );
}
