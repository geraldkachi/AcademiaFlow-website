export function CTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-8 p-10 lg:p-12">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4 leading-tight">
                Ready to Transform<br />Your Institution?
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Join thousands of educators who trust AcademiaFlow for their examination management needs.
              </p>
              <a href="#pricing" className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors text-sm">
                Start Free Trial
              </a>
            </div>
            {/* Mini dashboard preview */}
            <div className="flex-1 w-full max-w-sm">
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-3 text-xs">
                <div className="bg-white rounded-xl p-3 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 bg-primary rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                    <span className="font-bold text-navy text-sm">AcademiaFlow</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 mb-3">
                    {['4 Exams', '5 Tasks', '12 Subjects', '91% Avg'].map((s) => (
                      <div key={s} className="bg-primary/5 rounded-lg p-1.5 text-center">
                        <p className="text-[9px] text-primary font-semibold leading-tight">{s}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-primary/5 rounded-lg p-2">
                    <p className="text-[10px] text-gray-400">Next Exam</p>
                    <p className="font-bold text-primary text-sm">Mid Term Test</p>
                    <p className="text-[10px] text-gray-500">Chemistry • 20th Jan 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              {/* <div className="flex flex-col gap-[2px]">
                <div className="flex gap-[3px]">
                  <span className="block w-2 h-1 bg-white rounded-full" />
                  <span className="block w-2 h-1 bg-white rounded-full" />
                </div>
                <div className="flex gap-[3px]">
                  <span className="block w-2 h-1 bg-white rounded-full" />
                  <span className="block w-2 h-1 bg-white rounded-full" />
                </div>
              </div> */}
              <img src="/footer-logo.svg" alt="" />
              {/* <span className="text-white font-bold text-lg">AcademiaFlow</span> */}
            </div>
            <p className="text-white/60 text-xs leading-relaxed">Revolutionizing</p>
            <p className="text-white/60 text-xs leading-relaxed">Academic Assessment</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Testimonials'].map((link) => (
                <li key={link}><a href={`#${link.toLowerCase()}`} className="text-white/60 text-xs hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-2">
              {['Help Center', 'Contact Us', 'FAQ'].map((link) => (
                <li key={link}><a href="#" className="text-white/60 text-xs hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}><a href="#" className="text-white/60 text-xs hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">© 2026 AcademiaFlow. All rights reserved.</p>
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
              { label: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
              { label: 'Instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11a1 1 0 011 1v11a1 1 0 01-1 1h-11a1 1 0 01-1-1v-11a1 1 0 011-1z' },
            ].map(({ label, path }) => (
              <a key={label} href="#" aria-label={label} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={path} />
                </svg>
              </a>
            ))}
            <a href="#" aria-label="X" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="text-white text-xs font-bold">𝕏</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
