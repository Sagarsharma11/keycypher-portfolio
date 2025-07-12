const Section3 = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Side */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold text-gray-900">About Us</h3>
        </div>

        {/* Right Side */}
        <div className="md:col-span-2">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            One–Stop Solution for{" "}
            <span className="bg-gradient-to-r from-black via-gray-700 to-gray-300 bg-clip-text text-transparent">
              Unmatched Protection
            </span>
          </h2>

          <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-2xl">
            Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim justo rhoncus ut
            imperdiet a venenatis vitae justo. Nullam dictum felis eu pede mollis pretium integer
            tincidunt cras dapibus vivamus elementum semper nisi aenean.
          </p>

          <div className="mt-8">
            <button className="px-8 py-3 text-black font-semibold rounded-full shadow-md transition-all bg-gradient-to-r from-cyan-400 to-yellow-300 hover:from-cyan-300 hover:to-yellow-200">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
