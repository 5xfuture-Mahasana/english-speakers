'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const BLOG_POSTS = [
  {
    title: "7 Ways to Stop Translating in Your Head",
    category: "Strategy",
    read: "5 min read",
    date: "May 10",
    // confident speaker mid-conversation — natural expression, warm light
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mastering Corporate English for Meetings",
    category: "Business",
    read: "8 min read",
    date: "May 12",
    // professional business team in a modern boardroom discussion
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Why Grammar Rules Are Holding You Back",
    category: "Mindset",
    read: "4 min read",
    date: "May 15",
    // student breaking free from books — confident, modern learner energy
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "The Secret to a Perfect British Accent",
    category: "Pronunciation",
    read: "6 min read",
    date: "May 18",
    // person speaking expressively into mic — pronunciation / voice coaching
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Build Vocabulary Without Memorizing",
    category: "Vocabulary",
    read: "7 min read",
    date: "May 20",
    // immersive reading / contextual learning — books + natural environment
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BlogCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Carousel Container */}
      <div className="overflow-hidden pb-12" ref={emblaRef}>
        <div className="flex -ml-4 md:-ml-8 items-stretch pt-4 text-left">
          {BLOG_POSTS.map((post, i) => (
            <div 
              key={i} 
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 md:pl-8 min-w-0"
            >
              <Link href="/blog" className="flex flex-col h-full bg-[#0a0a0a]/60 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(37,99,235,0.15)] group relative">
                {/* Image */}
                <div className="w-full aspect-video overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* dark gradient overlay — bottom fade for card content bleed, subtle top vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-black/20 pointer-events-none" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-blue-600/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-white/50 font-medium mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.read}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-snug">{post.title}</h3>
                  
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <span className="flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                      Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-4">
        {/* Pagination Dots */}
        <div className="flex items-center gap-2 flex-wrap max-w-[60%] md:max-w-none justify-center">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-300 rounded-full ${
                index === selectedIndex
                  ? 'bg-blue-500 w-8 h-2'
                  : 'bg-white/20 hover:bg-white/40 w-2 h-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
