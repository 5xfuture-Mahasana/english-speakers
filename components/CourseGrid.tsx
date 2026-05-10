'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Target, Users, Sparkles, GraduationCap, Baby, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const COURSE_CATEGORIES = [
  { id: 'exam', label: 'Exam Prep', icon: Target },
  { id: 'spoken', label: 'Spoken English', icon: Users },
  { id: 'professional', label: 'Professional', icon: BookOpen },
  { id: 'specialized', label: 'Specialized', icon: Sparkles },
  { id: 'academic', label: 'Academic & Teaching', icon: GraduationCap },
  { id: 'kids', label: 'Kids Program', icon: Baby },
];

const COURSES = [
  // EXAM PREPARATION
  {
    category: 'exam',
    title: 'IELTS Coaching (Academic & General)',
    description: 'Comprehensive strategies, mock tests, and personalized feedback.',
    benefit: 'Achieve 7.5+ Band Score',
    level: 'Intermediate - Advanced'
  },
  {
    category: 'exam',
    title: 'CELPIP Training',
    description: 'Targeted preparation for Canadian immigration and citizenship.',
    benefit: 'Maximized CLB Levels',
    level: 'Intermediate - Advanced'
  },

  // SPOKEN ENGLISH PROGRAMS
  {
    category: 'spoken',
    title: 'Basic to Advanced English',
    description: 'Based on Cambridge New Interchange (Levels 1, 2, and 3).',
    benefit: 'Structured Progression',
    level: 'All Levels'
  },
  {
    category: 'spoken',
    title: 'English in 40 Days',
    description: 'Intensive speaking program to break hesitation quickly.',
    benefit: 'Rapid Fluency & Confidence',
    level: 'Beginner - Intermediate'
  },
  {
    category: 'spoken',
    title: 'English for Telugu Speakers',
    description: 'Bilingual explanations for quick grasping and comfortable learning.',
    benefit: 'Clear Conceptual Understanding',
    level: 'Beginner'
  },

  // PROFESSIONAL ENGLISH
  {
    category: 'professional',
    title: 'Business English',
    description: 'Master formal communication, emails, and client interactions.',
    benefit: 'Professional Authority',
    level: 'Intermediate - Advanced'
  },
  {
    category: 'professional',
    title: 'Workplace English',
    description: 'Everyday office conversations, meetings, and team dynamics.',
    benefit: 'Confident Colleague Interactions',
    level: 'Intermediate'
  },

  // SPECIALIZED COURSES
  {
    category: 'specialized',
    title: 'BIOLINGO Program',
    description: 'Exclusive and unique English learning framework.',
    benefit: 'Specialized Skill Mastery',
    level: 'All Levels'
  },
  {
    category: 'specialized',
    title: 'Writing Skills',
    description: 'From sentence structure to advanced essay and report writing.',
    benefit: 'Flawless Written Expression',
    level: 'All Levels'
  },
  {
    category: 'specialized',
    title: 'Phonetics',
    description: 'Understand sounds, speech mechanisms, and accent reduction.',
    benefit: 'Native-like Pronunciation',
    level: 'All Levels'
  },

  // ACADEMIC & TEACHER TRAINING
  {
    category: 'academic',
    title: 'English Literature',
    description: 'Comprehensive coaching for all papers of M.A. English.',
    benefit: 'Academic Excellence',
    level: 'Advanced'
  },
  {
    category: 'academic',
    title: 'Teaching for Success',
    description: 'Pedagogical training and classroom strategies for English teachers.',
    benefit: 'Enhanced Educator Skills',
    level: 'Advanced / Teachers'
  },

  // KIDS PROGRAM
  {
    category: 'kids',
    title: 'Phonics & Speaking Skills',
    description: 'Fun, interactive sessions for children to build early language skills.',
    benefit: 'Strong Foundational English',
    level: 'Kids'
  }
];

export default function CourseGrid() {
  const [activeCategory, setActiveCategory] = useState(COURSE_CATEGORIES[0].id);

  const filteredCourses = COURSES.filter(course => course.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
        {COURSE_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                isActive 
                  ? 'bg-blue-600/20 border-blue-500/50 text-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.2)]' 
                  : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-white/40'}`} />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
              className="glass-panel-hover p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] flex flex-col group relative overflow-hidden"
            >
              {/* Subtle top gradient line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-blue-400 text-xs font-bold uppercase mb-4 tracking-wider flex items-center justify-between">
                <span>{course.level}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                {course.title}
              </h3>
              
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                {course.description}
              </p>
              
              <div className="flex flex-col gap-6 mt-auto">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-blue-400/80 uppercase font-bold tracking-wider block mb-0.5">Key Benefit</span>
                    <span className="text-sm font-medium text-white/90">{course.benefit}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Link href="https://wa.me/919849668255?text=Hello%20English%20Speakers%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Spoken%20English%20and%20IELTS%20courses." target="_blank" className="w-full text-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white py-3 text-sm transition-colors font-bold shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                    Enroll Now
                  </Link>
                  <Link href="https://wa.me/919849668255?text=Hello%20English%20Speakers%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Spoken%20English%20and%20IELTS%20courses." target="_blank" className="w-full text-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 text-sm transition-colors font-bold flex items-center justify-center gap-1.5 group/btn">
                    Book Demo <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
