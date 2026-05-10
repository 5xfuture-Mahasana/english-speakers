import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-[#050505] pt-16 pb-8 mt-24 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex flex-col mb-4 group inline-flex">
              <img
                src="/images/logo-transparent.png"
                alt="English Speakers"
                className="w-[160px] h-auto object-contain mb-1"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-4">
              English Speakers is India's premium online spoken English training platform. Transform your communication skills with expert guidance and modern methodologies.
            </p>
            <p className="text-white/40 text-xs leading-relaxed max-w-xs mt-2">
              Serving students globally and focusing on regional hubs including Hyderabad, Kakinada, Rajahmundry, Visakhapatnam, and Andhra Pradesh for IELTS coaching, CELPIP prep, and English for Telugu Speakers.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 tracking-wide uppercase text-xs">Platform</h4>
            <ul className="space-y-3">
              <li><Link href="/courses" className="text-white/50 hover:text-blue-400 transition-colors text-sm">All Courses</Link></li>
              <li><Link href="/about" className="text-white/50 hover:text-blue-400 transition-colors text-sm">Our Methodology</Link></li>
              <li><Link href="/instructors" className="text-white/50 hover:text-blue-400 transition-colors text-sm">Expert Instructors</Link></li>
              <li><Link href="/pricing" className="text-white/50 hover:text-blue-400 transition-colors text-sm">Pricing Plans</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 tracking-wide uppercase text-xs">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-white/50 hover:text-blue-400 transition-colors text-sm">Learning Blog</Link></li>
              <li><Link href="/tips" className="text-white/50 hover:text-blue-400 transition-colors text-sm">Speaking Tips</Link></li>
              <li><Link href="/faq" className="text-white/50 hover:text-blue-400 transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/contact" className="text-white/50 hover:text-blue-400 transition-colors text-sm">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 tracking-wide uppercase text-xs">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="text-white/50 text-sm">hello@englishspeakers.in</li>
              <li className="text-white/50 text-sm">+91 9849668255</li>
              <li className="text-white/50 text-sm mt-4">
                <strong className="text-white">Headquarters:</strong><br />
                Online Spoken English Institute,<br />
                Serving Pan-India, operating from Hyderabad,<br />
                Andhra Pradesh & Telangana.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} English Speakers. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>

        <div className="border-t border-white/[0.04] mt-6 pt-5 text-center">
          <p className="text-white/20 text-xs tracking-wide">
            Designed &amp; Developed by{' '}
            <a
              href="https://5xfuture.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              5xFuture
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
