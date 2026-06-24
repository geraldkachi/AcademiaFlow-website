const users = [
  {
    role: 'School Admins',
    desc: 'A single dashboard to manage students, staff, subscriptions, exams, attendance, and academic records.',
    icon: "/who-1.svg",
  },
  {
    role: 'Teachers',
    desc: 'Create exams and assignments, monitor submissions, grade assessments, and track student performance.',
    icon: "/who-2.svg",
  },
  {
    role: 'Students',
    desc: 'Take exams, submit assignments, check results, and stay updated with schedules and announcements.',
    icon: "/who-3.svg",
  },
];

const benefits = [
  'Reduce administrative workload by 60%',
  'Automate grading and result processing',
  'Secure exam hall management',
  'Comprehensive student performance tracking',
  'Cloud-based access from anywhere',
  '24/7 technical support',
];

export default function WhoItsFor() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who It's For */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">Who It's for</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">There is Something for Everyone</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
          {users.map(({ role, desc, icon }) => (
            <div key={role} className="bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow">
              <img src={icon} alt={role} className="mb-4" />
              <h3 className="font-bold text-navy text-lg mb-2">{role}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">Benefits</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-6">Why Choose AcademiaFlow</h2>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full">
            <img src="/benefits-img.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
