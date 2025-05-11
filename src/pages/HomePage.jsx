import { Link } from "react-router-dom";
import { memo } from "react";

// Reusable Section Header Component
const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-20 relative z-10">
    <h2 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 animate-neon-glow">
      {title}
    </h2>
    {subtitle && (
      <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto mt-6 leading-relaxed animate-slide-up">
        {subtitle}
      </p>
    )}
    <div className="w-36 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mt-8 rounded-full animate-pulse-neon"></div>
  </div>
);

// Reusable Stat Card Component
const StatCard = memo(({ stat, index }) => (
  <div
    key={index}
    className="relative bg-gray-900 bg-opacity-80 p-8 rounded-2xl shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-500 transform hover:-translate-y-3 backdrop-blur-lg border border-cyan-500/30"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 opacity-0 hover:opacity-40 transition-opacity duration-500 rounded-2xl"></div>
    <div className="relative text-cyan-400 font-extrabold text-3xl mb-4 tracking-wider animate-glitch">
      {stat.value}
    </div>
    <div className="relative text-gray-300 font-medium text-lg">{stat.label}</div>
  </div>
));

// Reusable Service Card Component
const ServiceCard = memo(({ service, index }) => (
  <div
    key={index}
    className="relative bg-gray-900 bg-opacity-70 p-10 rounded-2xl shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all duration-500 transform hover:-translate-y-4 backdrop-blur-lg border border-cyan-500/40 group overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-pink-500/30 opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl"></div>
    <div className="relative w-20 h-20 bg-gradient-to-br from-cyan-600 to-pink-600 rounded-full flex items-center justify-center mb-8 mx-auto transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
      {service.icon}
    </div>
    <h3 className="relative text-2xl font-bold text-center mb-4 text-white animate-slide-up">
      {service.title}
    </h3>
    <p className="relative text-gray-300 text-center leading-relaxed animate-slide-up">
      {service.description}
    </p>
  </div>
));

// Main HomePage Component
const HomePage = () => {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Blockchain Development",
      description: "Smart contracts, DApps, and blockchain architecture solutions for your projects",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
      title: "Machine Learning",
      description: "Data analysis, model development, and AI implementation for your research needs",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Tech Tasks",
      description: "Programming assignments, software development, and technical problem-solving",
    },
  ];

  const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "10+", label: "Expert Team Members" },
  ];

  return (
    <div className="bg-gray-950 relative overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-cyan-950 to-pink-950 text-white py-36 overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.2),transparent_80%)] animate-pulse-slow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-10 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 animate-neon-glow"
            >
             Get Expert Help with Your Technical Assignments
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-200 mb-12 max-w-5xl mx-auto leading-relaxed animate-slide-up">
              We provide high-quality, plagiarism-free solutions for Computer Science students from beginner to advanced level.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold px-12 py-5 rounded-xl hover:from-cyan-600 hover:to-pink-600 transition-all duration-500 transform hover:-translate-y-2 shadow-[0_10px_30px_rgba(34,211,238,0.6)] hover:shadow-[0_15px_40px_rgba(34,211,238,0.8)] focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50 animate-neon-pulse"
            >
              Get a Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-28 bg-gray-900 relative" aria-labelledby="about-heading">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="About Tech Assignment Support" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <img
                src="/home-page-img.jpeg"
                alt="Tech Assignment Team"
                className="rounded-2xl shadow-[0_0_25px_rgba(34,211,238,0.4)] w-full transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] object-cover h-96 md:h-auto"
                loading="lazy"
                onError={(e) => (e.target.src = "/fallback-image.jpg")}
              />
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                aria-hidden="true"
              ></div>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 animate-neon-glow">
               Your Trusted Partner for Technical Excellence
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg animate-slide-up">
               Tech Assignment Support is a team of dedicated professionals specializing in providing top-quality technical assignment support. We help students, researchers, and even businesses solve complex problems in blockchain, machine learning, web development, and many other CS domains.
              </p>
              <p className="text-gray-300 mb-10 leading-relaxed text-lg animate-slide-up">
                Whether you're in school, college, or university, we’re here to support you with programming tasks, data structures, database systems, software engineering, and more. Our solutions are well-explained, plagiarism-free, and always delivered on time.”
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <StatCard key={index} stat={stat} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-28 bg-gray-950 relative" aria-labelledby="services-heading">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Our Services"
            subtitle="Elite support for a wide range of technical assignments and projects"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/services"
              className="inline-block bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold px-12 py-5 rounded-xl hover:from-cyan-600 hover:to-pink-600 transition-all duration-500 transform hover:-translate-y-2 shadow-[0_10px_30px_rgba(34,211,238,0.6)] hover:shadow-[0_15px_40px_rgba(34,211,238,0.8)] focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50 animate-neon-pulse"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-cyan-950 to-pink-950 text-white py-28 overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.2),transparent_80%)] animate-pulse-slow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2
              id="cta-heading"
              className="text-5xl sm:text-6xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 animate-neon-glow"
            >
              Ready to Dominate?
            </h2>
            <p className="text-2xl sm:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Let us crush your technical challenges while you conquer your goals.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold px-12 py-5 rounded-xl hover:from-cyan-600 hover:to-pink-600 transition-all duration-500 transform hover:-translate-y-2 shadow-[0_10px_30px_rgba(34,211,238,0.6)] hover:shadow-[0_15px_40px_rgba(34,211,238,0.8)] focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50 animate-neon-pulse"
            >
              Get a Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(HomePage);