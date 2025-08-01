'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Artist {
    name: string
    specialty: string
    experience: string
    image: string
    social: string
}

const artists: Artist[] = [
    {
        name: "Satish Sen",
        specialty: "Realism & Portraits",
        experience: "10+ years",
        image: "/artist/satish-sen.jpg",
        social: "@satish.sen"
    },
    {
        name: "Devesh Bendre",
        specialty: "Geometric & Blackwork",
        experience: "6+ years",
        image: "/artist/devesh-bendre.jpg",
        social: "@devesh.bendre"
    },
    {
        name: "Yash Bare",
        specialty: "Geometric & Blackwork",
        experience: "6+ years",
        image: "/artist/yash-bare.jpg",
        social: "@yash.bare"
    },
]

const AboutPage: React.FC = () => {
    return (
        <div className="overflow-x-hidden min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/studio-bg.jpg')] bg-cover bg-center opacity-50 dark:opacity-40" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative text-center z-10"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                        OUR TEAM
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
                        Where passion meets precision in every needle stroke
                    </p>
                </motion.div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                            Our Story
                        </h2>
                        <div className="h-1 w-24 bg-red-500" />
                        <p className="text-zinc-700 dark:text-zinc-400 text-lg leading-relaxed">
                            Founded in 2015, Tattitude has evolved from a small street studio to a renowned
                            tattoo sanctuary. Our vision remains constant - to transform skin into living
                            art while maintaining the highest standards of safety and creativity.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative h-96 rounded-2xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800"
                    >
                        <Image
                            src="/brands/Customer-Photos-8.webp"
                            alt="Studio evolution"
                            width={1000}
                            height={1000}
                            className="object-cover w-full h-full rounded-4xl"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Artists Section */}
            <section className="py-20 px-4 bg-zinc-100 dark:bg-zinc-950/50 transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Check out our
                            <br />
                            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                                AMAZING ARTISTS
                            </span>
                        </h2>
                        <p className="text-zinc-700 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
                            From intricate designs to bold statements, our artists excel in turning ideas
                            into stunning works of body art. Let their masterpieces speak for themselves!
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {artists.map((artist, index) => (
                            <motion.div
                                key={artist.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-zinc-100 dark:bg-zinc-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-900/20 transition-all duration-500"
                            >
                                <div className="relative h-96">
                                    <Image
                                        src={artist.image}
                                        alt={artist.name}
                                        fill
                                        className="object-cover transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 via-transparent to-transparent" />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-1">{artist.name}</h3>
                                    <p className="text-red-500 dark:text-red-400 mb-2">{artist.specialty}</p>
                                    <div className="flex justify-between items-center text-zinc-600 dark:text-zinc-400 text-sm">
                                        <span>{artist.experience} experience</span>
                                        <span className="hover:text-red-400 cursor-pointer">
                                            {artist.social}
                                        </span>
                                    </div>
                                </div>

                                <button className="absolute top-4 right-4 bg-white/80 dark:bg-zinc-900/80 px-4 py-2 rounded-full text-sm hover:bg-red-500 dark:hover:bg-red-500 transition-colors">
                                    View Portfolio
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Studio Tour Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Step Into Our
                            <br />
                            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                                CREATIVE SANCTUARY
                            </span>
                        </h2>
                        <p className="text-zinc-700 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
                            Experience our state-of-the-art facility where hygiene meets artistry
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map((item) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="relative h-96 rounded-2xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 hover:border-red-500 transition-colors"
                            >
                                <Image
                                    src={`/studio/studio${item}.jpg`}
                                    alt="Studio tour"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mt-12"
                    >
                        <Link
                            href="https://wa.me/+919136136364"
                            target="_blank"
                            className="inline-block bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-red-600 dark:hover:bg-red-600 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105"
                        >
                            Book Studio Visit
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage
