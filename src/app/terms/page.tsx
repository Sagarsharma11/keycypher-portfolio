import React from 'react'

const page = () => {
    return (
        <div className="w-full min-h-screen bg-gray-950 text-white px-4 py-10">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
                    Terms and Conditions
                </h1>

                <p className="text-gray-400 text-sm italic text-center">
                    Last Updated: July 12, 2025
                </p>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-white">
                        1. Service Overview
                    </h2>
                    <p className="text-gray-300">
                        KeyCypher provides a secure, cloud-based platform for users to
                        upload `.zip` files containing source code, which we scan for
                        security vulnerabilities and best practices. The service is
                        intended for educational, development, and auditing purposes only.
                    </p>

                    <h2 className="text-xl font-semibold text-white">2. Eligibility</h2>
                    <p className="text-gray-300">
                        You must be at least 18 years old to use this Service. If you are
                        under 18, you may only use the platform with the involvement of a
                        parent or guardian. You must be capable of entering into a legally
                        binding agreement under the Indian Contract Act, 1872.
                    </p>

                    <h2 className="text-xl font-semibold text-white">
                        3. Code Uploads & Data Handling
                    </h2>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                        <li>
                            Uploaded files are used solely for security scanning and are
                            deleted shortly after processing.
                        </li>
                        <li>
                            We do not access, distribute, or store your content permanently.
                        </li>
                        <li>
                            You may not upload malicious code, unauthorized data, or any
                            personal information that violates applicable laws.
                        </li>
                    </ul>

                    <h2 className="text-xl font-semibold text-white">
                        4. Intellectual Property
                    </h2>
                    <p className="text-gray-300">
                        You retain ownership of your uploaded code. All platform technology,
                        branding, and design belong to KeyCypher Technologies.
                    </p>

                    <h2 className="text-xl font-semibold text-white">
                        5. Disclaimer of Warranties
                    </h2>
                    <p className="text-gray-300">
                        The Service is provided “as is” and “as available.” We do not
                        guarantee the accuracy of scan results or platform uptime.
                    </p>

                    <h2 className="text-xl font-semibold text-white">
                        6. Limitation of Liability
                    </h2>
                    <p className="text-gray-300">
                        We are not liable for any damages, including loss of data, downtime,
                        or business disruption resulting from your use of this Service.
                    </p>

                    <h2 className="text-xl font-semibold text-white">7. User Conduct</h2>
                    <p className="text-gray-300">
                        You must not misuse, attack, reverse engineer, or upload any
                        unauthorized or harmful files.
                    </p>

                    <h2 className="text-xl font-semibold text-white">8. Termination</h2>
                    <p className="text-gray-300">
                        We may suspend or terminate your access at any time if you breach
                        these Terms or applicable laws.
                    </p>

                    <h2 className="text-xl font-semibold text-white">
                        9. Changes to the Terms
                    </h2>
                    <p className="text-gray-300">
                        These Terms may be updated from time to time. Continued use of the
                        platform constitutes your acceptance of any changes.
                    </p>

                    <h2 className="text-xl font-semibold text-white">
                        10. Governing Law and Jurisdiction
                    </h2>
                    <p className="text-gray-300">
                        These Terms are governed by the laws of India. Any disputes shall be
                        subject to the jurisdiction of courts in Bengaluru, Karnataka.
                    </p>

                    <h2 className="text-xl font-semibold text-white">
                        11. Contact Information
                    </h2>
                    <p className="text-gray-300">
                        For questions, please contact us at:{" "}
                        <a
                            href="mailto:hello@keycypher.com"
                            className="text-blue-400 underline"
                        >
                            hello@keycypher.com
                        </a>
                    </p>
                </section>
            </div>
        </div>
    )
}

export default page