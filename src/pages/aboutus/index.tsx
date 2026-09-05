import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
    <div className="relative w-full bg-deep-forest selection:bg-deep-wine selection:text-warm-ivory">
      {/* =========================================
          LAYER 1: DARK (Top Layer)
          ========================================= */}
      <section 
        className="relative z-30 w-full min-h-screen bg-[#171417] text-white drop-shadow-2xl"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6vw))" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-32 pb-[12vw] flex items-center min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full">
            
            <div className="md:col-span-2 hidden md:block">
              <div className="border-t border-white/10 pt-4">
                <span className="font-label-caps text-xs tracking-[0.12em] font-semibold text-white/60">01 / OVERVIEW</span>
                <p className="mt-4 text-sm text-white/60">Establishing the foundation of modern architectural thought and rigorous academic pursuit since 2024.</p>
              </div>
            </div>

            <div className="md:col-span-8 flex flex-col gap-12">
              <div>
                <span className="font-label-caps text-xs tracking-[0.12em] font-semibold text-[#DED5CC] block mb-6">ABOUT KA DEGREE</span>
                <h1 className="font-display-lg-mobile md:font-display-lg text-[48px] leading-[52px] md:text-[72px] md:leading-[80px] tracking-[-0.04em] font-bold text-white">
                  Learning That <br/>
                  <span className="italic text-[#DED5CC]">Moves You Forward.</span>
                </h1>
              </div>
              <div className="font-body-lg text-[20px] leading-[32px] text-white/80 max-w-3xl">
                <p>We are a prestige academic institution dedicated to the profound exploration of structural theory and practical application. Our curriculum is designed not just to impart knowledge, but to forge the intellectual scaffolding necessary for building the future.</p>
              </div>
              <div className="border-l-2 border-[#DED5CC] pl-6 my-8">
                <p className="font-body-lg text-[20px] leading-[32px] italic text-white/90">
                  "Education is not the filling of a pail, but the lighting of a structural fire."
                </p>
              </div>
            </div>

            <div className="md:col-span-2 flex justify-center md:justify-end">
              <div className="w-48 h-48 md:w-full md:h-auto border border-white/10 bg-white p-4 rounded-sm rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  alt="KA Degree Logo" 
                  className="w-full h-full object-contain" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFCpSBnNFtJeQB8LRUjk0Hte52bnvg29odHaYd0XxqBoksLM81h3fyLA_ngmmE5cOdQiQBk27igzMr7h21FXiMVN0tiKxe8UbImIQkJCKMKlKd0_UT-4EIo5LIovD2viTT7wiFx43D60jN7EMEWv-gzPas4vn9D3BIjS-Tg5r7MQjShki7lOeW3tKJVjq2f4Kegj1juHsVDERY_haZZrjFGbj5cx2SBNgwUR_nZ9BcUgAGVD9NBKeIBlPtjUV6Ar7ldQ"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* =========================================
          LAYER 2: BURGUNDY (Middle Layer)
          ========================================= */}
      <section 
        className="relative z-20 w-full min-h-screen bg-deep-wine text-warm-ivory drop-shadow-2xl -mt-[6vw]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6vw))" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-[12vw] pb-[12vw]">
          
          <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-warm-ivory/20 pb-8 mb-16 gap-6">
            <div>
              <span className="font-label-caps text-xs tracking-[0.12em] font-semibold text-warm-ivory/60 mb-2 block">02 / LEADERSHIP</span>
              <h2 className="font-headline-md text-[40px] leading-[48px] tracking-[-0.02em] font-semibold text-white">Meet Our Founders</h2>
            </div>
            <div className="md:w-1/3 md:text-right">
              <p className="text-sm text-warm-ivory/70 max-w-sm ml-auto">Architects of academia, curating a space where rigorous thought meets practical innovation.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
            
            {/* Founder 1: Left */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-3 md:mt-24 group cursor-pointer"
            >
              <div className="relative overflow-hidden border border-warm-ivory/10 aspect-[3/4] rounded-sm transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <img 
                  alt="Gagan" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.03]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxtFh4y7Q2Y99Du7KZXtZyO3qdxEcdYYgnh7Xkd5Hq82l15gro_4zB8Wo2Q0GDptee1uyVD-1OiqoiAm_nmbkBrqegU26fCBjnzwRgBYIZsUlj2ErZ8wuCZsgG2R27LpH_H_Ig5HwFUn49SbUYufFecCKPi1mzXXNV2Oql9X7rKqCczm3TmqPb-eoXkJrsraup4897NhmTbE6mir42KUbfsxWZ0iRrLTmcanf48qZKLygFytI1d_FduezH1ywHhjfz0w"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/90 via-dark-charcoal/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full p-5 transform transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="font-headline-sm text-[24px] font-semibold mb-1 text-white">Gagan</h3>
                  <div className="overflow-hidden">
                    <p className="font-label-caps text-[11px] tracking-[0.12em] text-warm-ivory/80 uppercase transform translate-y-1 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      CHO OF THE COMPANY
                    </p>
                    <div className="h-[2px] w-0 bg-warm-ivory mt-3 transition-all duration-500 ease-out group-hover:w-8" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Founder 2: Center */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-6 z-10 group cursor-pointer"
            >
              <div className="relative overflow-hidden border-2 border-warm-ivory/20 aspect-[4/5] bg-dark-charcoal rounded-sm shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-warm-ivory/40">
                <img 
                  alt="Guru" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.03]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZpDGZZJAZOk5snYagmTNhcT50JroxykNI6Lj4B-EbEU6musuUY_HJ73vuj5hZlaC7UvXxvcx60rV4d6ddNieDanFBhVru0qvttEFOvXoFmAFoXlf5Ml1w_LtiirXd5d4bNYUaYJ9bwCX3x0g4X_IvaSSBAY4K7BNWMfocnl5mcJzT2psU1YCMYqqQ6v4bjO7etsOz9LHve-2o_EsoDWlWOYBiFQ0vX8cVJwYXruGAz1jI0sAzpxeNJSdn2FF5AbaLeA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/90 via-dark-charcoal/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="font-display-lg-mobile text-[48px] font-bold leading-[52px] text-white mb-2">Guru</h3>
                  <div className="overflow-hidden">
                    <p className="font-label-caps text-[13px] tracking-[0.12em] text-warm-ivory/80 uppercase transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      CEO OF THE COMPANY
                    </p>
                    <div className="h-[3px] w-0 bg-warm-ivory mt-4 transition-all duration-500 ease-out group-hover:w-12" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Founder 3: Right */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-3 md:mt-48 group cursor-pointer"
            >
              <div className="relative overflow-hidden border border-warm-ivory/10 aspect-[3/4] rounded-sm transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <img 
                  alt="Nithin Kumar" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.03]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBweoCk382deVHJnQBIyXEcXOKNP3c9RdBM9ahR1hjvn0anMFe1Ccj1lE5IKiuJn8jCPX-wWbIjqOcEuKTBjR8QrTTFRrUwEK6iafa5SMeJaMHu10TIE5IwcvWU8mYVRAVhbOO1SPOdoCx-cOrbn1Uoz1NvWr42_gRgtY_1skDJDYEiOJDsi_1CtbxYh5htU1QwqRoWq1B9ceKGGVnBIWnaUnJWRz-tLrvBB8Khd_gJdB_3mCKvSLBDc8jKR55jmaDa9Q"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/90 via-dark-charcoal/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full p-5 transform transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="font-headline-sm text-[24px] font-semibold mb-1 text-white">Nithin Kumar</h3>
                  <div className="overflow-hidden">
                    <p className="font-label-caps text-[11px] tracking-[0.12em] text-warm-ivory/80 uppercase transform translate-y-1 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      CTO OF THE COMPANY
                    </p>
                    <div className="h-[2px] w-0 bg-warm-ivory mt-3 transition-all duration-500 ease-out group-hover:w-8" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          LAYER 3: DEEP FOREST (Base Layer)
          ========================================= */}
      <section className="relative z-10 w-full min-h-screen bg-deep-forest text-warm-ivory -mt-[6vw]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-[12vw] pb-32 flex flex-col justify-center min-h-screen">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
            <div className="md:col-span-4">
              <span className="font-label-caps text-xs tracking-[0.12em] font-semibold text-[#bdcab8] mb-2 block">03 / IDEOLOGY</span>
              <h2 className="font-headline-md text-[40px] leading-[48px] font-semibold text-warm-ivory">What Drives Us</h2>
            </div>
            <div className="md:col-span-8">
              <p className="font-body-lg text-[20px] leading-[32px] text-warm-ivory/80 border-l border-warm-ivory/20 pl-8">
                We are driven by the conviction that rigorous theoretical understanding must be married to exceptional practical execution. Our ideology is rooted in the timeless principles of structure, clarity, and permanence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            <div className="border-t border-warm-ivory/20 pt-6">
              <span className="font-label-caps text-xs tracking-[0.12em] text-[#bdcab8] block mb-4">01. RIGOR</span>
              <h4 className="font-headline-sm text-[24px] font-semibold mb-3 text-white">Academic Intensity</h4>
              <p className="text-sm text-warm-ivory/60">Demanding excellence in every pursuit, pushing the boundaries of conventional thought.</p>
            </div>
            <div className="border-t border-warm-ivory/20 pt-6">
              <span className="font-label-caps text-xs tracking-[0.12em] text-[#bdcab8] block mb-4">02. STRUCTURE</span>
              <h4 className="font-headline-sm text-[24px] font-semibold mb-3 text-white">Architectural Logic</h4>
              <p className="text-sm text-warm-ivory/60">Building knowledge on a solid, unshakeable foundation of first principles.</p>
            </div>
            <div className="border-t border-warm-ivory/20 pt-6">
              <span className="font-label-caps text-xs tracking-[0.12em] text-[#bdcab8] block mb-4">03. PRAXIS</span>
              <h4 className="font-headline-sm text-[24px] font-semibold mb-3 text-white">Applied Wisdom</h4>
              <p className="text-sm text-warm-ivory/60">Translating high theory into tangible, world-altering execution.</p>
            </div>
          </div>

          {/* CTA Area */}
          <div className="mt-auto text-center border border-warm-ivory/10 p-16 bg-black/20">
            <h3 className="font-display-lg-mobile md:text-[72px] md:leading-[80px] font-bold mb-8 text-white">Ready to Build Your Future?</h3>
            <Link href="/internship">
              <button className="bg-warm-ivory text-deep-forest font-label-caps text-xs tracking-[0.12em] font-semibold px-8 py-4 rounded-sm hover:bg-deep-wine hover:text-warm-ivory transition-all duration-300 border border-transparent hover:border-warm-ivory">
                  Begin Your Application
              </button>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;
