'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const ArtistPlaceholder = ({ specialty }: { specialty: string }) => {
    const getIcon = () => {
        switch (specialty) {
            case 'Realism':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-30">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="10" r="3"></circle>
                        <path d="M7 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2"></path>
                    </svg>
                )
            case 'Watercolor':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-30">
                        <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path>
                        <path d="M5 19.5C5 18.1 9.1 17 11.5 17c2.4 0 6.5 1.1 6.5 2.5"></path>
                        <path d="M12 22c-4.5 0-8-1-8-4 0-2 4-3.5 8-3.5s8 1.5 8 3.5c0 3-3.5 4-8 4Z"></path>
                        <path d="M12 6v8"></path>
                        <path d="M22 11C16.5 11 16 3 16 3s-3 9-8 9"></path>
                    </svg>
                )
            case 'Traditional':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-30">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <path d="M7.21 11.72a5 5 0 0 0 7.08 0"></path>
                    </svg>
                )
            default:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-30">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                        <circle cx="9" cy="9" r="2"></circle>
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                    </svg>
                )
        }
    }

    return (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-zinc-800 text-red-600 dark:text-red-500">
            {getIcon()}
        </div>
    )
}

const artists = [
    {
        name: 'Satish Sen - (Founder)',
        specialty: 'Realism',
        exp: '10 years',
        image: '/artist/satish-sen.jpg',
        bio: 'Specializes in photorealistic portraits and nature scenes with incredible attention to detail.'
    },
    {
        name: 'Devesh Bendre',
        specialty: 'Watercolor',
        exp: '6 years',
        image: '/artist/devesh-bendre.jpg',
        bio: 'Creates ethereal designs with flowing colors and soft edges inspired by traditional painting techniques.'
    },
    {
        name: 'Yash Bare',
        specialty: 'Traditional',
        exp: '6 years',
        image: '/artist/yash-bare.jpg',
        bio: 'Master of bold lines and timeless imagery with a modern twist on classic tattoo styles.'
    }
]

export default function Artists() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 15
            }
        }
    }

    const router = useRouter();

    return (
        <section className="py-4 bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Meet Our <span className="text-red-600 dark:text-red-500">Artists</span></h2>
                    <div className="w-24 h-1 bg-red-600 dark:bg-red-500 mx-auto"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {artists.map((artist) => (
                        <motion.div
                            key={artist.name}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 10px 30px -10px rgba(220, 38, 38, 0.3)"
                            }}
                            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 h-full flex flex-col shadow-lg hover:shadow-xl dark:hover:shadow-zinc-800/50 transition-shadow"
                        >
                            <div className="aspect-[4/5] overflow-hidden">
                                <div className="h-full w-full relative">
                                    <Image
                                        src={artist.image}
                                        alt={artist.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col bg-white dark:bg-zinc-900 relative z-10">
                                <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent"></div>

                                <h3 className="text-2xl font-bold">{artist.name}</h3>
                                <p className="text-red-600 dark:text-red-500 font-medium mb-3">{artist.specialty} Specialist</p>
                                <p className="text-gray-500 dark:text-zinc-400 text-sm mb-4">{artist.exp} experience</p>
                                <p className="text-gray-600 dark:text-zinc-300 text-sm">{artist.bio}</p>
                            </div>

                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/30 dark:from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <motion.button
                        onClick={() => router.push("/booking")}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(220, 38, 38, 0.3)"
                        }}
                        className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold uppercase cursor-pointer hover:bg-red-700 dark:hover:bg-red-500 transition-all duration-200"
                    >
                        Book a Consultation
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}