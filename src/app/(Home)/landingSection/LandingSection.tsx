import React from 'react'
import { BsShieldCheck, BsCpu, BsCreditCard2Back, BsPersonBadgeFill } from 'react-icons/bs';
import { FaUsers, FaRegKeyboard } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaUserAlt } from "react-icons/fa";
import styles from "./styles.module.css"

type Props = {}

const LandingSection = (props: Props) => {
    return (
        <div className="relative bg-gradient-to-b from-[#041727] to-[#06284d] text-white py-20 px-6 rounded-b-[2rem] overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
                {/* Left Section */}
                <div className="text-center lg:text-left max-w-xl space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold">Your Cyber Guardians</h1>
                    <p className="text-lg text-gray-300">
                        At Cytrix we understand the ever-growing threat landscape of the digital world. Our mission is to provide
                        comprehensive cyber security services that protect your digital frontiers.
                    </p>

                    {/* Email input */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="relative w-full sm:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="px-5 py-3 rounded-full text-white w-full sm:w-[280px] pr-10 border border-amber-50"
                            />
                            <AiOutlineMail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                        <button className="bg-gradient-to-r from-green-400 to-yellow-300 text-black font-semibold px-6 py-3 rounded-full shadow-md">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Right Icon Cluster */}
                <div className="relative mt-16 lg:mt-0 w-full max-w-xl h-[350px] flex items-center justify-center">
                        <img className={styles.floatImage} src="/assets/images/cyber-cytrix-3d.webp" alt="" />
                </div>
            </div>

            {/* Bottom Clients Info */}
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="flex items-center -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex justify-center items-center">
                           <FaUserAlt />
                        </div>
                    ))}
                </div>
                <span className="text-sm text-gray-300">8K+ Active client with positive reviews</span>
            </div>

            {/* Award Badge */}
            <div className="absolute bottom-6 right-6 text-sm text-green-300 flex items-center gap-2">
                <HiArrowNarrowRight className="text-yellow-400 rotate-90" />
                <span>2023 The world best Cyber Security Services</span>
            </div>
        </div>
    )
}

export default LandingSection