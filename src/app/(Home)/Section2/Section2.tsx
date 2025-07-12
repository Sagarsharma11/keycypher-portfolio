import { FiCheck } from "react-icons/fi";
import { FaSlack, FaGoogle, FaAws, FaMicrosoft, FaDropbox } from "react-icons/fa";

const Section2 = ()=> {
  return (
    <div className="bg-[#f9fbfd] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12 flex flex-col gap-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Heading */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-gray-900">
              Build for all <span className="text-gray-500">sites</span> &amp; platform
            </h2>
          </div>

          {/* Center Description */}
          <div className="flex-1 text-gray-500 text-base">
            <p>
              Lorem ipsum dolor sit amet, consectetur aenean. commodo ligula eget dolor aenean
              massa sociis natoque adipiscing penatibus.
            </p>
          </div>

          {/* Right Stat */}
          <div className="flex flex-col items-center justify-center text-right">
            <p className="text-4xl font-bold text-gray-900 flex items-center gap-1">
              96<span className="text-green-500">+</span>
              <FiCheck className="text-green-500 text-xl" />
            </p>
            <p className="text-gray-500 text-sm">Trusted Company</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200" />

        {/* Logos with Icons */}
        <div className="flex items-center justify-between flex-wrap gap-6 text-gray-500 text-2xl">
          <div className="flex items-center gap-2">
            <FaSlack className="text-pink-500" />
            <span className="text-sm text-gray-800">Blossom</span>
          </div>
          <div className="flex items-center gap-2">
            <FaGoogle className="text-orange-400" />
            <span className="text-sm text-gray-800">ProLine</span>
          </div>
          <div className="flex items-center gap-2">
            <FaAws className="text-blue-500" />
            <span className="text-sm text-gray-800">Network</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMicrosoft className="text-purple-500" />
            <span className="text-sm text-gray-800">HiTech</span>
          </div>
          <div className="flex items-center gap-2 opacity-40">
            <FaDropbox className="text-blue-400" />
            <span className="text-sm text-gray-800">Border</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section2