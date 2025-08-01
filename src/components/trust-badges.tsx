'use client'
import { motion } from 'framer-motion'

export default function TrustBadges() {
    const badges = [
        {
            title: "Health & Safety Certified",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="w-10 h-10">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
            ),
            description: "Certified Hygiene Standards"
        },
        {
            title: "4.9 Star Rating",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="w-10 h-10">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            ),
            description: "Based on 500+ Reviews"
        },
        {
            title: "Award-Winning Studio",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="w-10 h-10">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
            ),
            description: "Best Studio 2024"
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    }

    return (
        <div className="py-16 bg-white dark:bg-black transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold mb-12 text-center text-zinc-900 dark:text-white"
                >
                    Why Our Clients <span className="text-red-600">Trust Us</span>
                </motion.h3>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-8 md:gap-16"
                >
                    {badges.map((badge) => (
                        <motion.div
                            key={badge.title}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center text-center max-w-xs"
                        >
                            <motion.div
                                className="mb-4 p-4 border border-zinc-300 dark:border-zinc-800 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-white"
                                whileHover={{
                                    boxShadow: "0 0 15px rgba(255, 0, 0, 0.3)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                {badge.icon}
                            </motion.div>
                            <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">{badge.title}</h4>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm">{badge.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
