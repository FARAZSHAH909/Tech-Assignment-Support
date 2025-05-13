import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <section
        className="bg-gradient-to-br from-blue-200 via-pink-200 to-yellow-200 text-gray-800 py-24 relative overflow-hidden"
        aria-labelledby="services-heading"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.5),transparent_80%)] animate-pulse-slow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1
              id="services-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 animate-neon-glow"
            >
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-4 animate-fade-in">
              Professional technical solutions for your assignments and projects
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Blockchain Service */}
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-500 transform hover:-translate-y-3 backdrop-blur-sm border border-blue-300/30 overflow-hidden group ">
              <div className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white group-hover:text-gray-100 transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 animate-neon-pulse">
                  Blockchain Development
                </h3>
                <p className="text-gray-600 mb-4 text-base leading-relaxed animate-fade-in">
                  Expert solutions for blockchain assignments and projects
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Smart Contract Development",
                    "DApp Creation & Implementation",
                    "Blockchain Architecture Design",
                    "Cryptocurrency Implementation",
                    "Blockchain Research Papers",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mr-2 mt-0.5 group-hover:text-pink-500 transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services/blockchain"
                  className="inline-block bg-gradient-to-r from-blue-400 to-pink-400 text-white font-semibold px-6 py-2 rounded-lg hover:from-blue-500 hover:to-pink-500 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-glow-pulse"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Machine Learning Service (Your Provided Version) */}
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-500 transform hover:-translate-y-3 backdrop-blur-sm border border-blue-300/30 overflow-hidden group">
              <div className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white group-hover:text-gray-100 transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 animate-neon-pulse">
                  Machine Learning
                </h3>
                <p className="text-gray-600 mb-4 text-base leading-relaxed animate-fade-in">
                  Comprehensive support for AI, machine learning, and cyber security projects
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Data Analysis & Preprocessing",
                    "Model Development & Training",
                    "Neural Network Implementation",
                    "Computer Vision Projects",
                    "NLP & Text Analysis",
                    "Cyber Security Solutions",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mr-2 mt-0.5 group-hover:text-pink-500 transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services/machine-learning"
                  className="inline-block bg-gradient-to-r from-blue-400 to-pink-400 text-white font-semibold px-6 py-2 rounded-lg hover:from-blue-500 hover:to-pink-500 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-glow-pulse"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Cyber Security Service */}
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-500 transform hover:-translate-y-3 backdrop-blur-sm border border-blue-300/30 overflow-hidden group">
              <div className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-yellow-400 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white group-hover:text-gray-100 transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2v2c0 1.104.896 2 2 2s2-.896 2-2v-2zm0 0V9c0-3.314-2.686-6-6-6S0 5.686 0 9v6c0 3.314 2.686 6 6 6s6-2.686 6-6v-2zm12 0c0-1.104-.896-2-2-2s-2 .896-2 2v2c0 1.104.896 2 2 2s2-.896 2-2v-2zm0 0V9c0-3.314-2.686-6-6-6s-6 2.686-6 6v6c0 3.314 2.686 6 6 6s6-2.686 6-6v-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 animate-neon-pulse">
                  Cyber Security
                </h3>
                <p className="text-gray-600 mb-4 text-base leading-relaxed animate-fade-in">
                  Robust solutions for securing digital assets and systems
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Penetration Testing",
                    "Threat Analysis & Mitigation",
                    "Secure System Design",
                    "Cryptography Implementation",
                    "Security Audits & Compliance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5 group-hover:text-yellow-500 transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services/cyber-security"
                  className="inline-block bg-gradient-to-r from-green-300 to-yellow-400 text-white font-semibold px-6 py-2 rounded-lg hover:from-green-400 hover:to-yellow-500 transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.3)] hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] animate-glow-pulse"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Tech Tasks Service */}
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-500 transform hover:-translate-y-3 backdrop-blur-sm border border-blue-300/30 overflow-hidden group">
              <div className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-orange-400 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white group-hover:text-gray-100 transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 animate-neon-pulse">
                  Tech Tasks
                </h3>
                <p className="text-gray-600 mb-4 text-base leading-relaxed animate-fade-in">
                  Professional assistance with various technical assignments
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Programming Assignments",
                    "Web & Mobile App Development",
                    "Database Design & Implementation",
                    "Algorithm Development",
                    "Technical Documentation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-purple-500 mr-2 mt-0.5 group-hover:text-orange-500 transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services/tech-tasks"
                  className="inline-block bg-gradient-to-r from-purple-400 to-orange-400 text-white font-semibold px-6 py-2 rounded-lg hover:from-purple-500 hover:to-orange-500 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.3)] hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] animate-glow-pulse"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 animate-neon-glow">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg animate-fade-in">
              We follow a structured approach to ensure high-quality deliverables for all your technical needs
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-pink-400 mx-auto mt-4 rounded-full animate-glow-pulse"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Requirement Analysis",
                description: "We carefully review your project to match it with the right expert based on subject, level, and complexity.",
              },
              {
                step: "2",
                title: "Planning & Design",
                description: "Our experts create the right plan and structure to ensure smooth project development.",
              },
              {
                step: "3",
                title: "Implementation",
                description: "Our experts develop solutions with clean code, best practices, and academic standards, ensuring it’s easy to understand and meets your expectations.",
              },
              {
                step: "4",
                title: "Testing & Delivery",
                description: "We test your solution for accuracy, functionality, and completeness to ensure everything works perfectly. Finally, we deliver your assignment on time, with any required explanations or revisions until you are satisfied.",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="text-center bg-white bg-opacity-90 rounded-2xl shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-500 transform hover:-translate-y-3 backdrop-blur-sm border border-blue-300/30 p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-pink-400 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 animate-neon-pulse">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-base animate-fade-in">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-gradient-to-br from-blue-200 via-pink-200 to-yellow-200 text-gray-800 py-20 relative overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.5),transparent_80%)] animate-pulse-slow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 animate-neon-glow"
            >
              Need Help With Your Technical Project?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
              Contact us today to discuss your requirements and get a customized solution
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-400 to-pink-400 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-500 hover:to-pink-500 transition-all duration-500 transform hover:-translate-y-2 shadow-[0_10px_30px_rgba(59,130,246,0.4)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.6)] focus:outline-none focus:ring-4 focus:ring-blue-300 animate-glow-pulse"
            >
              Get a Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;