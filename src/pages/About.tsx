import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import professorImage from "@assets/generated_images/professor_teaching_class.png";
import professor1 from "@assets/generated_images/image1.png";
import professor2 from "@assets/generated_images/image2.png";
import professor3 from "@assets/generated_images/image3.png";
import professor4 from "@assets/generated_images/image4.png";
import { Link } from "wouter";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-accent blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-1/4 -bottom-1/4 h-[500px] w-[500px] rounded-full bg-accent blur-[120px]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Branding & Value Prop */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="space-y-8 text-center lg:text-left"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70">Redefining Education</span>
              </motion.div>

              <motion.h1
                variants={fadeIn}
                className="font-serif text-6xl font-bold tracking-tight md:text-8xl"
              >
                <span className="text-white">KA</span> <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">Degree</span>
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="mx-auto max-w-xl text-lg leading-relaxed text-primary-foreground/80 lg:mx-0 lg:text-xl"
              >
                Bridging the gap between traditional education and global industry standards through expert-led, regional language coaching.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {["Regional Languages", "Industry Experts", "Global Standards"].map((tag) => (
                  <span key={tag} className="rounded-lg bg-white/10 px-3 py-1 text-sm font-medium border border-white/5 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Premium Review Slider */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card group relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/5 p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-white/30">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl transition-all duration-500 group-hover:bg-accent/20" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className="h-6 w-6 text-accent drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-lg font-bold text-white">4.6 <span className="text-sm font-normal text-white/60">(100+ Reviews)</span></span>
                  </div>

                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      animate={{ y: ["0%", "-50%"] }}
                      transition={{
                        duration: 80,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      {[
                        { text: "The structured roadmap helped me stay consistent and finally land my first developer job.", name: "Arjun K.", role: "Full Stack Developer" },
                        { text: "The mentors explain real industry scenarios which helped me understand how companies actually build products.", name: "Meghana P.", role: "Software Engineer" },
                        { text: "Before joining, I was confused about where to start. This platform gave me a clear direction.", name: "Rahul N.", role: "Backend Developer" },
                        { text: "Hands-on projects and real coding sessions made learning very practical.", name: "Divya S.", role: "Frontend Developer" },
                        { text: "The community support is amazing. Everyone helps each other grow.", name: "Sanjay M.", role: "React Developer" },
                        { text: "Learning concepts in a simple way made difficult topics easy to understand.", name: "Anusha R.", role: "UI Developer" },
                        { text: "The mock interviews boosted my confidence before facing real company interviews.", name: "Kiran B.", role: "Software Engineer" },
                        { text: "This platform helped me improve both coding skills and problem-solving ability.", name: "Naveen T.", role: "Python Developer" },
                        { text: "Real-time projects helped me build a strong portfolio.", name: "Lakshmi H.", role: "Web Developer" },
                        { text: "The roadmap for beginners is extremely helpful and well organized.", name: "Rohit S.", role: "Junior Developer" },

                        { text: "Learning with industry mentors made a huge difference in my understanding.", name: "Varun C.", role: "Software Engineer" },
                        { text: "The sessions are very interactive and engaging.", name: "Deepa N.", role: "Frontend Developer" },
                        { text: "I improved my JavaScript skills significantly after joining.", name: "Prakash V.", role: "Full Stack Developer" },
                        { text: "The platform made learning programming simple and enjoyable.", name: "Keerthi L.", role: "Software Engineer" },
                        { text: "The step-by-step explanations helped me build confidence in coding.", name: "Harsha R.", role: "Backend Developer" },
                        { text: "Excellent learning environment and very supportive mentors.", name: "Swathi P.", role: "Web Developer" },
                        { text: "The structured curriculum helped me stay focused on my career goals.", name: "Abhishek G.", role: "Software Engineer" },
                        { text: "Practical assignments helped me learn faster than traditional courses.", name: "Asha K.", role: "Frontend Developer" },
                        { text: "Great platform for anyone who wants to start a tech career.", name: "Nikhil D.", role: "Software Engineer" },
                        { text: "The live sessions and coding practice improved my development skills.", name: "Pooja S.", role: "React Developer" },

                        { text: "I finally understood system design concepts thanks to the mentors.", name: "Vivek R.", role: "Software Architect" },
                        { text: "Every session brings real-world insights from the industry.", name: "Manoj K.", role: "Backend Developer" },
                        { text: "This platform helped me transition from a non-tech background into IT.", name: "Sneha M.", role: "Software Developer" },
                        { text: "The mentors truly care about student success.", name: "Karthik S.", role: "Software Engineer" },
                        { text: "The roadmap and guidance helped me stay consistent in learning.", name: "Divakar P.", role: "Full Stack Developer" },
                        { text: "Amazing experience learning modern web technologies.", name: "Shruthi N.", role: "Frontend Engineer" },
                        { text: "Practical coding sessions helped me improve problem-solving skills.", name: "Chandan R.", role: "Python Developer" },
                        { text: "The guidance for interviews was extremely helpful.", name: "Ramesh T.", role: "Software Engineer" },
                        { text: "The learning approach is simple yet very effective.", name: "Lavanya S.", role: "UI Developer" },
                        { text: "This platform helped me gain confidence in programming.", name: "Aditya K.", role: "Web Developer" },

                        { text: "The coding challenges pushed me to improve every day.", name: "Anil B.", role: "Software Engineer" },
                        { text: "Very beginner-friendly learning environment.", name: "Bhavana R.", role: "Frontend Developer" },
                        { text: "I loved the hands-on project experience.", name: "Tejas P.", role: "Full Stack Developer" },
                        { text: "The mentorship sessions are incredibly valuable.", name: "Mahesh K.", role: "Software Engineer" },
                        { text: "The platform helped me understand backend development clearly.", name: "Suresh N.", role: "Backend Developer" },
                        { text: "The structured learning path made it easy to track progress.", name: "Nisha R.", role: "Software Engineer" },
                        { text: "Real industry examples helped me understand complex topics.", name: "Ganesh T.", role: "React Developer" },
                        { text: "This platform helped me build real-world applications.", name: "Shilpa D.", role: "Frontend Developer" },
                        { text: "Learning here feels like working in a real tech company.", name: "Yash K.", role: "Software Engineer" },
                        { text: "The mentors break down complex topics in a very simple way.", name: "Amit S.", role: "Web Developer" },

                        { text: "The coding exercises helped strengthen my fundamentals.", name: "Ritika P.", role: "Software Engineer" },
                        { text: "The platform gives a clear roadmap for career growth.", name: "Kunal R.", role: "Full Stack Developer" },
                        { text: "I improved my problem-solving and debugging skills here.", name: "Pradeep M.", role: "Backend Developer" },
                        { text: "The support from the community is very motivating.", name: "Ananya S.", role: "Frontend Developer" },
                        { text: "The platform helped me prepare for real job interviews.", name: "Akash V.", role: "Software Engineer" },
                        { text: "A perfect place to learn modern web development.", name: "Harini K.", role: "UI Developer" },
                        { text: "I gained practical experience through projects and coding tasks.", name: "Siddharth P.", role: "Full Stack Developer" },
                        { text: "The learning experience here is both engaging and practical.", name: "Neha T.", role: "Software Engineer" },
                        { text: "The mentors explain concepts with great clarity.", name: "Vishal N.", role: "React Developer" },
                        { text: "One of the best platforms for learning programming from scratch.", name: "Rohini S.", role: "Software Developer" }
                      ].map((review, i) => (
                        <div key={i} className="flex h-48 flex-col justify-center pb-8">
                          <blockquote className="text-2xl font-medium italic leading-snug text-white">
                            "{review.text}"
                          </blockquote>
                          <div className="mt-6 flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center font-bold text-accent">
                              {review.name[0]}
                            </div>
                            <div>
                              <p className="font-bold text-white">{review.name}</p>
                              <p className="text-sm text-accent">{review.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                <div className="absolute bottom-8 right-10 flex gap-2">
                  <div className="h-1.5 w-8 rounded-full bg-accent/40" />
                  <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-4 py-24 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent uppercase tracking-wider">
              Our Philosophy
            </div>
            <h2 className="font-serif text-4xl font-bold leading-tight text-primary md:text-5xl">
              We are not a college; <br />
              <span className="text-foreground/70">We are a gateway.</span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                KA Degree is an online coaching and mentorship platform, led by a focused team of Indian industry experts and supported by select global developers and AI specialists.
              </p>

              <div className="grid gap-8 pt-4">
                {[
                  {
                    title: "Indian Industry Mentors",
                    desc: "Working full-stack, backend, and AI developers providing weekly mentoring and long-term guidance."
                  },
                  {
                    title: "Global Tech Exposure",
                    desc: "Guest sessions by international developers to expose students to global tech standards and advanced AI workflows."
                  },
                  {
                    title: "Regional Accessibility",
                    desc: "We support learning in Kannada, Telugu, Tamil, Hindi, Malayalam, and English for deeper understanding."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group flex gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="font-serif text-xl font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-base text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-accent/20 to-primary/20 blur-2xl" />
            <img
              src={professorImage}
              alt="Teaching Session"
              className="relative rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </motion.div>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl font-bold text-primary md:text-5xl">Our Core Values & Standards</h2>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-accent" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Integrity",
                desc: "We operate with transparency and honesty in all our coaching and mentoring.",
                icon: (
                  <svg className="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Excellence",
                desc: "We aim for global tech standards in every project and lesson we deliver.",
                icon: (
                  <svg className="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                  </svg>
                )
              },
              {
                title: "Empowerment",
                desc: "Focusing on real-world success for every student, regardless of their background.",
                icon: (
                  <svg className="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Regional Pride",
                desc: "Supporting all regional languages to ensure no student is left behind.",
                icon: (
                  <svg className="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl bg-white p-8 shadow-md border border-primary/5 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl font-bold text-primary md:text-5xl">Our Expert Mentor Pool</h2>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-accent" />
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Ravi Kumar", role: "Full-Stack Developer", exp: "8+ years experience", img: professor1 },
              { name: "Anusha Reddy", role: "Frontend & AI Engineer", exp: "Modern UI & AI Specialist", img: professor2 },
              { name: "Suresh Patil", role: "Backend Specialist", exp: "Python & Scalable Systems", img: professor3 },
              { name: "Nikhil Sharma", role: "System Design Mentor", exp: "Java & Enterprise Architecture", img: professor4 },
            ].map((mentor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-border/50"
              >
                <div className="relative mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full ring-4 ring-accent/10 transition-all duration-300 group-hover:ring-accent/40">
                  <img
                    src={mentor.img}
                    alt={mentor.name}
                    className="h-full w-full object-cover grayscale-[20%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground">{mentor.name}</h3>
                  <p className="mt-1 font-semibold text-primary">{mentor.role}</p>
                  <p className="mt-3 text-sm italic text-muted-foreground/80">{mentor.exp}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground"
        >
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />

          <h2 className="relative z-10 font-serif text-3xl font-bold md:text-5xl">Ready to transform your career?</h2>
          <p className="relative z-10 mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80">
            Join a community of learners focused on real-world skills and professional growth.
          </p>
          <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-accent px-8 py-4 font-bold text-accent-foreground shadow-lg transition-all hover:scale-105 hover:bg-white active:scale-95">
                <Link href="/courses">Apply Now</Link>
            </button>
            <button className="rounded-full border-2 border-primary-foreground/20 bg-white/5 px-8 py-4 font-bold text-primary-foreground backdrop-blur-sm transition-all hover:bg-white/10">
              Contact Us
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
