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
          <img src="/hero.svg" alt="hero" />
        </div>
      </div>
    </section>
  );
}
