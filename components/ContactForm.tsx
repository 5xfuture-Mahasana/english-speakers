'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const COURSES = [
  'IELTS Coaching',
  'CELPIP Training',
  'Basic to Advanced English',
  'English in 40 Days',
  'English for Telugu Speakers',
  'Business English',
  'Workplace English',
  'BIOLINGO Program',
  'Writing Skills',
  'Phonetics',
  'English Literature (M.A.)',
  'Teaching for Success',
  'Phonics & Speaking Skills (Kids)',
  'Other / Not Sure'
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', phone: '', email: '', course: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  if (isSuccess) {
    return (
      <div className="p-10 rounded-[2rem] glass-panel bg-white/5 border border-white/10 text-center flex flex-col items-center justify-center min-h-[400px] animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Request Sent Successfully!</h3>
        <p className="text-white/60 text-lg">Thank you for reaching out. Our team will contact you shortly to help you with the next steps.</p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-8 px-8 py-3 rounded-full border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 md:p-10 rounded-[2rem] glass-panel bg-[#0a0a0a]/80 border border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold text-white/80">Full Name *</label>
            <input 
              type="text" 
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium"
              placeholder="John Doe"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-bold text-white/80">Phone Number *</label>
            <input 
              type="tel" 
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium"
              placeholder="+91 9849668255"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-bold text-white/80">Email Address *</label>
          <input 
            type="email" 
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="course" className="text-sm font-bold text-white/80">Course Interested *</label>
          <div className="relative">
            <select
              id="course"
              required
              value={formData.course}
              onChange={(e) => setFormData({...formData, course: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium"
            >
              <option value="" disabled className="bg-[#0f0f0f]">Select a course</option>
              {COURSES.map(course => (
                <option key={course} value={course} className="bg-[#0f0f0f]">{course}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-bold text-white/80">Message (Optional)</label>
          <textarea 
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none font-medium"
            placeholder="Tell us about your goals..."
          ></textarea>
        </div>
        
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-blue-600 hover:bg-blue-500 text-white px-8 py-5 text-lg font-bold transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">Processing <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div></span>
          ) : (
            <span className="flex items-center gap-2">Submit Inquiry <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
          )}
        </button>
      </form>
    </div>
  );
}
