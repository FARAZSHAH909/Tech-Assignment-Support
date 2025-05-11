import { Link } from "react-router-dom";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Dr. Alex Johnson",
      role: "Blockchain Lead",
      bio: "Ph.D. in Computer Science with 8+ years of experience in blockchain technology and smart contract development.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Chen",
      role: "Machine Learning Expert",
      bio: "Master's in AI with expertise in neural networks and deep learning. Previously worked at leading tech companies.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      role: "Full Stack Developer",
      bio: "Senior developer with extensive experience in web and mobile application development across multiple platforms.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Williams",
      role: "Project Manager",
      bio: "Certified project manager with a background in computer science. Ensures timely delivery of all client projects.",
      image: "/placeholder.svg?height=300&width=300",
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
              Meet Our Innovators
            </h1>
            <p className="text-xl md:text-2xl text-indigo-200 max-w-3xl mx-auto">
              Discover the brilliant minds driving RSP Champion's cutting-edge solutions
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative group">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                  <div className="mt-5 flex space-x-4">
                    {[
                      {
                        platform: "Facebook",
                        icon: (
                          <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ),
                      },
                      {
                        platform: "Twitter",
                        icon: (
                          <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        ),
                      },
                      {
                        platform: "LinkedIn",
                        icon: (
                          <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ),
                      },
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                        aria-label={`Follow ${member.name} on ${social.platform}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Our Innovation Pillars
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The foundation behind every solution we deliver.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                title: "Innovation",
                description:
                  "We embrace creativity and cutting-edge technologies to craft smart, forward-thinking solutions.",
              },
              {
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Impact",
                description:
                  "Our work drives results helping clients succeed academically and professionally through meaningful outcomes.",
              },
              {
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
                title: "Passion",
                description:
                  "Fueled by a love for technology and learning, we go the extra mile to exceed expectations every time.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-5 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-center text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Shape the Future with Us
            </h2>
            <p className="text-xl text-indigo-200 mb-10 max-w-3xl mx-auto">
              At Tech Assignment Support, our expert team is at the heart of every solution we deliver. With deep technical knowledge and a passion for innovation, we work together to solve complex challenges and support clients across all education levels. We're not just completing assignments. We're building the future of tech, one solution at a time.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-indigo-900 font-bold px-10 py-4 rounded-full hover:bg-indigo-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;