import { useState } from 'react';

const faqs = [
  {
    q: 'What Is Academia Flow',
    a: 'AcademiaFlow is a comprehensive platform designed to streamline academic processes for schools. It offers tools for creating and managing exams, grading assignments, generating report cards, and tracking student performance. AcademiaFlow helps educators save time, reduce errors, and improve student outcomes.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes! We offer a 14-day free trial on all plans. No credit card required. You can explore all features and decide which plan suits your institution best before committing.',
  },
  {
    q: 'What happens if I exceed my student limit?',
    a: 'If you exceed your plan\'s student limit, you\'ll be notified and given the option to upgrade to a higher plan. Students will not lose access immediately — you\'ll have a 7-day grace period to upgrade.',
  },
  {
    q: 'Can I change plans later?',
    a: 'Absolutely. You can upgrade or downgrade your plan at any time from the billing settings. Upgrades take effect immediately, while downgrades apply at the next billing cycle.',
  },
  {
    q: 'Is my data secure?',
    a: 'Security is our top priority. AcademiaFlow uses bank-level encryption, regular security audits, and complies with industry data protection standards. All exam data and student records are stored securely in the cloud.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">Frequently Asked Questions</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto">
          {/* Questions list */}
          <div className="lg:w-2/5 space-y-2">
            {faqs.map(({ q }, i) => (
              <button
                key={q}
                onClick={() => setOpen(i)}
                className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                  open === i
                    ? 'bg-primary/5 border-primary/20 text-primary'
                    : 'border-gray-100 text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${open === i ? 'bg-primary' : 'bg-gray-200'}`} />
                  {q}
                </div>
                <svg className={`w-4 h-4 shrink-0 transition-transform ${open === i ? 'rotate-180 text-primary' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>

          {/* Answer */}
          <div className="flex-1 bg-primary/5 rounded-2xl p-6">
            <h3 className="font-bold text-navy text-lg mb-3">{faqs[open].q}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{faqs[open].a}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
