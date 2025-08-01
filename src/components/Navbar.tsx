"use client"
import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { BsWhatsapp } from "react-icons/bs"
import { PhoneIncoming } from "lucide-react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type NavbarProps = {}

const Navbar: React.FC<NavbarProps> = () => {
    const { setTheme } = useTheme()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false)

    const handleMenuToggle = (): void => {
        setIsOpen((prev) => !prev)
        if (isOpen) setIsCategoryOpen(false)
    }

    const handleCategoryToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault()
        setIsCategoryOpen((prev) => !prev)
    }

    const handleLocateStudio = () => {
        window.open(
            "https://www.google.com/maps/place/Tattitude+%7C+Tattoo+Studio+Juhu/@19.1086725,72.8238247,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9b3336e6035:0xed2599a4c9cac959!8m2!3d19.1086725!4d72.8263996!16s%2Fg%2F11x28sj020?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D",
            "_blank",
        )
    }

    return (
        <nav className="fixed w-full z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
                        >
                            TATITUDE
                        </motion.span>
                    </Link>

                    {/* Right Side Controls */}
                    <div className="flex items-center space-x-4">
                        {/* Locate Us */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={handleLocateStudio}
                            className="hidden md:block px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg text-gray-700 dark:text-zinc-300 hover:border-red-500 hover:text-red-500 dark:hover:text-red-400 transition-all"
                        >
                            Locate Studio
                        </motion.button>

                        {/* WhatsApp */}
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            href="https://wa.me/+919136136364"
                            target="_blank"
                            className="text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300"
                            rel="noreferrer"
                        >
                            <BsWhatsapp className="h-6 w-6" />
                        </motion.a>

                        {/* Phone */}
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            href="tel:+919136136364"
                            className="text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300"
                        >
                            <PhoneIncoming className="h-6 w-6" />
                        </motion.a>

                        {/* Theme Toggle */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] text-black rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Hamburger */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            onClick={handleMenuToggle}
                            className="text-gray-700 dark:text-zinc-300 hover:text-red-500 dark:hover:text-red-400"
                        >
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="pb-4 border-t border-gray-200 dark:border-zinc-800 mt-2"
                    >
                        <div className="space-y-1 px-2 pt-2">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                onClick={() => {
                                    handleLocateStudio()
                                    setIsOpen(false)
                                }}
                                className="md:hidden w-full text-left block px-3 py-3 text-gray-700 dark:text-zinc-300 hover:text-red-500 dark:hover:text-red-400 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors"
                            >
                                LOCATE STUDIO
                            </motion.button>

                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-gray-700 dark:text-zinc-300 hover:text-red-500 dark:hover:text-red-400 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors"
                            >
                                HOME
                            </Link>

                            <Link
                                href="/customize"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-gray-700 dark:text-zinc-300 hover:text-red-500 dark:hover:text-red-400 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors"
                            >
                                SERVICES
                            </Link>

                            <Link
                                href="/about"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-gray-700 dark:text-zinc-300 hover:text-red-500 dark:hover:text-red-400 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors"
                            >
                                ABOUT
                            </Link>

                            <Link
                                href="/contact-us"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-gray-700 dark:text-zinc-300 hover:text-red-500 dark:hover:text-red-400 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors"
                            >
                                CONTACT US
                            </Link>

                            <Link
                                href="/booking"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-gray-700 dark:text-zinc-300 hover:text-red-500 dark:hover:text-red-400 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors"
                            >
                                BOOK APPOINTMENT
                            </Link>

                            <Link
                                href="/aftercare"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-gray-700 dark:text-zinc-300 hover:text-red-500 dark:hover:text-red-400 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors"
                            >
                                AFTER-CARE
                            </Link>

                            <Link
                                href="/blogs"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-gray-700 dark:text-zinc-300 hover:text-red-500 dark:hover:text-red-400 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors"
                            >
                                BLOG
                            </Link>

                            <Link
                                href="/admin/login"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-gray-700 dark:text-zinc-300 hover:text-red-500 dark:hover:text-red-400 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors"
                            >
                                ADMIN LOGIN
                            </Link>
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar