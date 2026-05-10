'use client';

import { motion } from 'motion/react';
import { GraduationCap, Award, Globe, Star, CheckCircle2, Sparkles, BookOpen, Users, Target, Mic, Brain, Trophy } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const stats = [
  { value: '10k+', label: 'Students Trained', icon: Users },
  { value: '36+', label: 'Years Experience', icon: Star },
  { value: '100%', label: 'Practical Training', icon: Target },
  { value: 'Ph.D.', label: 'English Literature', icon: GraduationCap },
];

const achievements = [
  { icon: GraduationCap, title: 'Ph.D. in English Literature', desc: 'M.A., M.Phil. & PGDTE — English & Foreign Languages University' },
  { icon: Globe, title: 'British Council Master Trainer', desc: '"Train the Trainer" — Dept. of Higher Education, Andhra Pradesh' },
  { icon: Trophy, title: 'Best Teacher — Gold Medal 2012', desc: 'Commendation Certificate for Teaching Employable Skills to rural students' },
  { icon: Award, title: 'TESOL · TKT · BULATS Certified', desc: 'IELTS & CELPIP certified trainer via British Council, Ufaber & World Class Academy' },
];

const timeline = [
  { year: '36+ Yrs', label: 'Teaching Experience', color: 'from-blue-500 to-blue-600' },
  { year: 'British', label: 'Council Master Trainer', color: 'from-indigo-500 to-indigo-600' },
  { year: 'U.S.', label: 'Dept. of State Trained', color: 'from-purple-500 to-purple-600' },
  { year: 'Gold', label: 'Best Teacher Medal', color: 'from-amber-500 to-yellow-500' },
];

const programs = [
  { icon: Mic, title: 'Spoken English', desc: 'Basic to Advanced fluency with active daily practice' },
  { icon: BookOpen, title: 'IELTS Coaching', desc: 'Academic & General — target 7.5+ band score' },
  { icon: Brain, title: 'CELPIP Training', desc: 'Canada PR preparation with computer-based simulation' },
  { icon: Globe, title: 'Business English', desc: 'Corporate communication, emails & presentations' },
  { icon: Users, title: 'English for Telugu Speakers', desc: 'Bilingual approach to eliminate MTI completely' },
  { icon: Sparkles, title: 'Phonetics & Accent', desc: 'Pronunciation drills and neutralization techniques' },
];

const values = [
  { icon: Target, title: 'Result-Oriented', desc: 'Success measured by real conversations and outcomes, not textbook lessons.' },
  { icon: Users, title: 'Student-Centred', desc: 'Zero-judgment environment. Mistakes are the vehicle for fluency.' },
  { icon: Award, title: 'Premium Quality', desc: 'Strictly vetted syllabus and expert-led sessions — no compromise.' },
];

export default function AboutPage() {
  return (
    <div className="bg-[#050505] min-h-screen pt-28 pb-24 overflow-hidden relative">
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-0">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-700/8 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">

        {/* PAGE HERO */}
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" /> About English Speakers
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Empowering Voices,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Transforming Lives
            </span>
          </h1>
          <p className="text-white/50 text-base md:text-lg leading-relaxed">
            India&apos;s premier spoken English institute led by a Ph.D. educator with 36+ years of transformative pedagogical experience.
          </p>
        </motion.div>

        {/* STATS STRIP */}
        <motion.div {...fadeUp(0.1)} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-24">
          {stats.map((s, i) => (
            <div key={i} className="glass-panel rounded-2xl p-4 md:p-6 text-center border border-white/10 hover:border-blue-500/30 transition-all duration-300 group">
              <s.icon className="w-5 h-5 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1"><AnimatedCounter value={s.value} /></div>
              <div className="text-xs text-white/40 uppercase tracking-widest font-bold">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* MEET DR. MADHAVI */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-24">
          <motion.div {...fadeUp(0.1)} className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-blue-500/40 via-indigo-500/20 to-purple-500/40 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="relative rounded-[1.75rem] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img src="/images/Meet Dr. Madhavi.png" alt="Dr. Madhavi"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-blue-400/30">
                    <Star className="w-3 h-3 fill-white" /> 36+ Years Experience
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-0.5">Dr. Madhavi (Madhu)</h3>
                  <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-4">Founder &amp; Lead Educator</p>
                  <div className="flex flex-wrap gap-2">
                    {['Ph.D.', 'British Council', 'TESOL', 'IELTS'].map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {timeline.map((t, i) => (
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

          <div className="lg:col-span-7 space-y-8">
            <motion.div {...fadeUp(0.15)}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Meet{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Dr. Madhavi</span>
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60" />
                </span>
              </h2>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="glass-panel rounded-2xl p-6 border border-white/10">
              <p className="text-white/70 leading-relaxed text-[1.05rem]">
                Dr. Madhavi is a highly accomplished English language educator with a <strong className="text-white">Ph.D. in English Literature</strong>, M.A., M.Phil., and PGDTE from the English and Foreign Languages University. With 36+ years of experience, she has trained thousands of students, professionals, and educators across India to communicate confidently in English.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.25)}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Credentials &amp; Awards</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {achievements.map((a, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="glass-panel rounded-xl p-4 border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <a.icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white mb-0.5">{a.title}</div>
                        <div className="text-xs text-white/40 leading-snug">{a.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.3)} className="glass-panel rounded-2xl p-6 border border-white/10">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">International Training</h3>
              <div className="space-y-2.5">
                {[
                  'Trained by George Bishop Jr., Senior English Language Fellow — U.S. State Department',
                  'IELTS trainer certified through Ufaber, World Class Academy & British Council Chennai',
                  'Authored and edited English language textbooks and developed e-content for institutions',
                  'Best Professor of 2009 — awarded by 24/7; Commendation for Outstanding Service',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* TRAINING PROGRAMS */}
        <motion.div {...fadeUp(0.1)} className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Training{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Programs</span>
            </h2>
            <p className="text-white/40 text-base">Expert-led programs designed for real results</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {programs.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.07 * i, duration: 0.5 }}
                className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-blue-500/30 hover:bg-white/5 transition-all duration-300 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <p.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-bold text-white mb-1.5">{p.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PHILOSOPHY */}
        <motion.div {...fadeUp(0.1)} className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Our Core{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Philosophy</span>
            </h2>
            <p className="text-white/40 text-base">Every decision guided by one question — does this help students speak better?</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="glass-panel rounded-2xl p-7 border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-indigo-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <v.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div {...fadeUp(0.1)} className="relative rounded-[2rem] overflow-hidden border border-white/10 glass-panel p-7 md:p-16 text-center">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-purple-600/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-blue-600/20 rounded-full blur-[80px] pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">Ready to speak with confidence?</h2>
          <p className="text-white/50 text-lg mb-8 relative z-10 max-w-xl mx-auto">
            Join thousands of students who transformed their English with Dr. Madhavi&apos;s guidance.
          </p>
          <a href="https://wa.me/919849668255?text=Hello%20English%20Speakers%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses."
            target="_blank" rel="noreferrer"
            className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full text-lg shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-all hover:scale-105">
            Book a Free Demo Class
          </a>
        </motion.div>

      </div>
    </div>
  );
}
