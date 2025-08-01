'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiClock, FiTag } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import Image from 'next/image'

interface BlogPost {
    id: number
    title: string
    category: string
    date: string
    readTime: string
    image: string
    excerpt: string
}

interface FormData {
    email: string
}

const BlogPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all')
    const { register, handleSubmit } = useForm<FormData>()

    const categories: string[] = [
        'all',
        'trends',
        'inspiration',
        'faqs',
        'behind-the-scenes'
    ]

    const posts: BlogPost[] = [
        {
            id: 1,
            title: "2024 Tattoo Trends: What's Inking Now",
            category: 'trends',
            date: 'Mar 15, 2024',
            readTime: '5 min',
            image: '/blog/trends.jpg',
            excerpt: 'Discover the hottest tattoo styles taking over this year...'
        },
        // Add more posts...
    ]

    const filteredPosts: BlogPost[] = selectedCategory === 'all'
        ? posts
        : posts.filter(post => post.category === selectedCategory)

    const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
        console.log(data)
    }

    return (
        <div className="overflow-x-hidden min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
            {/* Hero Section */}
            <section className="relative h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/blog-hero.jpg')] bg-cover bg-center opacity-30" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative text-center z-10 px-4"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                        Ink Journal
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400">Exploring Art, Culture & Stories</p>
                </motion.div>
            </section>

            {/* Featured Post */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="relative group"
                >
                    <div className="relative h-96 rounded-3xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800">
                        <Image
                            src="/blog/featured.jpg"
                            alt="Featured post"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-zinc-900 via-white/60 dark:via-zinc-900/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <span className="bg-red-500 text-white text-sm px-4 py-1 rounded-full">Trends</span>
                            <h2 className="text-3xl font-bold mt-4">The Evolution of Tattoo Artistry</h2>
                            <div className="flex items-center mt-4 text-zinc-600 dark:text-zinc-400 text-sm">
                                <span>March 20, 2024</span>
                                <span className="mx-2">•</span>
                                <FiClock className="mr-1" />5 min read
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Categories */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="sticky top-0 z-20 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm py-6 px-4 border-b border-zinc-200 dark:border-zinc-800"
            >
                <div className="max-w-7xl mx-auto flex overflow-x-auto pb-4 space-x-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full capitalize transition-colors ${selectedCategory === category
                                ? 'bg-red-500 text-white'
                                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Blog Grid */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                >
                    {filteredPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-zinc-100/50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 hover:border-red-500 transition-colors"
                        >
                            <div className="relative h-64 overflow-hidden rounded-t-2xl">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                                    <span>{post.date}</span>
                                    <span className="mx-2">•</span>
                                    <FiClock className="mr-1" />
                                    {post.readTime}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 line-clamp-3">{post.excerpt}</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="bg-zinc-200 dark:bg-zinc-700 px-3 py-1 rounded-full text-sm flex items-center">
                                        <FiTag className="mr-2" />
                                        {post.category}
                                    </span>
                                    <FiArrowUpRight className="text-red-500 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Newsletter */}
            <section className="py-20 px-4 bg-zinc-100 dark:bg-zinc-950">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Stay Inked-In</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                        Get latest articles, studio updates, and exclusive offers
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                        <input
                            {...register("email", { required: true })}
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-full px-6 py-3 focus:outline-none focus:border-red-500"
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </section>

            {/* Scroll to Top */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-zinc-200 dark:bg-zinc-800 p-4 rounded-full shadow-xl hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
                whileHover={{ scale: 1.1 }}
            >
                <FiArrowUpRight className="text-red-500 transform rotate-90" />
            </motion.button>
        </div>
    )
}
export default BlogPage