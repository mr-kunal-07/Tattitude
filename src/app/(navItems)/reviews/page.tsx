'use client'
import { motion } from 'framer-motion'

interface Testimonial {
    id: number
    name: string
    rating: number
    text: string
}

const ReviewsPolicies = () => {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Pinki Kushwaha",
            rating: 5,
            text: "Amazing Tattoo Experience in Juhu I had an incredible experience at Tattitud Tattoo Studio in Juhu! The artists are highly skilled, and the hygiene standards are top-notch. My tattoo came out even better than I imagined. If you're looking for custom tattoos in Juhu, this is the place to go!"
        },
        {
            id: 2,
            name: "Prashant Kushwaha",
            rating: 5,
            text: `Wow ! That was awesome at that moment.and very professional and experienced  tattoo artist. I was shocked that how possible smoothly tattoo designing!
In my opinion this   is the  best tattoo artist in juhu city mumbai .`
        },
        {
            id: 3,
            name: "Piyush Jha",
            rating: 5,
            text: `Best Affordable and High-Quality Tattoos must Visit if you are from Andheri, vile parle area
Services
Temporary tattoos, Abstract tattoos, Tattoo cover-ups & reworkings, Ear piercing, Color ink tattoos, Scar camouflage, Eyebrow piercing, Permanent makeup, Tattoo aftercare, Fine line tattoos, Solid black work tattoos, Tattoo design, Tattoos`
        },
        {
            id: 4,
            name: "Neer Senghani",
            rating: 5,
            text: `Best Affordable and High-Quality Tattoos, I was surprised by how affordable Tattitud Juhu is without compromising quality. The artists are professional and use high-grade inks. If you're looking for affordable tattoos in Juhu, this is the place.`
        }
    ]

    return (
        <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors">
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                            Client Experiences
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {testimonials.map((testimonial) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 shadow-sm"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-red-600 dark:text-red-400">✍️</span>
                                    </div>
                                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                                </div>
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-red-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-400 whitespace-pre-line">{testimonial.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-2xl mx-auto bg-zinc-100 dark:bg-zinc-800/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 shadow-sm"
                    >
                        <h3 className="text-2xl font-bold mb-6">Leave a Review</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                            We value your feedback. Please share your experience on Google.
                        </p>
                        <a
                            href="https://www.google.com/maps/place/Tattitude+%7C+Tattoo+Studio+Juhu/@19.1086725,72.8238247,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9b3336e6035:0xed2599a4c9cac959!8m2!3d19.1086725!4d72.8263996!16s%2Fg%2F11x28sj020?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-red-600 hover:bg-red-700 text-white py-6 text-center rounded-md font-medium transition-colors"
                        >
                            Review on Google
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default ReviewsPolicies
