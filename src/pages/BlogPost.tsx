import React from 'react';
import { Link, useParams } from 'wouter';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '@/data/blogs';
import { SEO } from '@/components/layout/SEO';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

/* ─── Design tokens (same as Blog.tsx) ─── */
const S = {
  serif: '"Libre Caslon Text", Georgia, serif',
  sans: '"Source Sans 3", system-ui, sans-serif',
  ivory: '#fcf9f8',
  ink: '#1c1b1b',
  inkFaint: 'rgba(28,27,27,0.12)',
  burgundy: '#af2b3e',
  green: '#306a43',
  muted: '#464742',
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

/* ─── Label chip ─── */
function Label({ children, color = S.muted }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      style={{
        fontFamily: S.sans,
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase' as const,
        color,
      }}
    >
      {children}
    </span>
  );
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 4);

  /* ─── Not found ─── */
  if (!post) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: S.ivory,
          fontFamily: S.sans,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 24px',
        }}
      >
        <h1 style={{ fontFamily: S.serif, fontSize: 48, fontWeight: 400, color: S.ink, marginBottom: 16 }}>
          Article Not Found
        </h1>
        <p style={{ color: S.muted, marginBottom: 32 }}>
          The article you are looking for does not exist.
        </p>
        <Link href="/blog">
          <span
            style={{
              fontFamily: S.sans,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: S.ink,
              borderBottom: `1px solid ${S.ink}`,
              paddingBottom: 2,
              cursor: 'pointer',
            }}
          >
            ← Back to Blog
          </span>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@400;600;700&display=swap"
        />
      </Helmet>
      <SEO
        title={`${post.title} | KA Degree Blog`}
        description={post.excerpt}
        keywords={post.keywords}
      />

      <div
        style={{
          minHeight: '100vh',
          background: S.ivory,
          color: S.ink,
          fontFamily: S.sans,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar />

        {/* ════════ ARTICLE HEADER ════════ */}
        <section
          style={{
            maxWidth: 900,
            margin: '0 auto',
            width: '100%',
            padding: 'clamp(140px, 15vw, 160px) 40px 60px',
          }}
        >
          {/* Back link */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Link href="/blog">
              <span
                style={{
                  fontFamily: S.sans,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: S.muted,
                  cursor: 'pointer',
                  display: 'inline-block',
                  marginBottom: 40,
                  transition: 'color 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.color = S.burgundy)}
                onMouseOut={e => (e.currentTarget.style.color = S.muted)}
              >
                ← Back to Blog
              </span>
            </Link>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}
          >
            {post.tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  padding: '3px 10px',
                  border: `1px solid ${S.ink}`,
                  fontFamily: S.sans,
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: S.ink,
                  borderRadius: 0,
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.55, delay: 0.05, ease: 'easeOut' as const } } }}
            style={{
              fontFamily: S.serif,
              fontSize: 'clamp(36px, 5vw, 60px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontWeight: 400,
              color: S.ink,
              marginBottom: 28,
            }}
          >
            {post.title}
          </motion.h1>

          {/* Meta bar */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: 0.1, ease: 'easeOut' as const } } }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 32,
              paddingBottom: 24,
              borderBottom: `1px solid ${S.ink}`,
              marginBottom: 48,
            }}
          >
            <Label color={S.muted}>{post.author}</Label>
            <span style={{ width: 1, height: 14, background: S.inkFaint }} />
            <Label color={S.muted}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </Label>
          </motion.div>

          {/* ════════ ARTICLE BODY ════════ */}
          <motion.article
            initial="hidden"
            animate="visible"
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.15, ease: 'easeOut' as const } } }}
            style={{
              fontFamily: S.sans,
              fontSize: 17,
              lineHeight: '28px',
              color: S.ink,
            }}
          >
            <style>{`
              .ka-prose h1, .ka-prose h2, .ka-prose h3, .ka-prose h4 {
                font-family: ${S.serif};
                font-weight: 400;
                letter-spacing: -0.02em;
                color: ${S.ink};
                margin-top: 2.5em;
                margin-bottom: 0.75em;
                line-height: 1.15;
              }
              .ka-prose h1 { font-size: 2.25rem; }
              .ka-prose h2 { font-size: 1.75rem; border-bottom: 1px solid ${S.inkFaint}; padding-bottom: 0.4em; }
              .ka-prose h3 { font-size: 1.35rem; }
              .ka-prose p  { margin-bottom: 1.4em; }
              .ka-prose ul, .ka-prose ol {
                padding-left: 1.5em;
                margin-bottom: 1.4em;
              }
              .ka-prose li { margin-bottom: 0.4em; }
              .ka-prose strong { font-weight: 700; color: ${S.ink}; }
              .ka-prose a { color: ${S.burgundy}; text-decoration: underline; }
              .ka-prose blockquote {
                border-left: 3px solid ${S.burgundy};
                margin: 2em 0;
                padding: 0 0 0 20px;
                color: ${S.muted};
                font-style: italic;
              }
              .ka-prose code {
                background: rgba(28,27,27,0.06);
                padding: 2px 6px;
                font-size: 0.88em;
                border-radius: 2px;
              }
              .ka-prose pre {
                background: ${S.ink};
                color: #f8f3ec;
                padding: 20px 24px;
                overflow-x: auto;
                margin-bottom: 1.4em;
              }
              .ka-prose hr {
                border: none;
                border-top: 1px solid ${S.inkFaint};
                margin: 2.5em 0;
              }
            `}</style>
            <div className="ka-prose">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>
          </motion.article>

          {/* ════════ CTA BANNER — Burgundy ════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{
              marginTop: 64,
              background: S.burgundy,
              color: '#fff',
              padding: '48px 40px',
              borderRadius: 0,
            }}
          >
            <p
              style={{
                fontFamily: S.sans,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.7)',
                marginBottom: 12,
              }}
            >
              KA Degree Programs
            </p>
            <h2
              style={{
                fontFamily: S.serif,
                fontSize: 36,
                lineHeight: 1.15,
                fontWeight: 400,
                color: '#fff',
                marginBottom: 16,
              }}
            >
              Ready to Start Your AI Career?
            </h2>
            <p style={{ fontSize: 16, lineHeight: '26px', color: 'rgba(255,255,255,0.8)', marginBottom: 32 }}>
              Join KA Degree's AI Full Stack Developer Program. Hands-on projects, expert mentors, and placement support.
            </p>
            <Link href="/programs">
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: S.sans,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.6)',
                  padding: '12px 28px',
                  cursor: 'pointer',
                  borderRadius: 0,
                  transition: 'background 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
              >
                Explore Programs
              </span>
            </Link>
          </motion.div>

          {/* ════════ MORE ARTICLES ════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginTop: 64 }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 32,
                borderBottom: `1px solid ${S.ink}`,
                paddingBottom: 12,
              }}
            >
              <Label>More Articles</Label>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
              {related.map((rel, i) => (
                <Link key={rel.id} href={`/blog/${rel.slug}`}>
                  <motion.a
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const } } }}
                    style={{
                      display: 'block',
                      padding: '20px 24px',
                      border: `1px solid ${S.inkFaint}`,
                      cursor: 'pointer',
                      transition: 'border-color 0.2s, background 0.2s',
                      textDecoration: 'none',
                    }}
                    onMouseOver={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = S.ink;
                      (e.currentTarget as HTMLElement).style.background = '#f6f3f2';
                    }}
                    onMouseOut={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = S.inkFaint;
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }}
                  >
                    <Label color={S.burgundy}>{rel.tags[0]}</Label>
                    <p
                      style={{
                        fontFamily: S.serif,
                        fontSize: 18,
                        lineHeight: '26px',
                        fontWeight: 400,
                        color: S.ink,
                        marginTop: 8,
                      }}
                    >
                      {rel.title}
                    </p>
                  </motion.a>
                </Link>
              ))}
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}
