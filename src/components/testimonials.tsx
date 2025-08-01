'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
    {
        id: 2,
        name: "Melbin Alexander",
        image: "/artist/artist.jpg",
        rating: 5,
        text: "My first tattoo experience was exceptional. The artist captured my vision with stunning detail and precision. Highly recommended!"
    },
    {
        id: 1,
        name: "Bhagyashree Gaikwad",
        image: "/artist/artist.jpg",
        rating: 5,
        text: "Incredible artistry and attention to detail! The team delivered a unique design that perfectly represents my style. A must-visit tattoo studio."
    },
    {
        id: 3,
        name: "Sangram Jaiswal",
        image: "/artist/artist.jpg",
        rating: 5,
        text: "The studio offers a welcoming atmosphere and top-notch professionalism. My new sleeve exceeded all expectations and feels like a masterpiece."
    },
    {
        id: 4,
        name: "Neha Kavade",
        image: "/artist/artist.jpg",
        rating: 5,
        text: "I was nervous about my first tattoo, but the artist made me feel at ease from start to finish. The design is both beautiful and meaningful."
    },
    {
        id: 5,
        name: "John Smith",
        image: "/artist/artist.jpg",
        rating: 5,
        text: "A top-notch experience with creative and skilled artists. They listened to my ideas and delivered a tattoo that truly stands out."
    },
    {
        id: 6,
        name: "Sarah Johnson",
        image: "/artist/artist.jpg",
        rating: 5,
        text: "The studio's professionalism and artistry are unmatched. Every detail was perfectly executed, leaving me with a tattoo I'm incredibly proud of."
    },
    {
        id: 7,
        name: "Mike Brown",
        image: "/artist/artist.jpg",
        rating: 5,
        text: "I was blown away by the creativity and precision of the work. They transformed my concept into a piece of art that I’ll cherish forever."
    },
    {
        id: 8,
        name: "Emily Davis",
        image: "/artist/artist.jpg",
        rating: 5,
        text: "Clean, inviting, and supremely talented. The entire team ensured a seamless experience, and my tattoo turned out even better than I imagined."
    }
];

const Testimonials = () => {
    return (
        <section className="relative py-20 bg-white dark:bg-black transition-colors duration-500">
            <div className="absolute inset-0 bg-[url('/ink-splatter.png')] opacity-5 dark:opacity-10" />

            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                        Client Ink Stories
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Hear from those who've transformed their skin into living art
                    </p>
                </motion.div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={testimonial.id} className="basis-full md:basis-1/2 xl:basis-1/3">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group relative bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-6 shadow-xl dark:shadow-2xl hover:shadow-red-500/10 dark:hover:shadow-red-900/30 transition-all duration-500 mx-2 border border-zinc-300 dark:border-zinc-700"
                                >
                                    <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-zinc-900/80 via-transparent to-transparent" />
                                    </div>

                                    <div className="mb-4 flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">{testimonial.name}</h3>
                                        <div className="flex space-x-1">
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
                                    </div>

                                    <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed line-clamp-4">
                                        {testimonial.text}
                                    </p>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="mt-8 flex justify-center gap-4">
                        <CarouselPrevious className="static -translate-y-0 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-red-600 dark:text-red-400 border border-zinc-300 dark:border-red-500/50" />
                        <CarouselNext className="static -translate-y-0 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-red-600 dark:text-red-400 border border-zinc-300 dark:border-red-500/50" />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

export default Testimonials
