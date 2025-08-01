'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const categories = [
    'All',
    'Black & Grey',
    'Color',
    'Realism',
    'Minimalist',
    'Geometric',
    'Japanese',
    'Watercolor'
]

const tattoos = [
    { id: 1, category: "Black & Grey", image: "/gallery/tattoo-1.jpg" },
    { id: 2, category: "Realism", image: "/gallery/tattoo-2.jpg" },
    { id: 3, category: "Japanese", image: "/gallery/tattoo-3.jpg" },
    { id: 4, category: "Color", image: "/gallery/tattoo-4.jpg" },
    { id: 5, category: "Geometric", image: "/gallery/tattoo-5.jpg" },
    { id: 6, category: "Color", image: "/gallery/tattoo-6.jpg" },
    { id: 7, category: "Japanese", image: "/gallery/tattoo-7.jpg" },
    { id: 8, category: "Realism", image: "/gallery/tattoo-8.jpg" },
    { id: 9, category: "Geometric", image: "/gallery/tattoo-9.jpg" },
    { id: 10, category: "Black & Grey", image: "/gallery/tattoo-10.jpg" },
    { id: 11, category: "Geometric", image: "/gallery/tattoo-11.jpg" },
    { id: 12, category: "Black & Grey", image: "/gallery/tattoo-12.jpg" },
    { id: 13, category: "Japanese", image: "/gallery/tattoo-13.jpg" },
    { id: 14, category: "Realism", image: "/gallery/tattoo-14.jpg" },
    { id: 15, category: "Color", image: "/gallery/tattoo-15.jpg" },
    { id: 16, category: "Geometric", image: "/gallery/tattoo-16.jpg" },
    { id: 17, category: "Black & Grey", image: "/gallery/tattoo-17.jpg" },
    { id: 18, category: "Japanese", image: "/gallery/tattoo-18.jpg" },
    { id: 19, category: "Color", image: "/gallery/tattoo-19.jpg" },
    { id: 20, category: "Realism", image: "/gallery/tattoo-20.jpg" },
    { id: 21, category: "Black & Grey", image: "/gallery/tattoo-21.jpg" }
]



const TattooGallery = () => {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const filteredTattoos = tattoos.filter(tattoo =>
        selectedCategory === 'All' ? true : tattoo.category === selectedCategory
    )

    return (
        <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors">
            {/* Category Filter */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="sticky top-0 z-20 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm py-6 px-4 border-b border-zinc-200 dark:border-zinc-800"
            >
                <div className="max-w-7xl mx-auto flex overflow-x-auto pb-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`flex-shrink-0 px-6 py-2 flex gap-x-1 mx-2 rounded-full transition-all
                ${selectedCategory === category
                                    ? 'bg-red-500 text-white'
                                    : 'bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Gallery Grid */}
            <motion.div
                className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                animate="visible"
            >
                {filteredTattoos.map((tattoo, index) => (
                    <motion.div
                        key={tattoo.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="group relative cursor-zoom-in"
                        onClick={() => setSelectedImage(tattoo.image)}
                    >
                        <div className="aspect-square overflow-hidden rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-red-500 transition-all duration-300">
                            <Image
                                src={tattoo.image}
                                alt={`Tattoo example - ${tattoo.category}`}
                                width={600}
                                height={600}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="absolute flex items-center justify-between bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-zinc-900 dark:via-zinc-900/80">
                            <span className="text-lg  text-red-500 dark:text-red-400">{tattoo.category}</span>
                            <Button className='bg-red-500 text-white hover:bg-red-400 hover:cursor-pointer'
                                onClick={() => window.open("https://wa.me/+919136136364")}
                            >
                                Book Now
                            </Button>
                        </div>

                    </motion.div>
                ))}
            </motion.div>

            {/* Zoom Modal */}
            {
                selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 z-50 bg-white/90 dark:bg-zinc-900/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-4xl w-full">
                            <button
                                className="absolute -top-8 right-0 text-zinc-600 hover:text-red-500 dark:text-zinc-400 dark:hover:text-red-400 transition-colors"
                                onClick={() => setSelectedImage(null)}
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
                                <Image
                                    src={selectedImage}
                                    alt="Zoomed tattoo view"
                                    width={1200}
                                    height={1200}
                                    className="object-contain w-full h-full max-h-[80vh]"
                                />
                            </div>
                        </div>
                    </motion.div>
                )
            }
        </div >
    )
}

export default TattooGallery
