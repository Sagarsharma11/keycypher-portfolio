import {
  FaLock,
  FaNetworkWired,
  FaExclamationTriangle,
  FaShieldAlt,
  FaCloud,
  FaMobileAlt,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const features = [
  {
    title: "Data Encryption",
    description:
      "Lorem ipsum dolor sit consectetur elit, sed do eiusmod tempor aliqua incididunt labore. Adipiscing consequat vitae eleifend ac enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a tellus. Phasellus viverra nulla ut metus varius laoreet.",
    icon: <FaLock className="text-xl text-white" />,
    large: true,
  },
  {
    title: "Network Security",
    description: "Lorem ipsum dolor sit elit sed consectetur do eiusmod.",
    icon: <FaNetworkWired className="text-xl text-white" />,
  },
  {
    title: "Spam Scanner",
    description: "Lorem ipsum dolor sit elit sed consectetur do eiusmod.",
    icon: <FaExclamationTriangle className="text-xl text-white" />,
  },
  {
    title: "Blocklist Security",
    description: "Lorem ipsum dolor sit elit sed consectetur do eiusmod.",
    icon: <FaShieldAlt className="text-xl text-white" />,
  },
  {
    title: "Cloud Security",
    description: "Lorem ipsum dolor sit elit sed consectetur do eiusmod.",
    icon: <FaCloud className="text-xl text-white" />,
  },
  {
    title: "Mobile Security",
    description: "Lorem ipsum dolor sit elit sed consectetur do eiusmod.",
    icon: <FaMobileAlt className="text-xl text-white" />,
  },
];

const Section5 = () => {
  return (
    <section className="bg-gradient-to-br from-[#020024] via-[#090979] to-[#00042c] text-white py-20 px-6 rounded-[2rem] relative overflow-hidden">
      {/* Glow Dots Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50 blur-sm animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Safeguarding Your <span className="text-cyan-400">Cyberspace</span>, <br />
          Securing Your <span className="text-gray-400">Digital Life</span>
        </h2>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`bg-[#112240] bg-opacity-80 backdrop-blur-md p-6 rounded-xl flex flex-col justify-between transition-all hover:bg-opacity-90 ${
                feature.large ? "lg:row-span-2" : ""
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="w-12 h-12 flex items-center justify-center bg-black/30 rounded-full">
                  {feature.icon}
                </div>
                <button className="flex items-center gap-2 text-sm text-white border-b border-white hover:text-cyan-300">
                  Learn More <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-10">
          <p className="text-sm text-gray-400">
            Check out all our services{" "}
            <button className="text-white font-semibold inline-flex items-center gap-1 hover:text-cyan-300">
              View More <FiArrowRight />
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section5;
