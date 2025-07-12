import { FaShieldAlt, FaExclamationTriangle, FaSearch } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    title: "Malware Scanner",
    description:
      "Lorem ipsum dolor sit consectetur elit, sed do eiusmod tempor aliqua incididunt labore adipiscing.",
    icon: <FaShieldAlt className="text-xl text-white" />,
    bg: "bg-gradient-to-b from-blue-800 to-blue-900 text-white",
  },
  {
    title: "Blocklist Status",
    description:
      "Lorem ipsum dolor sit consectetur elit, sed do eiusmod tempor aliqua incididunt labore adipiscing.",
    icon: <FaExclamationTriangle className="text-xl text-white" />,
    bg: "bg-white text-gray-900",
  },
  {
    title: "Spam Scanner",
    description:
      "Lorem ipsum dolor sit consectetur elit, sed do eiusmod tempor aliqua incididunt labore adipiscing.",
    icon: <FaSearch className="text-xl text-white" />,
    bg: "bg-white text-gray-900",
  },
];

const Section4 = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-[#f9fbfd]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-3xl p-6 flex flex-col justify-between min-h-[350px] transition duration-300 hover:bg-[#1E419A] 
                hover:text-white shadow-md ${service.bg}`}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-sm text-inherit">{service.description}</p>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <div className="w-14 h-14 rounded-full bg-[#182857] flex items-center justify-center">
                {service.icon}
              </div>
              <button className="flex items-center gap-2 font-semibold text-inherit border-b border-current hover:opacity-80
              cursor-pointer
              ">
                Learn More <FiArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section4;
