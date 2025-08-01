'use client'
import { motion } from 'framer-motion'
import { FiDownload, FiFilm } from 'react-icons/fi'

const AftercarePage = () => {
    const steps = [
        {
            title: "Initial Removal",
            content: "Keep bandage on for 2-4 hours. Gently wash with antibacterial soap and pat dry.",
            duration: "First 24 hours"
        },
        {
            title: "Moisturizing Routine",
            content: "Apply thin layer of recommended ointment 3-5 times daily for first 3 days",
            duration: "Days 1-3"
        },
        // Add more steps...
    ]

    const videos = [
        { id: 1, title: "Cleaning Process", url: "https://youtube.com/embed/..." },
        { id: 2, title: "Moisturizing Tips", url: "https://youtube.com/embed/..." },
        // Add more videos...
    ]

    return (
        <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/aftercare-hero.jpg')] bg-cover bg-center opacity-20 dark:opacity-30" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative text-center z-10 px-4"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                        Tattoo Aftercare
                    </h1>
                    <p className="text-xl text-zinc-500 dark:text-zinc-400">Essential guide to preserve your ink's beauty</p>
                </motion.div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                {/* Step-by-Step Guide */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Healing Process Guide</h2>
                        <div className="w-24 h-1 bg-red-500 mx-auto mb-4" />
                        <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
                            Follow these steps carefully to ensure proper healing and vibrant tattoo preservation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-zinc-200 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-300 dark:border-zinc-700/50 transition-colors"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-red-500/10 dark:bg-red-500/20 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-red-600 dark:text-red-500 text-xl font-bold">{index + 1}</span>
                                    </div>
                                    <h3 className="text-xl font-bold">{step.title}</h3>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{step.content}</p>
                                <div className="text-sm text-red-600 dark:text-red-400">{step.duration}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Downloadable Guide */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-20"
                >
                    <div className="bg-zinc-200 dark:bg-zinc-800/50 rounded-2xl border border-zinc-300 dark:border-zinc-700/50 p-8 text-center transition-colors">
                        <FiDownload className="text-4xl text-red-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Complete Aftercare Guide</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 mb-6">Download detailed instructions for offline access</p>
                        <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full flex items-center mx-auto gap-2 text-white transition-colors">
                            <FiDownload /> Download PDF
                        </button>
                    </div>
                </motion.div>

                {/* Video Tutorials */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Video Guides</h2>
                        <div className="w-24 h-1 bg-red-500 mx-auto mb-4" />
                        <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
                            Visual demonstrations of proper aftercare techniques
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {videos.map((video) => (
                            <div key={video.id} className="relative group">
                                <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden border-2 border-zinc-300 dark:border-zinc-700/50 group-hover:border-red-500 transition-colors">
                                    <iframe
                                        src={video.url}
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope"
                                        allowFullScreen
                                    />
                                </div>
                                <div className="absolute top-4 left-4 bg-zinc-100/90 dark:bg-zinc-900/80 px-3 py-1 rounded-full text-sm flex items-center shadow">
                                    <FiFilm className="mr-2 text-red-500" /> {video.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default AftercarePage
