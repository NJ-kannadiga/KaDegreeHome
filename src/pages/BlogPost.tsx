import { Link, useParams } from "wouter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BLOG_POSTS } from "@/data/blogs";
import { SEO } from "@/components/layout/SEO";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-primary mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you are looking for does not exist.</p>
        <Link href="/blog">
          <a className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </a>
        </Link>
      </div>
    );
  }

  const pageTitle = post.title + " | KaDegree Blog";

  return (
    <>
      <SEO
        title={pageTitle}
        description={post.excerpt}
        keywords={post.keywords}
      />

      <div className="min-h-screen bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </a>
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-foreground border border-accent/20"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg prose-slate max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </article>

          {/* CTA Banner */}
          <div className="mt-16 rounded-2xl bg-primary p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3 text-white">Ready to Start Your AI Career?</h2>
            <p className="text-white/80 mb-6">
              Join KaDegree's AI Full Stack Developer Program. Hands-on projects, expert mentors, and placement support.
            </p>
            <Link href="/courses">
              <a className="inline-block bg-accent text-accent-foreground font-bold px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors">
                Explore Programs
              </a>
            </Link>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-primary mb-6">More Articles</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {BLOG_POSTS.filter((p) => p.slug !== slug)
                .slice(0, 4)
                .map((related) => {
                  const relatedUrl = "/blog/" + related.slug;
                  return (
                    <Link href={relatedUrl} key={related.id}>
                      <a className="block p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-md transition-all group">
                        <div className="flex flex-wrap gap-1 mb-2">
                          {related.tags.slice(0, 2).map((t, i) => (
                            <span key={i} className="text-xs text-accent font-medium">{t}</span>
                          ))}
                        </div>
                        <p className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors leading-snug">
                          {related.title}
                        </p>
                      </a>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
