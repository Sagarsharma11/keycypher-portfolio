import { FaCheck } from "react-icons/fa";

const plans = [
    {
        name: "Basic",
        price: 99,
        description: "Nullam dictum felis eu pede mollis integer tincidunt cras dapibus.",
        features: [
            "Regular software updates",
            "Antivirus and anti-malware",
            "Email security and spam filtering",
            "Firewall setup and configuration",
        ],
        popular: false,
    },
    {
        name: "Premium",
        price: 199,
        description: "Nullam dictum felis eu pede mollis integer tincidunt cras dapibus.",
        features: [
            "Regular software updates",
            "Antivirus and anti-malware",
            "Email security and spam filtering",
            "Firewall setup and configuration",
        ],
        popular: true,
    },
    {
        name: "Vulnerability",
        price: 399,
        description: "Nullam dictum felis eu pede mollis integer tincidunt cras dapibus.",
        features: [
            "Regular software updates",
            "Antivirus and anti-malware",
            "Email security and spam filtering",
            "Firewall setup and configuration",
        ],
        popular: false,
    },
];

const Section6 = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-16">
                    Invest Once, <span className="text-cyan-500">Reap Benefits</span>{" "}
                    <span className="text-gray-500">Forever</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`cursor-pointer rounded-2xl p-8 shadow-xl border transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${plan.popular ? "border-cyan-400" : "border-transparent"
                                }`}
                        >
                            <div className="text-left">
                                <h3 className="text-2xl font-semibold mb-2 flex items-center justify-between">
                                    {plan.name}
                                    {plan.popular && (
                                        <span className="text-xs bg-cyan-100 text-cyan-700 font-semibold px-3 py-1 rounded-full">
                                            Popular
                                        </span>
                                    )}
                                </h3>
                                <p className="text-gray-500 mb-6">{plan.description}</p>

                                <div className="flex items-end gap-2 text-4xl font-bold text-gray-900 mb-6">
                                    <span className="text-2xl align-top">$</span>
                                    {plan.price}
                                    <span className="text-base font-normal text-gray-500 ml-1">
                                        / month
                                    </span>
                                </div>

                                {/* Button */}
                                <button className="w-full bg-gradient-to-r from-cyan-400 to-yellow-300 text-black py-3 rounded-full font-semibold mb-6 hover:opacity-90 transition">
                                    Get Started
                                </button>

                                {/* Features */}
                                <div className="text-left text-sm">
                                    <p className="mb-2 font-medium text-gray-700">Features :</p>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-center gap-2 text-gray-800">
                                                <FaCheck className="text-green-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section6;
