"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRouter } from "next/navigation"
import { ChevronRight, Sparkles } from "lucide-react"

export interface ModalDrawerProps {
    isOpen: boolean
    onClose: () => void
    selectedProduct: any | null
}

const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        },
    },
}

const Hero: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const router = useRouter()

    // Parallax effect for background
    const { scrollY } = useScroll()
    const backgroundY = useTransform(scrollY, [0, 500], [0, 100])

    // Intersection observer with higher threshold
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
        rootMargin: "-50px 0px",
    })

    // Generate decorative elements
    const decorElements = Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        size: Math.random() * 20 + 10,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        delay: Math.random() * 0.5,
        duration: Math.random() * 2 + 3,
    }))

    return (
        <section
            ref={ref}
            className="relative w-full h-screen flex items-center justify-start overflow-hidden"
        >
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    style={{ y: backgroundY }}
                    className="w-full h-full"
                >
                    {/* Background image with tailwind filters for light and dark modes */}
                    <div
                        className="absolute inset-0 bg-cover bg-center filter contrast-125 brightness-75 dark:brightness-60"
                        style={{
                            backgroundImage: `url('/home/tattoo.jpg')`,
                        }}
                    />
                    {/* Gradient overlay switching based on theme */}
                    <div className="absolute inset-0 bg-gradient-to-r light:from-white/90 light:via-white/70 light:to-transparent dark:from-black/90 dark:via-black/70 dark:to-transparent" />
                </motion.div>
            </div>

            {/* Grain texture overlay */}
            <div
                className="absolute inset-0 z-[1] opacity-30 pointer-events-none
                bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')"
            />

            {/* Decorative elements */}
            <AnimatePresence>
                {inView && (
                    <>
                        {decorElements.map((elem) => (
                            <motion.div
                                key={elem.id}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: [0, 1, 0.8, 1],
                                    opacity: [0, 0.3, 0.2, 0],
                                }}
                                transition={{
                                    duration: elem.duration,
                                    delay: elem.delay,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "reverse",
                                }}
                                className="absolute blur-xl rounded-full bg-red-500/10 z-[2]"
                                style={{
                                    width: `${elem.size}px`,
                                    height: `${elem.size}px`,
                                    left: `calc(${50 + elem.x}% - ${elem.size / 2}px)`,
                                    top: `calc(${50 + elem.y}% - ${elem.size / 2}px)`,
                                }}
                            />
                        ))}
                    </>
                )}
            </AnimatePresence>

            {/* Decorative mandala pattern */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 2, delay: 1 }}
                className="absolute bottom-0 left-0 w-64 h-64 z-[2]"
            >
                <svg viewBox="0 0 100 100" className="w-full h-full text-red-500/30">
                    <path
                        d="M50 0 C60 20 80 20 100 10 C80 40 80 60 100 90 C60 80 40 80 0 90 C20 60 20 40 0 10 C40 20 40 20 50 0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                    />
                    <path
                        d="M50 10 C55 25 75 25 90 15 C75 35 75 65 90 85 C55 75 45 75 10 85 C25 65 25 35 10 15 C45 25 45 25 50 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.3"
                    />
                </svg>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-left px-8 md:px-16 lg:px-24 max-w-5xl">
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
                        },
                    }}
                >
                    <motion.h1
                        variants={textVariants}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-100 mb-6 leading-tight"
                    >
                        We help you get a tattoo
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-orange-300">
                            that speaks for you
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={textVariants}
                        className="text-lg md:text-xl text-white dark:text-gray-300 mb-8 max-w-2xl"
                    >
                        At Tattitude, we help you turn your ideas into stunning ink that captures your essence,
                        all while ensuring top-notch quality at a price you'll love
                    </motion.p>

                    <motion.div variants={textVariants}>
                        <motion.div whileHover={{ scale: 1.05, x: 5 }} whileTap={{ scale: 0.95 }} className="inline-block">
                            <button
                                onClick={() => router.push("/booking")}
                                className="group px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-red-800 to-red-600 text-white font-semibold rounded-full text-lg transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] flex items-center gap-2"
                            >
                                Book a slot
                                <motion.span
                                    initial={{ x: 0 }}
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: "loop",
                                        ease: "easeInOut",
                                        repeatDelay: 1,
                                    }}
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </motion.span>
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating sparkle elements */}
            <AnimatePresence>
                {inView && (
                    <>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.5 }}
                            className="absolute bottom-16 right-16 z-[3] text-red-400/70"
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                }}
                            >
                                <Sparkles className="w-8 h-8" />
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.8 }}
                            className="absolute top-24 right-24 z-[3] text-red-400/50"
                        >
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{
                                    duration: 5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                    delay: 0.5,
                                }}
                            >
                                <Sparkles className="w-6 h-6" />
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Hero
