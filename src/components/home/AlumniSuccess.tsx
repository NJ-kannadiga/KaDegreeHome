import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { testimonialsData } from "../../pixels-template/data/testimonial";

  export function AlumniSuccess() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Sync state with carousel
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-24 bg-brand-bg-warm overflow-hidden relative">
      <div className="container mx-auto px-4 xl:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.15em] text-brand-burgundy/60 uppercase mb-4"
          >
            ALUMNI SUCCESS STORIES
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[2.5rem] md:text-[3.5rem] font-serif font-medium text-dark-charcoal mb-4 tracking-tight"
          >
            Don't Just Take Our Word For It
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] text-dark-charcoal/70 font-medium"
          >
            Hear from our alumni about their learning experience and journey with KA Degree.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative max-w-[95%] 2xl:max-w-[1400px] mx-auto px-10 md:px-14"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              dragFree: true 
            }}
            plugins={[
              AutoScroll({
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              })
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/4">
                  <div className="hover-lift-card bg-[#FBF7F1] rounded-[16px] p-6 border border-dark-charcoal/5 shadow-[0_2px_15px_rgba(0,0,0,0.02)] h-full flex flex-col transition-all duration-300">
                    
                    {/* Top: Profile */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-black/5 bg-white">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark-charcoal text-[14px] leading-tight">{testimonial.name}</h4>
                        <p className="text-[11px] text-dark-charcoal/60 font-medium mt-0.5">{testimonial.handle}</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-dark-charcoal/70 text-[13px] leading-[1.65] font-medium flex-1 mb-6">
                      {testimonial.quote}
                    </blockquote>
                    
                    {/* Bottom: Company */}
                    <div className="mt-auto pt-4 border-t border-[#E5DCD2]">
                      <p className="text-[9px] text-[#6B625F] font-bold uppercase tracking-wider mb-1.5">
                        Now working at
                      </p>
                      <div className="font-bold text-dark-charcoal text-[18px] tracking-tight flex items-center gap-1.5">
                        {/* Simulate logo styling for demonstration */}
                        {(() => {
                          const companies = [
                            { name: 'Google', color: '#4285F4' },
                            { name: 'Microsoft', color: '#00A4EF' },
                            { name: 'Amazon', color: '#FF9900' },
                            { name: 'Deloitte', color: '#86BC25' },
                            { name: 'TCS', color: '#E4222B' }
                          ];
                          const c = companies[index % 5];
                          return (
                            <>
                              <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: c.color }} />
                              {c.name}
                            </>
                          );
                        })()}
                      </div>
                    </div>
                    
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Buttons (Desktop) */}
            <div className="hidden md:block">
              <CarouselPrevious variant="default" className="group bg-[#5A0D26] hover:bg-[#43081C] text-white border-none -left-12 lg:-left-16 w-11 h-11 shadow-lg transition-transform hover:scale-105 active:scale-95" />
              <CarouselNext variant="default" className="group bg-[#5A0D26] hover:bg-[#43081C] text-white border-none -right-12 lg:-right-16 w-11 h-11 shadow-lg transition-transform hover:scale-105 active:scale-95" />
            </div>
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  current === index + 1 ? "bg-[#43081C]" : "bg-[#E5DCD2] hover:bg-[#D5C8BD]"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
