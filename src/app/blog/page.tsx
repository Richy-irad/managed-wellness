import type { Metadata } from "next";
import blog from "@/data/blog.json";
import Hero from "@/components/hero";
import DarkCTA from "@/components/darkCTA";
import BlogFilter from "@/components/blogFilter";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Mental health insights, wellness tips, and expert articles from the therapists at Managed Wellness Centre.",
};

export default function BlogPage() {
  return (
    <main>
      <Hero
        title="Insights from our therapists and wellness experts."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        label="Our blog"
      />

      <section className="py-20 bg-white">
        <div className="container">
          <BlogFilter posts={blog} />
        </div>
      </section>

      <DarkCTA />
    </main>
  );
}
