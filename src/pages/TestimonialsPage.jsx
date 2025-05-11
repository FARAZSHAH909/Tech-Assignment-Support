import React from "react";
import { Link } from "react-router-dom";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "John Smith",
      company: "TechStart Inc.",
      position: "CTO",
      content:
        "RSP Champion delivered an exceptional blockchain solution for our startup. Their expertise and attention to detail were impressive, and they completed the project ahead of schedule. We'll definitely work with them again for future projects.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Emily Rodriguez",
      company: "DataScience Pro",
      position: "Research Lead",
      content:
        "The machine learning model developed by RSP Champion exceeded our expectations. Their team took the time to understand our specific requirements and delivered a solution that significantly improved our data analysis capabilities.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Michael Chen",
      company: "EduTech Solutions",
      position: "Project Manager",
      content:
        "We've worked with RSP Champion on multiple technical assignments, and they consistently deliver high-quality work. Their team is responsive, professional, and technically proficient. I highly recommend their services.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide animate-fade-in">
              Voices of Success
            </h1>
            <p className="text-xl md:text-2xl text-indigo-200 max-w-3xl mx-auto">
              Hear from those who've partnered with RSP Champion to achieve extraordinary results
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-16 w-16 rounded-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-500 transition-transform duration-300 hover:scale-125"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-sm italic mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-indigo-600 text-sm">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Our Proven Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Metrics that showcase our dedication to driving client success
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "100+", label: "Projects Delivered" },
              { value: "95%", label: "Satisfaction Rate" },
              { value: "30+", label: "Long-Term Partners" },
              { value: "4", label: "Years of Innovation" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-700 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Success Stories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Transformative Journeys
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how we've empowered businesses with innovative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Revolutionizing Finance",
                description:
                  "Partnered with TechStart Inc. to build a secure blockchain platform, reducing transaction costs by 40% and boosting efficiency.",
                icon: (
                  <svg
                    className="h-10 w-10 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-4m6 4l-3 9m0 0a5.002 5.002 0 006.001 0M18 7l3-1"
                    />
                  </svg>
                ),
              },
              {
                title: "Advancing Research",
                description:
                  "Developed a custom ML model for DataScience Pro, enhancing data processing speed by 60% and enabling breakthrough insights.",
                icon: (
                  <svg
                    className="h-10 w-10 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Empowering Education",
                description:
                  "Created scalable solutions for EduTech Solutions, improving user engagement by 50% and streamlining operations.",
                icon: (
                  <svg
                    className="h-10 w-10 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {story.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className=" sottoscrivi max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-indigo-200 mb-10 max-w-3xl mx-auto">
              Partner with us to transform your vision into reality with innovative, tailored solutions.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-indigo-900 font-bold px-10 py-4 rounded-full hover:bg-indigo-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300"
              aria-label="Contact us to start your project"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;