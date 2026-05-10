'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    text: "The methodology here is completely different from traditional institutes. I went from hesitating in meetings to confidently leading client calls in just 3 months."
  },
  {
    name: "Rahul Verma",
    role: "Marketing Director",
    text: "The personalized feedback and focus on speaking helped me crack my dream job interview. Highly recommended."
  },
  {
    name: "Sneha Reddy",
    role: "Student",
    text: "I improved my IELTS score from 5.5 to 7.5 in just 40 days. The structured plan and mock tests were extremely helpful."
  },
  {
    name: "Kiran Kumar",
    role: "Job Seeker",
    text: "I used to struggle with basic English. Now I can speak fluently with confidence. The bilingual teaching really helped me understand faster."
  },
  {
    name: "Anjali Mehta",
    role: "Freelancer",
    text: "The live speaking sessions and real-world practice made a huge difference. I can now communicate confidently with international clients."
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerPage = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, TESTIMONIALS.length - itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    
    return () => clearInterval(timer);
  }, [nextSlide, isHovered]);

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto px-4 md:px-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden w-full py-8 -mx-4 md:-mx-4 px-4 md:px-0">
        <motion.div 
          className="flex"
          animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className="shrink-0 px-4 md:px-4 flex" 
              style={{ width: `${100 / itemsPerPage}%` }}
            >
              <motion.div 
                className="w-full flex flex-col justify-between glass-panel hover:bg-white/10 transition-colors duration-500 rounded-3xl p-8 border border-white/10 relative overflow-hidden group shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 group-hover:bg-blue-400/20 transition-colors duration-500 pointer-events-none" />
                
                <div>
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-blue-500 text-blue-500" />
                    ))}
                  </div>
                  <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 font-medium">"{t.text}"</p>
                </div>
                
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg border-2 border-white/10 shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold leading-tight">{t.name}</h4>
                    <span className="text-sm text-blue-400 font-medium">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0a0a0a]/90 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 z-10 hidden md:flex shadow-xl hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 ml-[-2px]" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0a0a0a]/90 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 z-10 hidden md:flex shadow-xl hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 mr-[-2px]" />
      </button>

      <div className="flex justify-center gap-3 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full h-2.5 ${
              currentIndex === idx ? 'w-8 bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.5)]' : 'w-2.5 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
