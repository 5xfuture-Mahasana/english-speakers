'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star, Globe, Sparkles, Target, Users, BookOpen, GraduationCap, Award, Trophy, Mic, Brain } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

import InteractiveBackground from '@/components/InteractiveBackground';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import CourseGrid from '@/components/CourseGrid';
import BlogCarousel from '@/components/BlogCarousel';

export default function Home() {
  const faqData = [
    { q: "What is the best spoken English course in India?", a: "Our premium platform focuses on live speaking practice and expert feedback, making it the most effective spoken English course in India for students and professionals." },
    { q: "How to improve English fluency fast?", a: "The fastest way to fluency is guided, active speaking. Our English in 40 Days program guarantees improvement by immersing you in daily conversations." },
    { q: "IELTS coaching details?", a: "We provide comprehensive IELTS Academic and General coaching with targeted mock tests, writing evaluations, and speaking practice to help you achieve a 7.5+ band score." },
    { q: "Are the live sessions recorded?", a: "Yes, you get access to session recordings, but we highly encourage attending live to maximize your speaking practice." },
    { q: "Can I take a demo class before joining?", a: "Absolutely. You can book a free demo session to experience our interactive teaching methodology firsthand." }
  ];

  return (
    <>
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "English Speakers",
            "description": "Premium online Spoken English training platform in India.",
            "url": "https://englishspeakers.in",
            "logo": "https://englishspeakers.in/logo.png"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />

      <div className="relative overflow-hidden">
        <InteractiveBackground />

        {/* Hero Section */}
        <section id="home" className="relative pt-24 pb-10 md:pt-48 md:pb-32 px-4 scroll-mt-20">
          <div className="container mx-auto text-center max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1E24]/80 border border-white/10 backdrop-blur-md mb-6 shadow-xl"
            >
              <div className="flex gap-1 items-center mr-1">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />)}
              </div>
              <span className="text-white/90 text-xs font-bold tracking-wide">Rated 4.9/5 by 1000+ learners. Trusted across India.</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.1] tracking-tighter mb-6 drop-shadow-sm">
              <span className="inline bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">
                {['Speak', 'English', 'with'].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: 'easeOut' }}
                    className="inline-block mr-[0.25em]"
                  >{word}</motion.span>
                ))}
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                {['Complete', 'Confidence'].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.12, ease: 'easeOut' }}
                    className="inline-block mr-[0.25em]"
                  >{word}</motion.span>
                ))}
              </span>
            </h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="max-w-3xl mx-auto mb-10 text-left md:text-center"
            >
              <p className="text-base md:text-xl text-white/80 leading-relaxed font-medium mb-4 text-center md:text-center">
                Learn Easy. Speak Easy. Join India&apos;s premier spoken English institute and overcome your fear of speaking in just 45 days.
              </p>
              <p className="hidden md:block text-base text-white/60 leading-relaxed">
                From beginner fluency programs to advanced IELTS coaching, we guide your every step. Our expert-led online spoken English classes help students and professionals completely master communication skills without the stress of traditional grammar textbook methods.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <a href="https://wa.me/919849668255?text=Hello%20English%20Speakers%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Spoken%20English%20and%20IELTS%20courses." target="_blank" rel="noreferrer" className="px-8 py-4 bg-blue-600 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:scale-105 hover:bg-blue-500 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto text-white">
                  Book Free Demo Class
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://wa.me/919849668255?text=Hello%20English%20Speakers%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Spoken%20English%20and%20IELTS%20courses." target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#0a0a0a]/80 border border-white/20 rounded-full font-bold text-lg backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-white">
                  Start Speaking Today
                </a>
              </div>
              <div className="flex items-center gap-2 mt-4 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-white/60">Limited seats available</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Methodology & How it Works combined */}
        <section className="py-24 border-t border-white/5 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">How It Works</h2>
              <p className="text-white/50 text-lg">A simple, 3-step process designed to break your hesitation and build natural fluency.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto relative">
              {/* Connection Line (Desktop) */}
              <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-px bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 z-0"></div>
              
              {[
                { step: "01", icon: Target, title: "Assess & Plan", desc: "Take a quick 10-minute conversational assessment. We'll map out a customized learning path based on your current level and specific goals." },
                { step: "02", icon: Users, title: "Live Practice", desc: "Join daily interactive sessions. Spend 80% of your time actually speaking in a safe, judgment-free group of peers." },
                { step: "03", icon: Sparkles, title: "Achieve Fluency", desc: "Receive immediate, structured feedback from expert coaches. Watch your hesitation vanish as you start speaking naturally." }
              ].map((feature, i) => (
                <div key={i} className="glass-panel-hover rounded-3xl p-8 border border-white/10 relative overflow-hidden group z-10 bg-[#0a0a0a]">
                  <div className="absolute top-6 right-6 text-5xl font-bold text-white/5 font-mono select-none pointer-events-none group-hover:text-blue-500/10 transition-colors">
                    {feature.step}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#101010] to-[#151515] border border-white/5 shadow-[0_0_15px_rgba(37,99,235,0.1)] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-500 relative">
                    <feature.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 border-t border-white/5 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Why Choose English Speakers?</h2>
              <p className="text-white/50 text-lg">We don&apos;t just teach grammar. We rewire your brain to think and speak in English instinctively.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto mb-20 md:mb-32">
              {[
                { title: "Immersive Learning", desc: "Our best spoken english training focuses on real-life English conversations. This rewires your brain to think directly in English rather than translating from your native language." },
                { title: "80% Active Speaking Focus", desc: "Spend the majority of your time practicing to erase stage fear and build rapid communication fluency using our targeted English speaking classes methodology." },
                { title: "English for Telugu Speakers", desc: "Specialized bilingual teaching designed for native Telugu speakers. We correct common linguistic errors and reduce regional mother-tongue influence." },
                { title: "Professional English Mastery", desc: "Accelerate your career with our corporate curriculum. Master email etiquette, interview confidence, and professional business English for the modern workplace." },
                { title: "Top IELTS Coaching", desc: "Expert-led IELTS test preparation strategies focusing heavily on Reading, Writing, Listening, and Speaking to secure a 7.5+ band score for global opportunities." },
                { title: "Interactive Online Platform", desc: "Our digital learning ecosystem offers you the flexibility to access your online spoken English course from anywhere, featuring live personalized doubt clearing." }
              ].map((feature, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] cursor-default"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all duration-500 relative">
                     <CheckCircle2 className="w-6 h-6 text-blue-400 group-hover:text-blue-300 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                     <div className="absolute inset-0 rounded-xl border border-blue-400/0 group-hover:border-blue-400/30 group-hover:scale-110 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Meet Our Founder — Premium */}
            <div id="about" className="max-w-7xl mx-auto scroll-mt-32">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
                  <Sparkles className="w-3.5 h-3.5" /> Meet Our Founder
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  Meet{' '}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Dr. Madhavi</span>
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60" />
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Image Card */}
                <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                  className="lg:col-span-5 lg:sticky lg:top-28">
                  <div className="relative group">
                    <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-purple-500/20 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="relative rounded-[1.75rem] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
                      <div className="aspect-[4/5] relative overflow-hidden">
                        <img src="/images/Meet Dr. Madhavi.png" alt="Dr. Madhavi (Madhu)"
                          className="w-full h-full object-cover object-[center_15%] group-hover:scale-[1.03] transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/10 to-transparent" />
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-blue-400/30">
                          <Star className="w-3 h-3 fill-white" /> 36+ Years Experience
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-bold text-white mb-0.5">Dr. Madhavi (Madhu)</h3>
                        <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Founder &amp; Lead Educator</p>
                        <div className="flex flex-wrap gap-2">
                          {['Ph.D.', 'British Council', 'TESOL', 'IELTS'].map(tag => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {[
                        { year: '36+ Yrs', label: 'Teaching Experience', color: 'from-blue-500 to-blue-600' },
                        { year: 'British', label: 'Council Master Trainer', color: 'from-indigo-500 to-indigo-600' },
                        { year: 'U.S.', label: 'Dept. of State Trained', color: 'from-purple-500 to-purple-600' },
                        { year: 'Gold', label: 'Best Teacher Medal', color: 'from-amber-500 to-yellow-500' },
                      ].map((t, i) => (
                        <div key={i} className="glass-panel rounded-xl p-3 border border-white/10 flex items-center gap-3">
                          <div className={`w-8 h-8 shrink-0 rounded-lg bg-gradient-to-br ${t.color} flex items-center justify-center`}>
                            <span className="text-[9px] font-black text-white leading-none text-center">{t.year}</span>
                          </div>
                          <span className="text-xs text-white/60 font-medium leading-tight">{t.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
                  className="lg:col-span-7 space-y-6">
                  <div className="glass-panel rounded-2xl p-6 border border-white/10">
                    <p className="text-white/70 leading-relaxed text-[1.05rem]">
                      Dr. Madhavi is a highly accomplished English language educator with a <strong className="text-white">Ph.D. in English Literature</strong>, M.A., M.Phil., and PGDTE from the English and Foreign Languages University. With 36+ years of experience, she has trained thousands of students and professionals across India to communicate confidently in English.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">Credentials &amp; Awards</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        { icon: GraduationCap, title: 'Ph.D. in English Literature', desc: 'M.A., M.Phil. & PGDTE — EFL University' },
                        { icon: Globe, title: 'British Council Master Trainer', desc: 'Train the Trainer — Dept. of Higher Education, AP' },
                        { icon: Trophy, title: 'Best Teacher — Gold Medal 2012', desc: 'Commendation for teaching Employable Skills' },
                        { icon: Award, title: 'TESOL · TKT · BULATS Certified', desc: 'IELTS & CELPIP certified — British Council' },
                      ].map((a, i) => (
                        <div key={i} className="glass-panel rounded-xl p-4 border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group flex items-start gap-3">
                          <div className="w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <a.icon className="w-4 h-4 text-blue-400" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white mb-0.5">{a.title}</div>
                            <div className="text-xs text-white/40 leading-snug">{a.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">Training Programs</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        { icon: BookOpen, title: 'IELTS Coaching', desc: 'Academic & General — 7.5+ band target' },
                        { icon: Brain, title: 'CELPIP Training', desc: 'Canada PR computer-based preparation' },
                        { icon: Mic, title: 'Spoken English', desc: 'Basic to Advanced fluency program' },
                        { icon: Globe, title: 'Business English', desc: 'Corporate communication & presentations' },
                      ].map((p, i) => (
                        <div key={i} className="glass-panel rounded-xl p-4 border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all duration-300 group flex items-start gap-3">
                          <div className="w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <p.icon className="w-4 h-4 text-indigo-400" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white mb-0.5">{p.title}</div>
                            <div className="text-xs text-white/40 leading-snug">{p.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-blue-500 pl-5 py-1">
                    <p className="text-white/60 text-sm italic leading-relaxed">
                      &quot;With a learner-centered approach and a commitment to excellence, I aim to empower students and professionals to achieve their language goals and succeed in global environments.&quot;
                    </p>
                  </blockquote>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: '10k+', label: 'Students Trained', icon: Users },
                      { value: '36+', label: 'Years Experience', icon: Star },
                      { value: '100%', label: 'Practical Training', icon: Target },
                      { value: 'Ph.D.', label: 'English Literature', icon: GraduationCap },
                    ].map((s, i) => (
                      <div key={i} className="glass-panel rounded-xl p-4 text-center border border-white/10 hover:border-blue-500/30 transition-all group">
                        <s.icon className="w-4 h-4 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                        <div className="text-xl font-bold text-white"><AnimatedCounter value={s.value} /></div>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a href="https://wa.me/919849668255?text=Hello%20English%20Speakers%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses."
                      target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:shadow-[0_0_35px_rgba(37,99,235,0.5)] transition-all hover:scale-105 text-sm">
                      Book a Free Demo Class <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-24 border-t border-white/5 relative scroll-mt-20">
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70">Our Premium Courses</h2>
              <p className="text-white/50 text-lg">Choose the path that fits your goals. Start your linguistic transformation with structured, result-oriented training.</p>
            </div>

            <CourseGrid />
          </div>
        </section>

        {/* What You Will Achieve */}
        <section className="py-24 border-t border-white/5 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">Student Benefits & Career Outcomes</h2>
                <div className="space-y-4 mb-10">
                  <p className="text-white/70 text-lg leading-relaxed font-medium">Mastering communication skills is the fastest way to career growth. See exactly how fluent English can change your trajectory through our interactive methodology.</p>
                  <p className="text-white/50 text-base leading-relaxed">Our alumni from Hyderabad, Rajahmundry, Visakhapatnam, and across Andhra Pradesh consistently report clearing difficult job interviews, securing promotions, and achieving their study abroad dreams after completing our professional English training.</p>
                </div>
                <ul className="space-y-6">
                  {[
                    "Communicate with native fluency and complete clarity",
                    "Master advanced pronunciation, accent, and vocabulary",
                    "Craft impeccable essays and strict corporate emails",
                    "Attain top-tier IELTS and CELPIP scores effectively",
                    "Confidently lead corporate presentations and meetings"
                  ].map((outcome, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80 font-medium text-base md:text-lg">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-blue-400" />
                      </div>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-video md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10"></div>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Students achieving success and collaborating" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="container mx-auto relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">Inspiring Student Success Stories</h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Blog / Resources Preview */}
        <section id="blog" className="py-24 border-t border-white/5 relative scroll-mt-20 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Latest Insights</h2>
                <p className="text-white/50">Strategies and tips to accelerate your learning.</p>
              </div>
              <Link href="/blog" className="text-white/70 hover:text-white flex items-center gap-2 font-bold group">
                View all articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <BlogCarousel />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 border-t border-white/5 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Frequently Asked Questions</h2>
              <p className="text-white/50 text-lg">Everything you need to know about our premium Spoken English course.</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, i) => (
                <div key={i} className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                   <h3 className="text-lg md:text-xl font-bold text-white mb-3 flex items-start gap-3">
                      <span className="text-blue-500 mt-0.5">Q.</span> {faq.q}
                   </h3>
                   <p className="text-white/60 text-sm md:text-base leading-relaxed pl-8">
                      {faq.a}
                   </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden border-t border-white/5 text-center">
           <div className="absolute inset-0 -z-10">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] opacity-40" />
           </div>
           <div className="container mx-auto px-4 relative">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Ready to Speak Easy?</h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">Join thousands of successful learners who have transformed their careers with our premium spoken English platform.</p>
            <Link href="/courses" className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-blue-50 transition-colors inline-block">
              Explore Our Programs
            </Link>
           </div>
        </section>

      </div>
    </>
  );
}
