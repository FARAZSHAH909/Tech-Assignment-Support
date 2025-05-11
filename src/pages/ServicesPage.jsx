
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Professional technical solutions for your assignments and projects
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blockchain Service */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-500 group-hover:text-blue-600 transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Blockchain Development
                </h3>
                <p className="text-gray-600 mb-4">
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
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5 group-hover:text-green-600 transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-block text-blue-500 hover:text-blue-600 font-medium transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Machine Learning Service */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-500 group-hover:text-blue-600 transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 22"
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
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Machine Learning
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive support for AI and machine learning projects
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Data Analysis & Preprocessing",
                    "Model Development & Training",
                    "Neural Network Implementation",
                    "Computer Vision Projects",
                    "NLP & Text Analysis",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5 group-hover:text-green-600 transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-block text-blue-500 hover:text-blue-600 font-medium transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Tech Tasks Service */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-500 group-hover:text-blue-600 transition-colors duration-300"
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
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Tech Tasks
                </h3>
                <p className="text-gray-600 mb-4">
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
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5 group-hover:text-green-600 transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-block text-blue-500 hover:text-blue-600 font-medium transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure high-quality deliverables for all your technical needs
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                description: "Our experts develop solution with clean code, best practices, and academic standards, ensuring it’s easy to understand and meets your expectations.",
              },
              {
                step: "4",
                title: "Testing & Delivery",
                description:`We test your solution for accuracy, functionality, and completeness to ensure everything works perfectly. Finally, we deliver your assignment on time, with any required explanations or revisions until you are satisfied.`

              },
            ].map((process, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl shadow-lg p-9 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help With Your Technical Project?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your requirements and get a customized solution
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
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