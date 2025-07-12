import React from "react";

const Section1 = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row">
                {/* Left: Form */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">
                        We’d Love to <span className="text-gray-400">Help</span>
                    </h2>
                    <p className="text-sm text-gray-600 mb-6">
                        Our friendly team would love to hear from you.
                    </p>

                    <form className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="First name"
                                className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none"
                        />

                        <textarea
                            rows={4}
                            placeholder="Leave us a message"
                            className="w-full rounded-xl border border-gray-300 px-4 py-2 resize-none focus:outline-none"
                        ></textarea>

                        <div className="flex justify-between items-center">

                            <label className="inline-flex items-start gap-2 text-sm text-gray-600">
                                <input type="checkbox" className="mt-1" />
                                You agree to our friendly{" "}
                                <span className="text-teal-500 underline cursor-pointer">
                                    privacy policy
                                </span>
                            </label>

                            <button
                                type="submit"
                                className="rounded-full bg-gradient-to-r from-[#00f2c3] to-[#f8e71c] px-6 py-2 text-sm font-semibold shadow-md hover:scale-105 transition"
                            >
                                Send Message
                            </button>

                        </div>
                    </form>
                </div>

                {/* Right: Image Card */}
                <div className="w-full md:w-1/2 bg-black text-white relative flex flex-col justify-end p-6">
                    <img
                        src="/assets/images/contact-us.jpg" // Replace with actual path or Next.js Image component
                        alt="Sales manager"
                        className="absolute inset-0 object-cover w-full h-full z-0"
                    />
                    <div className="relative z-10 bg-black/60 p-6 rounded-2xl">
                        <p className="text-sm font-medium mb-4">
                            “Our mission is to empower individuals and organizations to
                            navigate the digital world with confidence and peace of mind.”
                        </p>
                        <div>
                            <p className="font-semibold">Natalie Doe</p>
                            <p className="text-xs">Sales Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;
