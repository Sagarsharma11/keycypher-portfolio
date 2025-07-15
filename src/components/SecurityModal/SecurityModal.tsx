// "use client"
// import React, { useState } from "react";
// import { IoMdCloseCircle } from "react-icons/io";
// //@ts-ignore
// import ShowThankYouAlert from "../ShowThankYouAlert/ShowThankYouAlert";



// const SecurityModal = ({ isOpen, setIsOpen }: any) => {

//     const [formData, setFormData] = useState({
//         fullName: "",
//         organization: "",
//         email: "",
//         reason: "",
//     });

//     const [apiStatus, setApiStats] = useState("ideal")

//     const handleChange = (e: any) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = async (e: any) => {
//         e.preventDefault();
//         console.log("Form Submitted", formData);
//         // TODO: Handle actual submission (API call etc.)
//         setIsOpen(false);
//         setApiStats("success")
//     };

//     return (
//         <>
//             {isOpen && (
//                 <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">

//                     <div className="bg-gray-950 rounded-xl w-full max-w-lg p-6 shadow-lg relative">
//                         <div className="flex w-full justify-between items-center">
//                         {
//                             apiStatus === "success" ?
//                                 <ShowThankYouAlert /> :
//                                 <>
//                                         <h2 className="text-2xl font-bold mb-4 text-gray-800">Security Scanner Signup</h2>
//                                         <div className="cursor-pointer" onClick={() => setIsOpen(false)} >
//                                             <IoMdCloseCircle size={25} color="white" />
//                                         </div>
//                                         <form onSubmit={handleSubmit} className="space-y-4">
//                                             <div>
//                                                 <label className="block text-sm font-medium">
//                                                     Full Name <span className="text-red-500">*</span>
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     name="fullName"
//                                                     required={false}
//                                                     value={formData.fullName}
//                                                     onChange={handleChange}
//                                                     className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-500"
//                                                 />
//                                             </div>

//                                             <div>
//                                                 <label className="block text-sm font-medium">Organization Name</label>
//                                                 <input
//                                                     type="text"
//                                                     name="organization"
//                                                     value={formData.organization}
//                                                     onChange={handleChange}
//                                                     className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
//                                                 />
//                                             </div>

//                                             <div>
//                                                 <label className="block text-sm font-medium">
//                                                     Email Address <span className="text-red-500">*</span>
//                                                 </label>
//                                                 <input
//                                                     type="email"
//                                                     name="email"
//                                                     required={false}
//                                                     value={formData.email}
//                                                     onChange={handleChange}
//                                                     className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-500"
//                                                 />
//                                             </div>

//                                             <div>
//                                                 <label className="block text-sm font-medium">
//                                                     What's your primary reason for seeking security scanners? <span className="text-red-500">*</span>
//                                                 </label>
//                                                 <textarea
//                                                     name="reason"
//                                                     required={false}
//                                                     rows={3}
//                                                     value={formData.reason}
//                                                     onChange={handleChange}
//                                                     className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-500"
//                                                 />
//                                             </div>

//                                             <div className="flex justify-center gap-3 mt-6">
//                                                 <button
//                                                     type="submit"
//                                                     className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
//                                                 >
//                                                     Submit
//                                                 </button>
//                                             </div>
//                                         </form>
//                                 </>
//                         }
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default SecurityModal;


"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import ShowThankYouAlert from "../ShowThankYouAlert/ShowThankYouAlert";

interface SecurityModalProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const SecurityModal: React.FC<SecurityModalProps> = ({ isOpen, setIsOpen }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        organization: "",
        email: "",
        reason: "",
    });

    const [apiStatus, setApiStatus] = useState<"idle" | "success">("idle");

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Basic validation
        // if (!formData.fullName || !formData.email || !formData.reason) {
        //   alert("Please fill in all required fields.");
        //   return;
        // }

        // Simulate API call
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
                <div className={`flex ${ apiStatus === "idle"?"justify-between":"justify-end"} items-center mb-4`}>
                    {
                        apiStatus === "idle" &&
                        <h2 className="text-2xl font-bold">Start Your Security Scan Now</h2>
                    }
                    <button className="cursor-pointer" onClick={handleClose}>
                        <IoMdCloseCircle size={25} color="white" />
                    </button>
                </div>

                {apiStatus === "success" ? (
                    <ShowThankYouAlert />
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                required={false}
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded bg-gray-900 text-white focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Organization Name</label>
                            <input
                                type="text"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded bg-gray-900 text-white focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                required={false}
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded bg-gray-900 text-white focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">
                                What's your primary reason for seeking security scanners?{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="reason"
                                required={false}
                                rows={3}
                                value={formData.reason}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded bg-gray-900 text-white focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>

                        <div className="flex justify-center mt-6">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-600 rounded text-white hover:bg-blue-700
                                cursor-pointer
                                "
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

