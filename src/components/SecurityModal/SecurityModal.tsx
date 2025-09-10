"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import ShowThankYouAlert from "../ShowThankYouAlert/ShowThankYouAlert";

interface SecurityModalProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

interface FormData {
    fullName: string;
    organization: string;
    email: string;
    reason: string;
    selfhosted: boolean;
}

const SecurityModal: React.FC<SecurityModalProps> = ({ isOpen, setIsOpen }) => {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        organization: "",
        email: "",
        reason: "",
        selfhosted: false,
    });

    const [apiStatus, setApiStatus] = useState<"idle" | "success">("idle");

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, type } = e.target;

        if (type === "checkbox") {
            const target = e.target as HTMLInputElement;
            setFormData((prev) => ({ ...prev, [name]: target.checked }));
        } else {
            const { value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // ✅ Basic validation (uncomment if needed)
        // if (!formData.fullName || !formData.email || !formData.reason) {
        //     alert("Please fill in all required fields.");
        //     return;
        // }

        console.log("Form Submitted", formData);
        setApiStatus("success");
    };

    const handleClose = () => {
        setApiStatus("idle");
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
            <div className="bg-gray-950 rounded-xl w-full max-w-lg p-6 shadow-lg relative text-white">
                <div
                    className={`flex ${
                        apiStatus === "idle" ? "justify-between" : "justify-end"
                    } items-center mb-4`}
                >
                    {apiStatus === "idle" && (
                        <h2 className="text-2xl font-bold">Start Your Security Scan Now</h2>
                    )}
                    <button onClick={handleClose}>
                        <IoMdCloseCircle size={25} color="white" />
                    </button>
                </div>

                {apiStatus === "success" ? (
                    <ShowThankYouAlert />
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded bg-gray-900 text-white focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>

                        {/* Organization */}
                        <div>
                            <label className="block text-sm font-medium">Organization Name</label>
                            <input
                                type="text"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded bg-gray-900 text-white focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded bg-gray-900 text-white focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>

                        {/* Reason */}
                        <div>
                            <label className="block text-sm font-medium">
                                What's your primary reason for seeking security scanners?{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="reason"
                                rows={3}
                                value={formData.reason}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded bg-gray-900 text-white focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>

                        {/* Self Hosted Checkbox */}
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="selfhosted"
                                checked={formData.selfhosted}
                                onChange={handleChange}
                                className="w-5 h-5 text-blue-500 bg-gray-900 border rounded focus:ring focus:border-blue-500 cursor-pointer"
                            />
                            <label className="text-sm font-medium">
                                Want a self-hosted version
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-6">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-600 rounded text-white hover:bg-blue-700 transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default SecurityModal;
