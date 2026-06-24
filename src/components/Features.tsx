import React from 'react';

const features = [
  {
    title: 'CBT Examination System',
    tag: 'Our Features',
    items: [
      { heading: 'Remote Examinations', desc: 'Conduct exams securely from anywhere, ensuring academic integrity with advanced monitoring and fraud prevention.' },
      { heading: 'Auto Grading', desc: 'Instantly grade objective questions and reduce manual workload for teachers.' },
      { heading: 'Real Time Monitoring', desc: 'Track student progress and exam activity live during assessments.' },
      { heading: 'Question Randomization', desc: 'Shuffle questions and options automatically to prevent cheating.' },
    ],
    icon: '/cbt-exam.svg',
    mockup: 'exam',
  },
  {
    title: 'Assignment Management',
    items: [
      { heading: 'Digital Distribution', desc: 'Distribute assignments digitally, collect submissions, grade responses, and provide feedback in one place.' },
    ],
    mockup: 'assignment',
    icon: '/assignment.svg',
    reverse: true,
  },
  {
    title: 'Results & Reports',
    items: [
      { heading: 'Comprehensive Reports', desc: 'Generate report cards, transcripts, rankings, GPA summaries, and downloadable academic reports instantly.' },
    ],
    mockup: 'results',
    icon: '/result-report.svg'
  },
  {
    title: 'School Administration',
    items: [
      { heading: 'Centralized Dashboard', desc: 'Manage students, teachers, classes, subjects, attendance, and academic sessions from a centralized dashboard.' },
    ],
    mockup: 'admin',
    icon: '/administrative.svg',
    reverse: true,
  },
];

function ExamMockup() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-4 text-xs">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
        <span className="font-semibold text-navy text-sm">Chemistry</span>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 font-mono">01:59:50</span>
          <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded font-semibold">End Exam</span>
        </div>
      </div>
      <div className="mb-3">
        <p className="text-primary font-semibold mb-2">Question 1</p>
        <p className="text-gray-700 mb-3">If θ = 0.6, what is the value of θ in degrees: 3² + 8 × 90°?</p>
        <div className="grid grid-cols-2 gap-2">
          {['A. 36', 'A. 23', 'A. 38', 'A. 35'].map((opt, i) => (
            <label key={i} className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer ${i === 0 ? 'border-primary bg-primary/5' : 'border-gray-200'}`}>
              <div className={`w-3 h-3 rounded-full border-2 ${i === 0 ? 'border-primary bg-primary' : 'border-gray-300'}`} />
              <span className="text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg text-[10px]">Previous</button>
        <div className="flex gap-1">
          {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => (
            <div key={n} className={`w-5 h-5 rounded text-[9px] flex items-center justify-center font-semibold ${n === 1 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>{n}</div>
          ))}
        </div>
        <button className="bg-primary text-white px-3 py-1.5 rounded-lg text-[10px] font-semibold">Next</button>
      </div>
    </div>
  );
}

function AssignmentMockup() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden text-xs">
      <div className="bg-gray-50 border-b border-gray-100 px-4 py-2 flex items-center justify-between">
        <span className="font-bold text-navy text-sm">Assignments</span>
        <button className="bg-primary text-white text-[10px] px-2 py-1 rounded font-semibold">+ Create Assignment</button>
      </div>
      <div className="p-3 space-y-2">
        {[
          { title: 'Quadratic Equations Problem Set', subject: 'Mathematics', due: '2 days', status: 'Pending', progress: 65 },
          { title: 'Binary Search Tree Implementation', subject: 'Computer Science', due: '4 days', status: 'Active', progress: 80 },
        ].map((a) => (
          <div key={a.title} className="border border-gray-100 rounded-lg p-3">
            <div className="flex justify-between items-start mb-1">
              <p className="font-semibold text-navy">{a.title}</p>
              <span className={`text-[9px] px-2 py-0.5 rounded-full font-semibold ${a.status === 'Pending' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>{a.status}</span>
            </div>
            <p className="text-gray-400 text-[10px] mb-2">{a.subject}</p>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: `${a.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultsMockup() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden text-xs">
      <div className="bg-gray-50 border-b border-gray-100 px-4 py-2">
        <p className="text-[10px] text-gray-400">Results</p>
        <p className="font-bold text-navy">Maths Finals Exam</p>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-2 gap-3 mb-3 text-[10px]">
          <div><span className="text-gray-400">Class</span><p className="font-semibold text-navy">JSS 2C</p></div>
          <div><span className="text-gray-400">Status</span><p className="text-green-600 font-semibold">Published</p></div>
        </div>
        <table className="w-full text-[10px]">
          <thead><tr className="text-gray-400"><th className="text-left pb-1">Student</th><th>Score</th><th>Grade</th><th>Position</th></tr></thead>
          <tbody>
            {[
              { name: 'Jane Doe', score: 92, grade: 'A' },
              { name: 'Jameson Black', score: 86, grade: 'B' },
              { name: 'Nicola Span', score: 78, grade: 'B' },
            ].map((s, i) => (
              <tr key={s.name} className="border-t border-gray-50">
                <td className="py-1.5 font-medium text-navy">{s.name}</td>
                <td className="text-center font-semibold">{s.score}</td>
                <td className="text-center text-primary font-bold">{s.grade}</td>
                <td className="text-center text-gray-400">#{i + 1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AdminMockup() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden text-xs">
      <div className="bg-gray-50 border-b border-gray-100 px-4 py-2 flex items-center justify-between">
        <span className="font-bold text-navy">Staff Profile</span>
        <button className="bg-primary text-white text-[10px] px-2 py-1 rounded font-semibold">Edit Profile</button>
      </div>
      <div className="p-3 flex gap-3">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </div>
        <div>
          <p className="font-bold text-navy">Jane Doe</p>
          <p className="text-gray-400 text-[10px]">Teacher • 9th-10th Grade</p>
          <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-[10px]">
            <div><span className="text-gray-400">Gender:</span> <span className="font-medium">Female</span></div>
            <div><span className="text-gray-400">Nationality:</span> <span className="font-medium">Nigerian</span></div>
            <div><span className="text-gray-400">Subjects:</span> <span className="font-medium">Mathematics, Biology</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mockupMap: Record<string, React.ReactElement> = {
  exam: <ExamMockup />,
  assignment: <AssignmentMockup />,
  results: <ResultsMockup />,
  admin: <AdminMockup />,
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">Our Features</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">Everything You Need</h2>
        </div>

        <div className="space-y-24">
          {features.map(({ title, items, mockup, reverse, icon }) => (
            <div key={title} className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
              {/* Text */}
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy mb-6">{title}</h3>
                <div className="space-y-5">
                  {items.map(({ heading, desc }) => (
                    <div key={heading}>
                      <h4 className="font-bold text-navy mb-1">{heading}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Mockup */}
              <div className="flex-1 w-full max-w-lg">
                {/* {mockupMap[mockup]} */}
                <img src={icon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
