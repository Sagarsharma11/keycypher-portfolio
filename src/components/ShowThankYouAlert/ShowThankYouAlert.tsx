import React from 'react'

const ShowThankYouAlert = () => {
    return (
        <div className="main">
            <h2 className="text-2xl font-bold mb-4 text-center">
                🎉 Thank you for registering!
            </h2>

            <p className="mb-2 text-sm text-gray-700 dark:text-gray-300 text-center">
                📧 We’ll send your access credentials via email soon.
            </p>

            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 text-center">
                ⏳ Due to high demand, credentials are being shared in batches.
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm text-center text-gray-800 dark:text-gray-300">
                💬 Have questions? Drop us a message at{" "}
                <a
                    href="mailto:hello@keycypher.com"
                    className="text-blue-600 dark:text-blue-400 underline"
                >
                    hello@keycypher.com
                </a>
            </div>
        </div>
    )
}

export default ShowThankYouAlert