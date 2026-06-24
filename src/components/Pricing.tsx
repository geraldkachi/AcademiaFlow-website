const plans = [
  {
    name: 'Base',
    desc: 'For small schools getting started with CBT.',
    price: '₦25,000',
    features: [
      'Computer-Based Testing (CBT)',
      'Assignment Management',
      'Student & Teacher Portals',
      'Email Support',
      '2 Admin Accounts',
      'Basic Analytics',
    ],
    highlight: false,
    cta: 'Get Started Now',
  },
  {
    name: 'Standard',
    desc: 'Advanced assessment and reporting tools for growing institutions.',
    price: '₦50,000',
    features: [
      'Everything in Starter',
      'Hall Exam Management',
      'Advanced Analytics & Reports',
      'Question Bank',
      'Priority Email Support',
      '5 Admin Accounts',
    ],
    highlight: true,
    cta: 'Get Started Now',
  },
  {
    name: 'Enterprise',
    desc: 'Enterprise infrastructure, support, and controls.',
    price: '₦150,000',
    features: [
      'Everything in Standard',
      'Unlimited Admin Accounts',
      'Dedicated Account Manager',
      'Custom integrations',
      'Custom Feature Development',
      'Training & Onboarding',
    ],
    highlight: false,
    cta: 'Get Started Now',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">Simple, Transparent Pricing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map(({ name, desc, price, features, highlight, cta }) => (
            <div
              key={name}
              className={`rounded-2xl p-6 border ${highlight
                ? 'bg-primary text-white border-primary shadow-xl scale-105 relative'
                : 'bg-white text-navy border-gray-200 shadow-sm'
              }`}
            >
              {highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className={`text-xl font-extrabold mb-1 ${highlight ? 'text-white' : 'text-navy'}`}>{name}</h3>
              <p className={`text-sm mb-6 ${highlight ? 'text-white/80' : 'text-gray-500'}`}>{desc}</p>
              <ul className="space-y-2.5 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg className={`w-4 h-4 shrink-0 mt-0.5 ${highlight ? 'text-white' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className={`text-sm ${highlight ? 'text-white/90' : 'text-gray-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-6">
                <span className={`text-3xl font-extrabold ${highlight ? 'text-white' : 'text-navy'}`}>{price}</span>
                <span className={`text-sm ml-1 ${highlight ? 'text-white/70' : 'text-gray-400'}`}>/month</span>
              </div>
              <a
                href="#contact"
                className={`block text-center font-semibold py-3 px-4 rounded-xl text-sm transition-colors ${
                  highlight
                    ? 'bg-white text-primary hover:bg-gray-50'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
