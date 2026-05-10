'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, BookOpen, Target, Users, Sparkles, GraduationCap, Baby } from 'lucide-react';

const COURSE_CATEGORIES = [
  {
    id: 'exam',
    label: 'Exam Preparation',
    icon: Target,
    courses: [
      { name: 'IELTS Coaching', slug: 'ielts-coaching' },
      { name: 'CELPIP Training', slug: 'celpip-training' },
    ],
  },
  {
    id: 'spoken',
    label: 'Spoken English',
    icon: Users,
    courses: [
      { name: 'Basic to Advanced English', slug: 'basic-to-advanced-english' },
      { name: 'English in 40 Days', slug: 'english-in-40-days' },
      { name: 'English for Telugu Speakers', slug: 'english-for-telugu-speakers' },
    ],
  },
  {
    id: 'professional',
    label: 'Professional English',
    icon: BookOpen,
    courses: [
      { name: 'Business English', slug: 'business-english' },
      { name: 'Workplace English', slug: 'workplace-english' },
    ],
  },
  {
    id: 'specialized',
    label: 'Specialized Courses',
    icon: Sparkles,
    courses: [
      { name: 'BIOLINGO Program', slug: 'biolingo-program' },
      { name: 'Writing Skills', slug: 'writing-skills' },
      { name: 'Phonetics', slug: 'phonetics' },
    ],
  },
  {
    id: 'academic',
    label: 'Academic & Teaching',
    icon: GraduationCap,
    courses: [
      { name: 'English Literature (M.A.)', slug: 'english-literature' },
      { name: 'Teaching for Success', slug: 'teaching-for-success' },
    ],
  },
  {
    id: 'kids',
    label: 'Kids Program',
    icon: Baby,
    courses: [
      { name: 'Phonics & Speaking Skills', slug: 'phonics-and-speaking-skills' },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      e.preventDefault();
      const targetId = href.split('#')[1];
      if (pathname !== '/') {
        router.push(href);
        setIsMobileMenuOpen(false);
        return;
      }
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      suppressHydrationWarning
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/10 backdrop-blur-xl bg-[#050505]/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      {/* Inner row — py controls navbar height, no fixed h- so logo is never clipped */}
      <div suppressHydrationWarning className="w-full max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-between py-2 md:py-3">

        {/* ── LOGO ── */}
        <Link href="/" className="relative z-50 shrink-0 flex items-center group">
          <img
            src="/images/logo-transparent.png"
            alt="English Speakers"
            className="w-[140px] md:w-[170px] lg:w-[200px] h-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
          />
        </Link>

        {/* ── DESKTOP NAV ── */}
        <nav suppressHydrationWarning className="hidden md:flex items-center gap-7">
          {/* Home */}
          <Link
            href="/#home"
            onClick={(e) => handleNavClick(e, '/#home')}
            className={`text-sm font-bold flex items-center group transition-colors ${
              pathname === '/' ? 'text-blue-400' : 'text-white/70 hover:text-blue-400'
            }`}
          >
            <span className="relative">
              Home
              <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-blue-400 rounded-full transition-all duration-300 origin-left ${
                pathname === '/' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
              }`} />
            </span>
          </Link>

          {/* About */}
          <Link
            href="/#about"
            onClick={(e) => handleNavClick(e, '/#about')}
            className="text-sm font-bold flex items-center group transition-colors text-white/70 hover:text-blue-400"
          >
            <span className="relative">
              About Us
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-400 rounded-full transition-all duration-300 origin-left scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100" />
            </span>
          </Link>

          {/* Courses mega-menu */}
          <div
            className="relative flex items-center group/dropdown"
            onMouseEnter={() => setIsCoursesDropdownOpen(true)}
            onMouseLeave={() => setIsCoursesDropdownOpen(false)}
          >
            <button
              className={`text-sm font-bold transition-colors flex items-center gap-1 ${
                pathname.startsWith('/courses') ? 'text-blue-400' : 'text-white/70 group-hover/dropdown:text-blue-400'
              }`}
            >
              <span className="relative inline-flex items-center gap-1">
                Courses
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCoursesDropdownOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute -bottom-1 left-0 w-[calc(100%-20px)] h-[2px] bg-blue-400 rounded-full transition-all duration-300 origin-left ${
                  pathname.startsWith('/courses') ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover/dropdown:scale-x-100 group-hover/dropdown:opacity-100'
                }`} />
              </span>
            </button>

            <AnimatePresence>
              {isCoursesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[800px] p-6 rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] grid grid-cols-2 lg:grid-cols-3 gap-6 z-50"
                >
                  {COURSE_CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <div key={cat.id} className="flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                            <Icon className="w-4 h-4 text-blue-400" />
                          </div>
                          <span className="text-sm font-bold text-white/90 uppercase tracking-wider">{cat.label}</span>
                        </div>
                        <ul className="flex flex-col gap-2 pl-10">
                          {cat.courses.map((course) => (
                            <li key={course.slug}>
                              <Link
                                href={`/courses/${course.slug}`}
                                className="text-sm text-white/50 hover:text-blue-400 hover:translate-x-1 transition-all block py-1"
                                onClick={() => setIsCoursesDropdownOpen(false)}
                              >
                                {course.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Blog */}
          <Link
            href="/#blog"
            onClick={(e) => handleNavClick(e, '/#blog')}
            className="text-sm font-bold flex items-center group transition-colors text-white/70 hover:text-blue-400"
          >
            <span className="relative">
              Blog
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-400 rounded-full transition-all duration-300 origin-left scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100" />
            </span>
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="text-sm font-bold flex items-center group transition-colors text-white/70 hover:text-blue-400"
          >
            <span className="relative">
              Contact
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-400 rounded-full transition-all duration-300 origin-left scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100" />
            </span>
          </Link>
        </nav>

        {/* ── CTA ── */}
        <div className="hidden md:flex items-center">
          <Link
            href="https://wa.me/919849668255?text=Hello%20English%20Speakers%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Spoken%20English%20and%20IELTS%20courses."
            target="_blank"
            className="px-6 py-2.5 bg-blue-600 text-white rounded-full font-bold text-sm shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:bg-blue-500 hover:scale-105 hover:shadow-[0_0_28px_rgba(37,99,235,0.55)] transition-all"
          >
            Book Free Demo
          </Link>
        </div>

        {/* ── MOBILE TOGGLE ── */}
        <button
          className="md:hidden z-50 relative p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 w-full h-[100dvh] bg-[#050505] flex flex-col z-40 overflow-y-auto md:hidden"
          >
            {/* Logo inside mobile menu */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img
                  src="/images/logo-transparent.png"
                  alt="English Speakers"
                  className="w-[100px] h-auto object-contain"
                />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white/60 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6 px-6 pt-8 pb-10">
              <Link href="/#home" className={`text-2xl font-bold transition-colors ${pathname === '/' ? 'text-blue-400' : 'text-white/70 hover:text-blue-400'}`}
                onClick={(e) => handleNavClick(e, '/#home')}>Home</Link>

              <Link href="/#about" className="text-2xl font-bold text-white/70 hover:text-blue-400 transition-colors"
                onClick={(e) => handleNavClick(e, '/#about')}>About Us</Link>

              <div className="flex flex-col">
                <button
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  className={`flex items-center justify-between text-2xl font-bold transition-colors w-full ${
                    pathname.startsWith('/courses') ? 'text-blue-400' : 'text-white/70 hover:text-blue-400'
                  }`}
                >
                  Courses
                  <ChevronDown className={`w-6 h-6 transition-transform ${mobileCoursesOpen ? 'rotate-180 text-blue-400' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileCoursesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-6 mt-6 pl-4 border-l border-white/10"
                    >
                      {COURSE_CATEGORIES.map((cat) => (
                        <div key={cat.id} className="flex flex-col gap-3">
                          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">{cat.label}</span>
                          {cat.courses.map(course => (
                            <Link key={course.slug} href={`/courses/${course.slug}`}
                              className="text-lg text-white/60 hover:text-blue-400 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}>
                              {course.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/#blog" className="text-2xl font-bold text-white/70 hover:text-blue-400 transition-colors"
                onClick={(e) => handleNavClick(e, '/#blog')}>Blog</Link>

              <Link href="/contact" className="text-2xl font-bold text-white/70 hover:text-blue-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

              <Link
                href="https://wa.me/919849668255?text=Hello%20English%20Speakers%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Spoken%20English%20and%20IELTS%20courses."
                target="_blank"
                className="mt-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-center text-xl font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Free Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
