'use client'
import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg">Last Updated: 3/31/2025 </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="space-y-12"
                >
                    {/* Intro */}
                    <div className="bg-zinc-100 dark:bg-zinc-800/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 backdrop-blur-sm">
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            At Tattitude, we prioritize your privacy and are committed to protecting your personal
                            information. This policy outlines how we collect, use, and safeguard your data when
                            you use our services.
                        </p>
                    </div>

                    {/* Data Collection */}
                    <div className="bg-zinc-100 dark:bg-zinc-800/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-red-500 dark:text-red-400 mb-6">1. Information We Collect</h2>
                        <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
                            {[
                                {
                                    label: 'Personal Identification',
                                    detail: 'Name, email, phone number when booking appointments',
                                },
                                {
                                    label: 'Payment Information',
                                    detail: "Encrypted transaction details (we don't store credit card numbers)",
                                },
                                {
                                    label: 'Technical Data',
                                    detail: 'IP address, browser type, device information for analytics',
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start">
                                    <div className="w-6 h-6 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <span className="text-red-500 dark:text-red-400 text-sm">•</span>
                                    </div>
                                    <p><strong>{item.label}:</strong> {item.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Usage */}
                    <div className="bg-zinc-100 dark:bg-zinc-800/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-red-500 dark:text-red-400 mb-6">2. How We Use Your Information</h2>
                        <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
                            {[
                                "Process appointments and maintain service records",
                                "Improve our services and customer experience",
                                "Send important updates about your appointments",
                                "Prevent fraudulent activities and ensure security",
                                "Comply with legal obligations and regulations"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="w-6 h-6 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <span className="text-red-500 dark:text-red-400 text-sm">✓</span>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Protection */}
                    <div className="bg-zinc-100 dark:bg-zinc-800/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-red-500 dark:text-red-400 mb-6">3. Data Protection</h2>
                        <div className="grid md:grid-cols-2 gap-8 text-zinc-600 dark:text-zinc-400">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-red-400 dark:text-red-300">Security Measures</h3>
                                <ul className="space-y-2">
                                    {["SSL encrypted communication", "Regular security audits", "Limited employee access"].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-red-500 dark:text-red-400 mr-2">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-red-400 dark:text-red-300">Data Retention</h3>
                                <ul className="space-y-2">
                                    {["Appointment records: 5 years", "Financial records: 7 years", "Inactive accounts: 2 years"].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-red-500 dark:text-red-400 mr-2">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Rights */}
                    <div className="bg-zinc-100 dark:bg-zinc-800/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-red-500 dark:text-red-400 mb-6">4. Your Rights</h2>
                        <div className="grid md:grid-cols-2 gap-8 text-zinc-600 dark:text-zinc-400">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-red-400 dark:text-red-300">Access & Control</h3>
                                <ul className="space-y-2">
                                    {[
                                        "Request access to your personal data",
                                        "Update/correct inaccurate information",
                                        "Delete non-essential personal data",
                                        "Object to certain processing activities"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-red-500 dark:text-red-400 mr-2">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-red-400 dark:text-red-300">Communication</h3>
                                <ul className="space-y-2">
                                    {[
                                        "Opt-out of marketing emails",
                                        "Withdraw consent for data processing",
                                        "Request data portability"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-red-500 dark:text-red-400 mr-2">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="bg-zinc-100 dark:bg-zinc-800/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 backdrop-blur-sm text-center">
                        <h2 className="text-2xl font-bold text-red-500 dark:text-red-400 mb-4">Contact Us</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                            For privacy-related inquiries or to exercise your rights:
                        </p>
                        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full transition-colors">
                            Contact Privacy Officer
                        </button>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default PrivacyPolicy
