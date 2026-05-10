import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact English Speakers | Spoken English Course India',
  description: 'Contact English Speakers for spoken English training and IELTS coaching. Book your free demo class today.',
  keywords: 'Spoken English course contact, IELTS coaching contact India, English Speakers contact, learn english query',
  openGraph: {
    title: 'Contact English Speakers | Spoken English Course India',
    description: 'Contact English Speakers for spoken English training and IELTS coaching. Book your free demo class today.',
  }
};

const FAQS = [
  { q: "How to join the course?", a: "You can click on the 'Book Free Demo' button to schedule a trial class with our experts or reach out to us directly via WhatsApp." },
  { q: "Is the demo class free?", a: "Yes, our introductory demo class is completely free of charge. It helps us assess your level and helps you understand our teaching methodology." },
  { q: "Do you offer online classes?", a: "Absolutely! All our classes are conducted live online, ensuring interactive, face-to-face learning from the comfort of your home." },
  { q: "What is the batch size?", a: "We maintain small batch sizes to ensure personalized attention for every student, with special 1-on-1 sessions for advanced speaking practice." }
];

export default function ContactPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="min-h-screen pt-24 bg-[#050505] text-slate-300 selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Touch</span>
          </h1>
          <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Start your journey to confident English speaking today. Contact us for a free demo.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link
                href="https://wa.me/919849668255?text=Hello%20English%20Speakers%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Spoken%20English%20and%20IELTS%20courses."
                target="_blank"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all flex items-center gap-3 group w-full sm:w-auto justify-center"
              >
                Book Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
             <Link
                href="https://wa.me/919849668255?text=Hello%20English%20Speakers%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Spoken%20English%20and%20IELTS%20courses."
                target="_blank"
                className="px-8 py-4 bg-[#0a0a0a]/80 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3 w-full sm:w-auto justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
                Chat on WhatsApp
             </Link>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-start">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white tracking-tight">Send us a Message</h2>
                <div className="space-y-4 text-white/60 text-lg leading-relaxed max-w-2xl">
                  <p>
                    Have questions about our online spoken English classes, IELTS coaching, or professional English courses? Fill out the form below, and our expert counseling team will get back to you shortly.
                  </p>
                  <p>
                    Need an immediate response? We offer <strong>WhatsApp support for Spoken English courses</strong> and <strong>instant IELTS course inquiry</strong>. Message us directly for <strong>quick English training support</strong> and <strong>fast student assistance</strong>.
                  </p>
                  <p>
                    Whether you are a student from Hyderabad, a working professional in Visakhapatnam, or an abroad aspirant in Kakinada or Rajahmundry, our online training platform brings the classroom directly to your screen with interactive live sessions.
                  </p>
                </div>
              </div>

              {/* Form Component */}
              <ContactForm />
            </div>

            {/* Right: Contact Details & Map */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <div className="p-8 rounded-[2rem] glass-panel bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white/50 mb-2 uppercase tracking-wide">Email Us</p>
                      <a href="mailto:hello@englishspeakers.in" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">hello@englishspeakers.in</a>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-[2rem] glass-panel bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 shrink-0 group-hover:scale-110 group-hover:bg-green-500/20 transition-all">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white/50 mb-2 uppercase tracking-wide">Call Us / WhatsApp</p>
                      <a href="tel:+919849668255" className="text-xl font-bold text-white hover:text-green-400 transition-colors">+91 9849668255</a>
                      <p className="text-white/50 text-xs mt-1">Get instant guidance from our course experts directly on WhatsApp.</p>
                    </div>
                  </div>
                  <Link
                    href="https://wa.me/919849668255?text=Hello%20English%20Speakers%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Spoken%20English%20and%20IELTS%20courses."
                    target="_blank"
                    className="inline-flex flex-center items-center justify-center w-full gap-2 px-6 py-4 bg-green-600/10 text-green-400 rounded-full hover:bg-green-600/20 transition-colors border border-green-500/20 font-bold"
                  >
                    <MessageCircle className="w-5 h-5" /> Chat with us instantly
                  </Link>
                </div>

                <div className="p-8 rounded-[2rem] glass-panel bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 shrink-0 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white/50 mb-2 uppercase tracking-wide">Visit Us</p>
                      <p className="text-lg font-medium text-white leading-relaxed">
                        Online Spoken English Institute<br />
                        Serving Hyderabad, Visakhapatnam, Rajahmundry, Kakinada & Across Andhra Pradesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="w-full h-56 md:h-[300px] rounded-[2rem] overflow-hidden border border-white/10 relative group">
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale contrast-125 opacity-80 group-hover:filter-none group-hover:opacity-100 transition-all duration-700 w-full h-full"
                ></iframe>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-[#0a0a0a] border-t border-white/5 relative">
         <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight">Frequently Asked Questions</h2>
            <div className="grid gap-6">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="p-5 md:p-8 rounded-3xl glass-panel bg-[#0f0f0f] border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-start gap-4">
                     <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400 text-sm mt-0.5">
                        {idx + 1}
                     </span>
                     {faq.q}
                  </h4>
                  <p className="text-white/60 leading-relaxed text-base md:text-lg pl-12">{faq.a}</p>
                </div>
              ))}
            </div>
         </div>
      </section>
    </div>
  );
}
