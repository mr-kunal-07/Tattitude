'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import type { MouseEvent } from 'react'
import { useMouse } from '@uidotdev/usehooks'
import { useRouter } from 'next/navigation'

interface TattooDesign {
    id: number
    title: string
    description: string
    image: string
    link: string
}

const designs = [
    {
        id: 1,
        title: "Traditional Style",
        description: "Classic American traditional tattoo designs",
        image: "/tattoo/tattoo-1.jpg",
        link: "/styles/traditional"
    },
    {
        id: 2,
        title: "Watercolor",
        description: "Soft, painterly tattoo artworks",
        image: "/tattoo/tattoo-2.jpg",
        link: "/styles/watercolor"
    },
    {
        id: 3,
        title: "Geometric",
        description: "Precision linework & sacred geometry",
        image: "/tattoo/tattoo-3.jpg",
        link: "/styles/geometric"
    },
    {
        id: 4,
        title: "Geometric",
        description: "Precision linework & sacred geometry",
        image: "/tattoo/tattoo3.jpg",
        link: "/styles/geometric"
    },
]

const TattooDesigns = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [selectedDesign, setSelectedDesign] = useState<TattooDesign | null>(null)
    const [visibleDesigns, setVisibleDesigns] = useState<number>(3)
    const [mouse] = useMouse()
    const { x, y } = mouse
    const observerRef = useRef<IntersectionObserver | null>(null)
    const cardsRef = useRef<HTMLDivElement>(null)
    const router = useRouter();

    useEffect(() => {
        let rafId: number | null = null
        let lastUpdate = 0
        const throttleDelay = 16

        const handleParallax = () => {
            const now = Date.now()
            if (now - lastUpdate < throttleDelay) return
            lastUpdate = now

            const cards = document.querySelectorAll<HTMLElement>('.parallax-card')
            cards.forEach(card => {
                const rect = card.getBoundingClientRect()
                if (rect.bottom < 0 || rect.top > window.innerHeight) return

                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2

                const rotateX = Math.max(-5, Math.min(5, ((y - centerY) / window.innerHeight) * 8))
                const rotateY = Math.max(-5, Math.min(5, ((x - centerX) / window.innerWidth) * -8))

                card.style.transform = `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.03)
                    translateZ(0)
                `
            })
        }

        const throttledParallax = () => {
            if (rafId) return
            rafId = requestAnimationFrame(() => {
                handleParallax()
                rafId = null
            })
        }

        window.addEventListener('mousemove', throttledParallax, { passive: true })

        return () => {
            window.removeEventListener('mousemove', throttledParallax)
            if (rafId) cancelAnimationFrame(rafId)
        }
    }, [x, y])

    useEffect(() => {
        if (!cardsRef.current) return

        if (observerRef.current) {
            observerRef.current.disconnect()
        }

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target as HTMLElement
                    requestAnimationFrame(() => {
                        target.classList.add('show')
                    })
                    observerRef.current?.unobserve(target)
                }
            })
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        })

        const cards = cardsRef.current.querySelectorAll<HTMLElement>('.tattoo-card:not(.show)')
        cards.forEach((card, idx) => {
            card.style.transitionDelay = `${idx % 3 * 100}ms`
            observerRef.current?.observe(card)
        })

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect()
            }
        }
    }, [visibleDesigns])

    const handleDesignClick = (e: MouseEvent, design: TattooDesign) => {
        e.preventDefault()
        setSelectedDesign(design)
        setIsModalOpen(true)
    }

    const handleShowMore = () => setVisibleDesigns(designs.length)

    return (
        <>
            <style jsx global>{`
                .tattoo-card {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.5s ease, transform 0.5s ease;
                    will-change: transform, opacity;
                }

                .tattoo-card.show {
                    opacity: 1;
                    transform: translateY(0);
                }

                @media (prefers-reduced-motion: reduce) {
                    .tattoo-card {
                        transition: none;
                        opacity: 1;
                        transform: none;
                    }
                    
                    .parallax-card {
                        transform: none !important;
                    }
                }
            `}</style>

            <section className="relative bg-white dark:bg-black py-20 px-4 overflow-hidden">
                {/* Ink splatter background */}
                <div className="absolute inset-0 pointer-events-none bg-[url('/ink-splatter.png')] bg-repeat opacity-10 dark:opacity-20 mix-blend-multiply dark:mix-blend-overlay"></div>

                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-yellow-500 dark:from-red-500 dark:to-yellow-400 bg-clip-text text-transparent">
                        Featured Tattoo Styles
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore our signature tattoo styles crafted by master artists
                    </p>
                </div>

                <div ref={cardsRef} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {designs.slice(0, visibleDesigns).map((design) => (
                        <div
                            key={design.id}
                            className="tattoo-card parallax-card relative group bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/20 dark:hover:shadow-red-900/40 transition-all duration-500"
                        >
                            <div className="relative aspect-square overflow-hidden border-8 border-gray-100 dark:border-gray-900">
                                <Image
                                    src={design.image}
                                    alt={design.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out-expo"
                                    loading="lazy"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-500">
                                    <div className="absolute bottom-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-2xl font-bold text-red-600 dark:text-red-500 mb-2">{design.title}</h3>
                                        <p className="text-gray-100 dark:text-gray-300 text-sm line-clamp-2">{design.description}</p>
                                        <div
                                            onClick={() => router.push("/gallery")}
                                            className="mt-4 hover:cursor-pointer inline-flex items-center text-red-500 dark:text-red-400 opacity-0 group-hover:opacity-100 group-hover:text-red-600 dark:group-hover:text-red-300 transition-all">
                                            <span>
                                                view more
                                            </span>
                                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleDesigns < designs.length && (
                    <div className="text-center mt-16">
                        <button
                            onClick={() => router.push("/gallery")}
                            className="bg-gray-900 dark:bg-white hover:bg-red-700 dark:hover:bg-red-500 text-white dark:text-black px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-red-500/30 hover:cursor-pointer"
                        >
                            Load More Styles
                        </button>
                    </div>
                )}
            </section>
        </>
    )
}
export default TattooDesigns