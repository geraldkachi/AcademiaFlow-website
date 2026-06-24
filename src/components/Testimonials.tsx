import { useState } from 'react';

const testimonials = [
  {
    quote: 'AcademiaFlow has revolutionized our academic processes. It\'s incredibly user-friendly and has significantly reduced the time we spend on administrative tasks, allowing us to focus more on our students.',
    name: 'Anthony Mills',
    role: 'School Admin, Springhills',
  },
  {
    quote: 'The CBT examination system is flawless. Our students can now take exams remotely with complete integrity. The auto-grading feature saves our teachers hours every week.',
    name: 'Dr. Sarah Okonkwo',
    role: 'Principal, Westfield Academy',
  },
  {
    quote: 'Setting up classes, subjects, and managing attendance used to take days. With AcademiaFlow, it takes minutes. The platform is intuitive and the support team is always available.',
    name: 'James Adeyemi',
    role: 'IT Administrator, Greenfield School',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block border border-white/30 text-white/80 text-xs font-semibold px-3 py-1 rounded-full mb-10">Testimonials</span>

        <div className="min-h-[160px] flex items-center justify-center">
          <blockquote className="text-white text-lg sm:text-xl font-medium leading-relaxed">
            "{testimonials[current].quote}"
          </blockquote>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {testimonials[current].name.charAt(0)}
          </div>
          <div className="text-left">
            <p className="text-white font-semibold text-sm">{testimonials[current].name}</p>
            <p className="text-white/60 text-xs">{testimonials[current].role}</p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)} className="w-8 h-8 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
            ‹
          </button>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-4' : 'bg-white/40'}`} />
          ))}
          <button onClick={() => setCurrent((c) => (c + 1) % testimonials.length)} className="w-8 h-8 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
