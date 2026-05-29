import { Link } from 'wouter';
import { BLOG_POSTS } from '@/data/blogs';
import { SEO } from '@/components/layout/SEO';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <>
      <SEO
        title="KaDegree Blog - AI, Full Stack & Career Insights"
        description="Read the latest articles on AI Full Stack development, career roadmaps, interview preparation, and placement strategies."
        keywords="AI Full Stack Course, React JS Course, Python Course, Placement Training Bangalore, IT Courses"
      />

      <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">
              Latest Insights &amp; Tutorials
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert advice on coding, AI, and launching your tech career in 2026.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => {
              const postUrl = "/blog/" + post.slug;
              return (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col border border-slate-100"
                >
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold text-primary mb-3 hover:text-accent transition-colors leading-snug">
                      <Link href={postUrl}>{post.title}</Link>
                    </h2>
                    <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                      <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </div>
                      </div>
                      <Link href={postUrl}>
                        <span className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
