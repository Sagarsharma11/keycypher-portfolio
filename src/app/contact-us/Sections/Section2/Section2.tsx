import React from "react";

const Section2 = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 text-center">
      {/* Top Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full p-3 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 0011.314-11.314l-4.243-4.243a4 4 0 00-5.657 5.657z"
                />
              </svg>
            </div>
            <h4 className="font-semibold text-lg">Our Location</h4>
            <p className="text-teal-600 mt-1">
              Jl. Sunset Road No. 99x, Kuta – Bali
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full p-3 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12H8m8 0a8 8 0 11-8 0m8 0V4m0 8a8 8 0 11-8 0"
                />
              </svg>
            </div>
            <h4 className="font-semibold text-lg">Email</h4>
            <p className="text-teal-600 mt-1">support@cytrix.com</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full p-3 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h2l3 7v7a2 2 0 002 2h2m6-18v18m-6 0a6 6 0 016-6h4"
                />
              </svg>
            </div>
            <h4 className="font-semibold text-lg">Phone</h4>
            <p className="text-teal-600 mt-1">+12 345 678 9012</p>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.404927391612!2d115.16770881533315!3d-8.690126393751083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247ad9e3fe8d5%3A0xa7e2ad38be4b5a37!2sJl.%20Sunset%20Road%20No.99x%2C%20Seminyak%2C%20Kec.%20Kuta%2C%20Kabupaten%20Badung%2C%20Bali%2080365%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1625141326010!5m2!1sen!2sid"
          width="100%"
          height="400"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Section2;
