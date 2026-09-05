import { useEffect } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HomeHero } from "@/components/home/HomeHero";
import { CoreExpertise } from "@/components/home/CoreExpertise";
import { AIForCommerce } from "@/components/home/AIForCommerce";
import { WhyKaDegree } from "@/components/home/WhyKaDegree";
import { ForStudents } from "@/components/home/ForStudents";
import { AlumniSuccess } from "@/components/home/AlumniSuccess";
import { HomeCTA } from "@/components/home/HomeCTA";

const SEO_METADATA = {
  title: "KA Degree | Digital Expertise. Smarter Solutions. Real Growth.",
  description:
    "KA Degree helps businesses grow through digital marketing, outsourced services and AI-powered commerce solutions.",
  keywords:
    "KA Degree, Digital Marketing, AI for Commerce, Outsourcing, Online Internships, Programs",
};

export default function Home() {
  useEffect(() => {
    document.title = SEO_METADATA.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', SEO_METADATA.description);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* 1. Hero — Warm ivory bg with serif headline + floating icons + AI image */}
      <HomeHero />

      {/* 2. Core Expertise — Burgundy-dark bg with 3-card grid (Digital Marketing, Outsourcing, AI Commerce) */}
      <CoreExpertise />

      {/* 3. AI for Commerce — Warm ivory bg with process flow diagram */}
      <AIForCommerce />

      {/* 4. Why KA Degree — Warm ivory bg with 4-column numbered reasons */}
      <WhyKaDegree />

      {/* 5. For Students — Burgundy-dark bg with internship + programs cards */}
      <ForStudents />

      {/* 6. Alumni Success Stories — Warm ivory bg with testimonial carousel */}
      <AlumniSuccess />

      {/* 7. CTA — Burgundy-dark bg with "Let's Build What's Next." */}
      <HomeCTA />

      <Footer />
    </div>
  );
}
