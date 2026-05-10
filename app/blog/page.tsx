import Link from 'next/link';
import { ArrowRight, Calendar, User, Facebook, Twitter, Linkedin } from 'lucide-react';

const POSTS = [
  {
    slug: 'learn-english-speaking-in-india',
    title: 'How to Learn English Speaking in India: The Ultimate Guide',
    excerpt: 'Discover the most effective strategies, premium resources, and practical tips to master spoken English in the Indian context.',
    date: 'May 1, 2026',
    author: 'Sarah Jenkins',
    category: 'Guide',
    image: 'https://picsum.photos/seed/blog10/600/400'
  },
  {
    slug: 'best-spoken-english-course-online',
    title: 'Finding the Best Spoken English Course Online: What to Look For',
    excerpt: 'Not all online courses are created equal. Learn how to identify premium programs that actually deliver fluency results.',
    date: 'April 24, 2026',
    author: 'David Chen',
    category: 'Review',
    image: 'https://picsum.photos/seed/blog11/600/400'
  },
  {
    slug: 'overcome-fear-of-speaking-english',
    title: '3 Psychological Tricks to Overcome the Fear of Speaking English',
    excerpt: 'Hesitation is the enemy of fluency. Rewire your brain to speak confidently in public and corporate settings.',
    date: 'April 15, 2026',
    author: 'Priya Menon',
    category: 'Tips',
    image: 'https://picsum.photos/seed/blog12/600/400'
  },
  {
    slug: 'business-english-vocabulary',
    title: '50 Essential Business English Phrases for Corporate Meetings',
    excerpt: 'Elevate your professional communication with these high-impact phrases used by top executives globally.',
    date: 'April 2, 2026',
    author: 'David Chen',
    category: 'Vocabulary',
    image: 'https://picsum.photos/seed/blog13/600/400'
  }
];

export default function BlogIndex() {
  return (
    <>
      {/* SEO Schema for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "English Speakers Blog",
            "description": "Expert tips and guides on learning English speaking.",
            "url": "https://englishspeakers.in/blog",
            "blogPost": POSTS.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "datePublished": new Date(post.date).toISOString(),
              "author": {
                "@type": "Person",
                "name": post.author
              }
            }))
          })
        }}
      />

      <div className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Insights & Strategies</h1>
            <p className="text-xl text-white/50">Expert advice, linguistic strategies, and success stories to accelerate your fluency journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {POSTS.map((post, idx) => (
              <article 
                key={post.slug} 
                className="glass-panel-hover rounded-3xl border border-white/10 flex flex-col group hover:bg-white/10 transition-colors relative overflow-hidden min-h-[360px]"
              >
                {/* Background Image with Ken Burns effect */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover opacity-20 transform scale-100 group-hover:scale-95 transition-transform duration-[1.5s] ease-out mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                </div>

                <div className="relative z-10 flex flex-col h-full p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">{post.category}</span>
                    <div className="flex items-center gap-4 text-xs text-white/50">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-4 leading-snug group-hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1 italic drop-shadow-md">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                     <div className="flex items-center gap-2 text-sm text-white/70">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                           <User className="w-3 h-3 text-white/50" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider">{post.author}</span>
                     </div>
                     <div className="flex items-center relative">
                       <div className="flex items-center gap-2 absolute right-full mr-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                         <button type="button" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#1877F2] flex items-center justify-center transition-colors shadow-lg group/btn" title="Share on Facebook">
                           <Facebook className="w-3.5 h-3.5 text-white/50 group-hover/btn:text-white transition-colors fill-current" />
                         </button>
                         <button type="button" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#1DA1F2] flex items-center justify-center transition-colors shadow-lg group/btn" title="Share on Twitter">
                           <Twitter className="w-3.5 h-3.5 text-white/50 group-hover/btn:text-white transition-colors fill-current" />
                         </button>
                         <button type="button" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0A66C2] flex items-center justify-center transition-colors shadow-lg group/btn" title="Share on LinkedIn">
                           <Linkedin className="w-3.5 h-3.5 text-white/50 group-hover/btn:text-white transition-colors fill-current" />
                         </button>
                       </div>
                       <Link href={`/blog/${post.slug}`} className="text-sm font-bold text-white group-hover:text-blue-400 flex items-center gap-1 transition-colors relative z-20 bg-transparent pl-2 py-1 -ml-2 rounded-md">
                         Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                       </Link>
                     </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* FAQ Schema integration visually matching AEO request */}
          <div className="max-w-3xl mx-auto mt-32">
             <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
             
             <div className="space-y-4">
                {[
                  { q: "What is the best way to learn English speaking in India?", a: "The best method combines active speaking practice, immersive listening to native content, and personalized feedback to neutralize mother tongue influence. Programs like English Speakers' Fluency Master focus exactly on these pillars." },
                  { q: "Can I learn spoken English online effectively?", a: "Yes. Online spoken English courses can be highly effective if they prioritize live interactive sessions over pre-recorded grammar lectures. Real-time conversation is essential for building fluency." }
                ].map((faq, i) => (
                  <div key={i} className="glass-panel p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                     <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-2">
                        <span className="text-blue-500">Q.</span> {faq.q}
                     </h3>
                     <p className="text-white/50 text-sm leading-relaxed pl-6 italic">
                        {faq.a}
                     </p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </>
  );
}
