export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left */}
          <div className="flex-1">
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
              What is AcademiaFlow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4 leading-tight">
              Smarter Assessments<br />for Modern Learning
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              AcademiaFlow simplifies exam management by streamlining everything from exam creation to grading and result publishing, reducing errors while giving admin full control.
            </p>
            <a href="#pricing" className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors text-sm">
              Get Started
            </a>
          </div>

          {/* Right - Image placeholder with students */}
          <div className="flex-1 w-full">
            <img src="/smart-learn.svg" alt="" />
            {/* <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm font-medium">Students taking CBT exams</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 mt-16 pt-12 border-t border-gray-100">
          {[
            { val: '500+', label: 'Schools' },
            { val: '1', label: 'Platform' },
            { val: '50k+', label: 'Active Students' },
            { val: '2M+', label: 'Exams Conducted' },
            { val: '20M+', label: 'Results Processed' },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">{val}</p>
              <p className="text-gray-500 text-xs font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
