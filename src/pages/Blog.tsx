import React from 'react';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet-async';
import { BLOG_POSTS } from '@/data/blogs';
import { SEO } from '@/components/layout/SEO';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';

/* ─── Animation ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

/* ─── Hero editorial images ─── */
const FEATURED_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCh5K91H1w1vra0xkOC_IkEVmpo5wcJCVxkaTzfGhIjDu75a2w9p7leiiwKJBNZx8nflNc3W-EENpKjzgOsQEJNFHKEbx0kAbgfsoPlaBqvd9pKv2CdZEuXv75tJPHoXBTRP_syU_bFCrMaH22kYCO0fAY4FifgQ1WV8RQtqjp4kZA81KfNWVTMWoTHJ9BlFWGKJtuvIX-Oh6MQsLlYBLRidIcZ1B1WJEd7a7w4Go9NhjBlGfS7DzK3Aw';
const REACT_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBTkP2lOHxMQm4FewQ19Tg8vMUUzhp2VB0iP3XMcdc6zCuZy5xwTw_Mo3QmnoX6THc6lMkUbtpQnxLmxuuYN0ueDHzzlBw-gyQ5n82fmo0hXWfsZMG6dlx6F4tqe5VVLkcfvA89EjD2HhnbUfjr0qneg2nW-ERXBjyZc_-TNG7dOcrqBLxUQ9WUsbmNl9w3MvLYfgiXg7le9NeQLh9LUQehnrU2Ph90iUu-BTMLYBBQSSweLGNgSmCdzA';
const RESUME_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAK68kNcfejdMn3XbTvPRYC8okqyszvbCMJFToST8MP4VKwwqdhXTcGGzJC8H0rdJ5EPmernROR6Cq6UQRv8bX_u3yl9sZqSlyi3dUTT3dz7See0GWZ00rGEwBH5q5z847GFZ3vfpaOyZcVXTWU9m6FbWhZd2q2mVJwLWwF2k4tYGlzzoU4y5JA5XhYZ4QMjxrEajOORYotESCKmyrShXBqacTXfQCzg-hYCg7FSq-yzL-K_zUYkFQBiQ';
const OFFICE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC3xWdJ2RkAvbCPAfeT4n_Iv-AlekVrvpsdxUT61p7Uw994G4VUUnzqKkdWkqMXvwdDz4KeVLgiR_7q9KpWUw6P8Q4zE65EzBR_8Lg3ofEjuQR3g-BZjnAbRossO0I--3oP8o-xirsI-Qlpbk9E_yTUr8MiHF75-w6exwXM5E3oyUq5GCqlPfvanOWpmWozzERoH_6dVhWhjHnmVHRSGlKBmZyiwXCt-0ootmzm6cuAUphH9Cxf6AMewA';

/* ─── Shared style constants ─── */
const S = {
  serif: '"Libre Caslon Text", Georgia, serif',
  sans: '"Source Sans 3", system-ui, sans-serif',
  ivory: '#fcf9f8',
  ink: '#1c1b1b',
  inkFaint: 'rgba(28,27,27,0.12)',
  burgundy: '#af2b3e',
  burgungyDark: '#800020',
  green: '#306a43',
  greenDark: '#004451',
  muted: '#464742',
};

/* ─── Tiny label-caps component ─── */
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

/* ─── Hair-line chip ─── */
function Chip({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 10px',
        border: `1px solid ${light ? 'rgba(255,255,255,0.6)' : S.ink}`,
        fontFamily: S.sans,
        fontSize: '10px',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase' as const,
        color: light ? '#fff' : S.ink,
        borderRadius: 0,
      }}
    >
      {children}
    </span>
  );
}

export default function Blog() {
  /* Map data to named slots */
  const featured = BLOG_POSTS[0];
  const large = BLOG_POSTS[1];
  const medium = BLOG_POSTS[2] ?? BLOG_POSTS[0];
  const greenCard = BLOG_POSTS[3] ?? BLOG_POSTS[0];
  const small1 = BLOG_POSTS[4] ?? BLOG_POSTS[0];
  const small2 = BLOG_POSTS[5] ?? BLOG_POSTS[1];

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@400;600;700&display=swap"
        />
      </Helmet>
      <SEO
        title="KA Degree Blog — AI, Full Stack & Career Insights"
        description="Expert advice on coding, AI, and launching your tech career in 2026. Curated for the ambitious professional."
        keywords="AI Full Stack Course, React JS Course, Python Course, Placement Training Bangalore"
      />

      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: S.ivory,
          color: S.ink,
          fontFamily: S.sans,
        }}
      >
        <Navbar />

        {/* ════════════════════════════
            HERO — Ivory
        ════════════════════════════ */}
        <section
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            width: '100%',
            padding: 'clamp(140px, 15vw, 170px) 40px 100px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '8fr 4fr',
              gap: 32,
              alignItems: 'flex-end',
            }}
          >
            {/* Left — headline */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <Label color={S.burgundy}>Insights</Label>
              <h1
                style={{
                  fontFamily: S.serif,
                  fontSize: 'clamp(48px, 7vw, 80px)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  fontWeight: 400,
                  margin: '16px 0 24px',
                  color: S.ink,
                }}
              >
                Latest Insights &amp; Tutorials
              </h1>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: '28px',
                  color: S.muted,
                  maxWidth: 520,
                }}
              >
                Expert advice on coding, AI, and launching your tech career in
                2026. Curated for the ambitious professional.
              </p>
            </motion.div>

            {/* Right — trending sidebar */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              style={{
                borderLeft: `1px solid ${S.inkFaint}`,
                paddingLeft: 32,
                paddingBottom: 8,
              }}
            >
              <div
                style={{
                  paddingBottom: 20,
                  marginBottom: 20,
                  borderBottom: `1px solid ${S.ink}`,
                }}
              >
                <Label color={S.green}>Trending</Label>
                <p
                  style={{
                    fontFamily: S.serif,
                    fontSize: 20,
                    lineHeight: '28px',
                    fontWeight: 400,
                    marginTop: 8,
                    color: S.ink,
                  }}
                >
                  The rise of Go in enterprise systems
                </p>
              </div>
              <div>
                <Label color={S.green}>Editor's Pick</Label>
                <p
                  style={{
                    fontFamily: S.serif,
                    fontSize: 20,
                    lineHeight: '28px',
                    fontWeight: 400,
                    marginTop: 8,
                    color: S.ink,
                  }}
                >
                  Why soft skills dictate AI salaries
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════
            FEATURED — Burgundy
        ════════════════════════════ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{
            background: S.burgundy,
            color: '#fff',
            padding: '80px 40px',
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '7fr 5fr',
              gap: 32,
              alignItems: 'center',
            }}
          >
            {/* Text */}
            <div style={{ paddingRight: 48 }}>
              <Chip light>Featured Report</Chip>
              <Link href={`/blog/${featured.slug}`}>
                <h2
                  style={{
                    fontFamily: S.serif,
                    fontSize: 'clamp(40px, 5.5vw, 72px)',
                    lineHeight: 1.05,
                    letterSpacing: '-0.02em',
                    fontWeight: 400,
                    margin: '28px 0 24px',
                    color: '#fff',
                    cursor: 'pointer',
                  }}
                >
                  {featured.title}
                </h2>
              </Link>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: '30px',
                  color: 'rgba(255,255,255,0.85)',
                  maxWidth: 520,
                  marginBottom: 32,
                }}
              >
                {featured.excerpt}
              </p>
              <Link href={`/blog/${featured.slug}`}>
                <span
                  style={{
                    fontFamily: S.sans,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    borderBottom: '1px solid #fff',
                    paddingBottom: 2,
                    cursor: 'pointer',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseOver={e => (e.currentTarget.style.opacity = '0.7')}
                  onMouseOut={e => (e.currentTarget.style.opacity = '1')}
                >
                  Read Full Analysis →
                </span>
              </Link>
            </div>

            {/* Image panel */}
            <div
              style={{
                height: 480,
                border: '1px solid rgba(255,255,255,0.25)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url('${FEATURED_IMG}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  mixBlendMode: 'overlay',
                  opacity: 0.6,
                }}
              />
            </div>
          </div>
        </motion.section>

        {/* ════════════════════════════
            ARTICLE GRID — Asymmetric
        ════════════════════════════ */}
        <section
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            width: '100%',
            padding: '80px 40px 100px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '7fr 5fr',
              gap: 32,
            }}
          >
            {/* ── LEFT COLUMN ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

              {/* Large card */}
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                style={{
                  border: `1px solid ${S.ink}`,
                  padding: 32,
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 480,
                  cursor: 'pointer',
                  transition: 'background 0.25s',
                }}
                onMouseOver={e =>
                  ((e.currentTarget as HTMLElement).style.background = '#f6f3f2')
                }
                onMouseOut={e =>
                  ((e.currentTarget as HTMLElement).style.background = 'transparent')
                }
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 40,
                  }}
                >
                  <Label>{large.tags[0]}</Label>
                  <Label color={S.muted}>12 Min Read</Label>
                </div>
                <Link href={`/blog/${large.slug}`}>
                  <h3
                    style={{
                      fontFamily: S.serif,
                      fontSize: 'clamp(32px, 4vw, 52px)',
                      lineHeight: 1.1,
                      fontWeight: 400,
                      marginBottom: 20,
                      color: S.ink,
                      flex: 1,
                    }}
                  >
                    {large.title}
                  </h3>
                </Link>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: '24px',
                    color: S.muted,
                    marginBottom: 24,
                  }}
                >
                  {large.excerpt}
                </p>
                {/* Article image */}
                <div
                  style={{
                    height: 200,
                    width: '100%',
                    marginBottom: 24,
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url('${REACT_IMG}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'grayscale(100%) contrast(1.2)',
                    }}
                  />
                </div>
                <Link href={`/blog/${large.slug}`}>
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
                      alignSelf: 'flex-start',
                      transition: 'color 0.2s',
                    }}
                    onMouseOver={e => (e.currentTarget.style.color = S.burgundy)}
                    onMouseOut={e => (e.currentTarget.style.color = S.ink)}
                  >
                    Read Article
                  </span>
                </Link>
              </motion.article>

              {/* Medium row */}
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                style={{
                  borderBottom: `1px solid ${S.ink}`,
                  paddingBottom: 32,
                  paddingTop: 8,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 12,
                  }}
                >
                  <Label color={S.green}>{medium.tags[0]}</Label>
                  <Label color={S.muted}>
                    {new Date(medium.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </Label>
                </div>
                <Link href={`/blog/${medium.slug}`}>
                  <h3
                    style={{
                      fontFamily: S.serif,
                      fontSize: 32,
                      lineHeight: '40px',
                      fontWeight: 400,
                      marginBottom: 12,
                      color: S.ink,
                      cursor: 'pointer',
                      transition: 'color 0.2s',
                    }}
                    onMouseOver={e => (e.currentTarget.style.color = S.burgundy)}
                    onMouseOut={e => (e.currentTarget.style.color = S.ink)}
                  >
                    {medium.title}
                  </h3>
                </Link>
                <p style={{ fontSize: 15, lineHeight: '24px', color: S.muted }}>
                  {medium.excerpt}
                </p>
              </motion.article>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

              {/* Forest Green Accent Card */}
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0.5}
                style={{
                  background: S.green,
                  color: '#fff',
                  padding: 32,
                  minHeight: 380,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <Chip light>{greenCard.tags[0]}</Chip>
                  <Link href={`/blog/${greenCard.slug}`}>
                    <h3
                      style={{
                        fontFamily: S.serif,
                        fontSize: 32,
                        lineHeight: '40px',
                        fontWeight: 400,
                        margin: '20px 0 12px',
                        color: '#fff',
                        cursor: 'pointer',
                      }}
                    >
                      {greenCard.title}
                    </h3>
                  </Link>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: '24px',
                      color: 'rgba(255,255,255,0.8)',
                    }}
                  >
                    {greenCard.excerpt}
                  </p>
                </div>
                <Link href={`/blog/${greenCard.slug}`}>
                  <span
                    style={{
                      fontFamily: S.sans,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#fff',
                      borderBottom: '1px solid rgba(255,255,255,0.6)',
                      paddingBottom: 2,
                      cursor: 'pointer',
                      marginTop: 24,
                      display: 'inline-block',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseOver={e => (e.currentTarget.style.opacity = '0.7')}
                    onMouseOut={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Explore Language Trends
                  </span>
                </Link>
              </motion.article>

              {/* Small card 1 */}
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                style={{
                  borderBottom: `1px solid ${S.ink}`,
                  paddingBottom: 24,
                  paddingTop: 8,
                }}
              >
                <div
                  style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 16 }}
                >
                  <div>
                    <Label color={S.burgundy}>{small1.tags[0]}</Label>
                    <Link href={`/blog/${small1.slug}`}>
                      <h3
                        style={{
                          fontFamily: S.serif,
                          fontSize: 22,
                          lineHeight: '30px',
                          fontWeight: 400,
                          marginTop: 8,
                          color: S.ink,
                          cursor: 'pointer',
                          transition: 'color 0.2s',
                        }}
                        onMouseOver={e => (e.currentTarget.style.color = S.burgundy)}
                        onMouseOut={e => (e.currentTarget.style.color = S.ink)}
                      >
                        {small1.title}
                      </h3>
                    </Link>
                  </div>
                  <div
                    style={{
                      backgroundImage: `url('${RESUME_IMG}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'grayscale(100%)',
                      minHeight: 80,
                    }}
                  />
                </div>
              </motion.article>

              {/* Small card 2 */}
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1.5}
                style={{ paddingTop: 8 }}
              >
                <div
                  style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 16 }}
                >
                  <div>
                    <Label color={S.burgundy}>{small2.tags[0]}</Label>
                    <Link href={`/blog/${small2.slug}`}>
                      <h3
                        style={{
                          fontFamily: S.serif,
                          fontSize: 22,
                          lineHeight: '30px',
                          fontWeight: 400,
                          marginTop: 8,
                          color: S.ink,
                          cursor: 'pointer',
                          transition: 'color 0.2s',
                        }}
                        onMouseOver={e => (e.currentTarget.style.color = S.burgundy)}
                        onMouseOut={e => (e.currentTarget.style.color = S.ink)}
                      >
                        {small2.title}
                      </h3>
                    </Link>
                  </div>
                  <div
                    style={{
                      backgroundImage: `url('${OFFICE_IMG}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'grayscale(100%)',
                      minHeight: 80,
                    }}
                  />
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
