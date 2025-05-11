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
            <p className="text-xl md:text-2xl text-indigo-50 max-w-3xl mx-auto">
               At Tech Assignment Support, we operate with a dedicated core team backed by a network of experienced professionals. Whether you’re an undergraduate, graduate, or working on advanced-level technical projects, our experts are ready to assist you at every stage. From programming and research assignments to complex system designs, we ensure each task is handled with deep domain knowledge, precision, and a commitment to exceeding your expectations. No matter the scale or complexity, we deliver solutions that are timely, clear, and tailored to your academic or professional needs.
            </p>
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