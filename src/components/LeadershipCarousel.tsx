'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

interface ArtistSettings {
    dots: boolean
    infinite: boolean
    speed: number
    slidesToShow: number
    slidesToScroll: number
    autoplay: boolean
    arrows: boolean
    responsive: {
        breakpoint: number
        settings: {
            slidesToShow: number
        }
    }[]
}

const WhyChooseUs: React.FC = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    (entry.target as HTMLElement).classList.toggle('show', entry.isIntersecting)
                })
            },
            { threshold: 0.2, rootMargin: '-50px' }
        )

        const elements = document.querySelectorAll<HTMLElement>('.animate-on-scroll')
        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const artistSettings: ArtistSettings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-zinc-100">
            <style jsx global>{`
                .animate-on-scroll {
                  opacity: 0;
                  transform: translateY(20px);
                  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .animate-on-scroll.show {
                  opacity: 1;
                  transform: translateY(0);
                }
                .gradient-border {
                  position: relative;
                  background: linear-gradient(45deg, #f8f8f8, #e5e5e5);
                }
                .dark .gradient-border {
                  background: linear-gradient(45deg, #1a1a1a, #2d2d2d);
                }
                .gradient-border::before {
                  content: '';
                  position: absolute;
                  inset: 0;
                  border-radius: 1rem;
                  padding: 2px;
                  background: linear-gradient(45deg, #dc2626, #ea580c);
                  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                  -webkit-mask-composite: xor;
                  mask-composite: exclude;
                }
            `}</style>

            {/* Hero Section */}
            <section className="relative py-10 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/ink-texture.png')] opacity-10" />
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto px-4 animate-on-scroll">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                        Why Choose Tattitude
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
                        Where art meets skin in perfect harmony
                    </p>
                </motion.div>
            </section>

            {/* Commitment Section */}
            <section className="py-4 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    {['Custom Designs', 'Modern Techniques', 'Premium Quality'].map((title, index) => (
                        <div key={index} className="gradient-border p-6 rounded-xl animate-on-scroll">
                            <h3 className="text-2xl font-bold mb-4">{title}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                {index === 0 ? 'Bespoke tattoo creations tailored to your vision' :
                                    index === 1 ? 'State-of-the-art equipment & innovative methods' :
                                        'Medical-grade sterilization & hypoallergenic inks'}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { number: '10+', label: 'Years Experience' },
                        { number: '25k+', label: 'Tattoos Created' },
                        { number: '99%', label: 'Client Satisfaction' },
                        { number: '50+', label: 'Awards Won' }
                    ].map((stat, index) => (
                        <motion.div key={index} className="animate-on-scroll" whileHover={{ scale: 1.05 }}>
                            <div className="p-6 bg-zinc-200 dark:bg-zinc-800/50 rounded-xl">
                                <div className="text-4xl font-bold text-red-500 mb-2">{stat.number}</div>
                                <div className="text-zinc-600 dark:text-zinc-400 text-sm">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-4 px-4 text-center">
                <div className="max-w-2xl mx-auto animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Ink Journey?</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-8">Book your free consultation with our master artists</p>
                    <Button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105">
                        <Link href="https://wa.me/+919136136364" target="_blank">Schedule Consultation</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}

export default WhyChooseUs
