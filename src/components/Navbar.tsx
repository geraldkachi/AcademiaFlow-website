import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <img src="/head-logo.svg" alt="AcademiaFlow Logo" />
          {/* <div className="flex items-center gap-2">
            <div className="flex flex-col gap-[2px]">
              <div className="flex gap-[3px]">
                <span className="block w-2 h-1 bg-primary rounded-full" />
                <span className="block w-2 h-1 bg-primary rounded-full" />
              </div>
              <div className="flex gap-[3px]">
                <span className="block w-2 h-1 bg-primary rounded-full" />
                <span className="block w-2 h-1 bg-primary rounded-full" />
              </div>
            </div>
            <span className="text-navy font-bold text-lg tracking-tight">AcademiaFlow</span>
          </div> */}

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-primary text-sm font-medium transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-gray-700 text-sm font-medium hover:text-primary transition-colors">Sign In</a>
            <a href="#pricing" className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600">
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-3">
            {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="text-gray-600 hover:text-primary text-sm font-medium px-2 py-1 transition-colors">
                {item}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
              <a href="#" className="text-gray-700 text-sm font-medium px-2 py-1">Sign In</a>
              <a href="#pricing" className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg text-center">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
