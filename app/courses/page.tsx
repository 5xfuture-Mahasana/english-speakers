'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { CheckCircle2, Star, Clock, Users, BookOpen } from 'lucide-react';

const courses = [
  {
    id: 'spoken',
    title: 'Spoken English Training',
    badge: 'Beginner to Advanced',
    price: '₹5,999',
    duration: '3 Months',
    sessions: '45 Live Sessions',
    students: '20k+',
    desc: 'Build confidence from basic to advanced level with real-life conversation practice.',
    features: [
      'Improve fluency & pronunciation',
      'Daily speaking practice',
      'Grammar + vocabulary mastery',
      'Real-world mock conversations',
      'Bilingual support (English + Telugu)',
      'Access to exclusive community'
    ]
  },
  {
    id: 'ielts',
    title: 'IELTS Coaching',
    badge: 'Academic & General (Most Popular)',
    price: '₹8,999',
    duration: '40 Days',
    sessions: '60 Live Sessions',
    students: '15k+',
    isPopular: true,
    desc: 'Complete preparation for Academic & General IELTS with expert strategies.',
    features: [
      'Band score improvement (7+)',
      'Mock tests + feedback',
      'Writing & speaking mastery',
      'Reading & listening strategies',
      'Weekly 1-on-1 feedback calls',
      'Intensive exam-focused training',
      'Priority WhatsApp support'
    ]
  },
  {
    id: 'celpip',
    title: 'CELPIP Training',
    badge: 'Canada PR & Global',
    price: '₹7,999',
    duration: '45 Days',
    sessions: '50 Live Sessions',
    students: '5k+',
    desc: 'Prepare for international exams required for Canada PR & global opportunities.',
    features: [
      'Exam-focused training',
      'Real test simulations',
      'Personalized coaching',
      'Computer-delivered test strategies',
      'Speaking & writing templates',
      'Custom scheduling',
      'Direct line to lead instructor'
    ]
  }
];

export default function CoursesPage() {
  return (
    <>
      {/* Dynamic SEO Meta title/desc usually handled in layout or via Next.js metadata API, 
          but adding structured data here for Product/Course schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": courses.map((course, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Course",
                "name": course.title,
                "description": course.desc,
                "provider": {
                  "@type": "EducationalOrganization",
                  "name": "English Speakers"
                }
              }
            }))
          })
        }}
      />

      <div className="pt-32 pb-24 relative overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] opacity-40 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Premium Programs</h1>
            <p className="text-white/50 text-base md:text-xl">Invest in yourself. Choose the program that aligns with your goals and start speaking like a native.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.map((course, idx) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`${course.isPopular ? 'bg-blue-600 shadow-[0_20px_50px_rgba(37,99,235,0.2)] border border-blue-400/30 lg:-translate-y-4' : 'bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors'} rounded-3xl p-8 flex flex-col group relative`}
              >
                {course.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-xs font-bold uppercase tracking-wider py-1.5 px-6 rounded-full shadow-lg">
                    Recommended
                  </div>
                )}
                
                <div className="mb-6">
                  <span className={`text-xs font-bold uppercase tracking-wider mb-2 block ${course.isPopular ? 'text-white/80' : 'text-blue-400'}`}>{course.badge}</span>
                  <h2 className="text-3xl font-bold text-white mb-3">{course.title}</h2>
                  <p className={`text-sm italic leading-relaxed ${course.isPopular ? 'text-white/80' : 'text-white/50'}`}>{course.desc}</p>
                </div>

                <div className={`mb-8 p-6 rounded-2xl flex flex-col gap-4 ${course.isPopular ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10'} border`}>
                   <div className="flex items-end justify-between">
                      <div className="flex items-end gap-1">
                        <span className={`text-4xl font-mono font-bold ${course.isPopular ? 'text-white' : 'text-blue-400'}`}>{course.price}</span>
                        {course.price !== 'Custom' && <span className="text-white/50 mb-1">/total</span>}
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${course.isPopular ? 'bg-white text-blue-600' : 'border border-white/20 text-white group-hover:bg-blue-600 group-hover:border-blue-600'}`}>
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                   </div>
                   <div className={`grid grid-cols-2 gap-4 pt-4 border-t ${course.isPopular ? 'border-white/20' : 'border-white/10'}`}>
                      <div className="flex items-center gap-2 text-sm text-white/70">
                        <Clock className="w-4 h-4 text-white/50" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/70">
                        <BookOpen className="w-4 h-4 text-white/50" />
                        {course.sessions}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/70 col-span-2">
                         <span className="flex text-yellow-500"><Star className="w-3 h-3" fill="currentColor" /><Star className="w-3 h-3" fill="currentColor" /><Star className="w-3 h-3" fill="currentColor" /><Star className="w-3 h-3" fill="currentColor" /><Star className="w-3 h-3" fill="currentColor" /></span>
                         <span className="text-xs ml-1">Trusted by {course.students}</span>
                      </div>
                   </div>
                </div>

                <div className="flex-1 mb-8">
                  <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">What&apos;s Included</h4>
                  <ul className="space-y-4">
                    {course.features.map((feature, i) => (
                      <li key={i} className={`flex items-start gap-3 text-sm ${course.isPopular ? 'text-white/90' : 'text-white/70'}`}>
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${course.isPopular ? 'text-white' : 'text-blue-500'}`} />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={course.id === 'corporate' ? '/contact' : '/enroll'} 
                  className={`w-full text-center rounded-full py-4 text-sm font-bold transition-all duration-300 ${
                    course.isPopular 
                      ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg' 
                      : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'
                  }`}
                >
                  {course.id === 'corporate' ? 'Consultation Request' : 'Enroll Now'}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* 40-Day IELTS Master Plan Detail */}
          <div className="mt-32 max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">40-Day IELTS Master Plan</h2>
              <p className="text-white/50 text-base md:text-lg">A structured, phase-by-phase approach to achieving your target band score.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { phase: "Phase 1", title: "Foundation", desc: "Understand exam structure, basics of all modules, and build core skills." },
                { phase: "Phase 2", title: "Skill Development", desc: "Strengthen listening, reading, writing, and speaking with strategies." },
                { phase: "Phase 3", title: "Advanced Practice", desc: "Improve accuracy, fluency, and target Band 7+ performance." },
                { phase: "Phase 4", title: "Exam Strategy", desc: "Mock tests, time management, and final confidence building." }
              ].map((step, i) => (
                <div key={i} className="glass-panel p-5 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:bg-white/5 transition-colors">
                  <div className="absolute top-0 right-0 p-6 opacity-10 font-bold text-6xl text-white group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  <div className="text-blue-400 font-bold tracking-wider uppercase text-xs mb-3">{step.phase}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
