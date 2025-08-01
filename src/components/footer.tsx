'use client'
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import FloatingWhatsApp from "./floatingWhatsApp";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Branding */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                        TATITUDE
                    </h2>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                    {/* Column 1: Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 border-b-2 border-red-500 inline-block pb-1">
                            Quick Links
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <li><Link href="/" className="hover:text-red-500 transition-colors">Home</Link></li>
                            <li><Link href="/gallery" className="hover:text-red-500 transition-colors">Tattoo Style</Link></li>
                            <li><Link href="/customize" className="hover:text-red-500 transition-colors">Services</Link></li>
                            <li><Link href="/aftercare" className="hover:text-red-500 transition-colors">After Care</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Company */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 border-b-2 border-red-500 inline-block pb-1">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <li><Link href="/contact-us" className="hover:text-red-500 transition-colors">Contact Us</Link></li>
                            <li><Link href="/about" className="hover:text-red-500 transition-colors">Our Team</Link></li>
                            <li><Link href="/reviews" className="hover:text-red-500 transition-colors">Review</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Policies */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 border-b-2 border-red-500 inline-block pb-1">
                            Policies
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <li><Link href="/policies" className="hover:text-red-500 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/policies" className="hover:text-red-500 transition-colors">Refund Policy</Link></li>
                            <li><Link href="/policies" className="hover:text-red-500 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: More */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 border-b-2 border-red-500 inline-block pb-1">
                            More
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <li><Link href="/gallery" className="hover:text-red-500 transition-colors">Gallery</Link></li>
                            <li>
                                <Link
                                    href="/booking"
                                    className="hover:text-red-500 font-bold bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent transition-colors"
                                >
                                    Appointment
                                </Link>
                            </li>
                            <li><Link href="/blogs" className="hover:text-red-500 transition-colors">Blogs</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Social + Copyright */}
                <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center text-center">
                    {/* Social Icons */}
                    <div className="flex space-x-4 mb-4 sm:mb-0">
                        {[
                            { Icon: FaInstagram, link: "https://instagram.com/tattitude" },
                            { Icon: FaFacebookF, link: "https://facebook.com/tattitude" },
                            { Icon: FaYoutube, link: "https://youtube.com/tattitude" }
                        ].map(({ Icon, link }, i) => (
                            <Link
                                key={i}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-500 hover:text-red-500 transition-colors"
                            >
                                <Icon className="w-6 h-6" />
                            </Link>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                        <p>© {new Date().getFullYear()} Tattitude. All rights reserved.</p>
                        <p className="mt-1">Proudly inking Mumbai since 2015</p>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Icon */}
            <FloatingWhatsApp />
        </footer>
    );
};

export default Footer;
