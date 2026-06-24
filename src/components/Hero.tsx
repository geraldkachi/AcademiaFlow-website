export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero text */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-tight mb-4">
            Revolutionizing<br />Academic Assessment
          </h1>
          <p className="text-gray-500 text-base sm:text-lg mb-8 leading-relaxed">
            AcademiaFlow streamlines academic assessments, automates grading, and delivers results through a secure platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#pricing" className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors text-sm">
              Start Free Trial
            </a>
            <a href="#features" className="border border-gray-200 text-navy font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              Watch Demo
            </a>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-4xl mx-auto">
          <div className="border-2 border-primary/20 rounded-2xl overflow-hidden shadow-2xl bg-white">
            {/* Browser bar */}
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1 text-xs text-gray-400 text-center border border-gray-200">
                app.academiaflow.com
              </div>
            </div>

            {/* Dashboard UI */}
            <div className="flex text-xs min-h-[400px]">
              {/* Sidebar */}
              <div className="w-36 sm:w-44 bg-white border-r border-gray-100 p-3 flex flex-col gap-1 shrink-0">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <span className="font-bold text-navy text-xs">AcademiaFlow</span>
                </div>
                {['Dashboard', 'Exams', 'Assignments', 'Results', 'Subjects'].map((item, i) => (
                  <div key={item} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] font-medium ${i === 0 ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-50'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-white' : 'bg-gray-300'}`} />
                    {item}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 bg-gray-50 overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[10px] text-gray-400">Hello,</p>
                    <p className="font-bold text-navy text-sm">John Doe</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary text-[10px] font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      Spring Hills Academy
                    </div>
                    <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white text-[10px] font-bold">JD</div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[
                    { icon: '📋', val: '4', label: 'Upcoming Exams', color: 'bg-blue-50 text-blue-600' },
                    { icon: '⏰', val: '5', label: 'Pending Assignments', color: 'bg-orange-50 text-orange-600' },
                    { icon: '📚', val: '12', label: 'Total Subjects', color: 'bg-purple-50 text-purple-600' },
                    { icon: '✅', val: '91%', label: 'Average Score', color: 'bg-green-50 text-green-600' },
                  ].map(({ val, label, color }) => (
                    <div key={label} className="bg-white rounded-xl p-2 text-center shadow-sm">
                      <p className={`text-sm font-bold ${color.split(' ')[1]}`}>{val}</p>
                      <p className="text-[9px] text-gray-400 leading-tight mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Exam Card */}
                <div className="bg-white rounded-xl p-3 shadow-sm mb-3">
                  <p className="text-[10px] text-gray-400 mb-2 font-medium">Upcoming Exam</p>
                  <p className="font-bold text-navy text-sm text-primary">Mid Term Test</p>
                  <p className="text-[10px] text-gray-500 mb-2">Chemistry</p>
                  <div className="flex gap-4 text-[10px] text-gray-500">
                    <span>📅 20th Jan 2026</span>
                    <span>⏰ 9:00AM</span>
                    <span>⏱ 120 Mins</span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div>
                  <p className="text-[10px] text-gray-400 mb-2 font-medium">Quick Actions</p>
                  <div className="grid grid-cols-4 gap-1.5">
                    {['Exams', 'Assignments', 'Results', 'Schedule'].map((action) => (
                      <div key={action} className="bg-primary/10 text-primary text-[10px] font-semibold py-1.5 rounded-lg text-center cursor-pointer hover:bg-primary hover:text-white transition-colors">
                        {action}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative blobs */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
