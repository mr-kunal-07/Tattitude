'use client'
import { motion } from 'framer-motion'
import { BsWhatsapp, BsInstagram, BsFacebook, BsClock } from 'react-icons/bs'
import { MdLocationPin, MdEmail } from 'react-icons/md'

const ContactPage = () => {
    return (
        <div className="overflow-x-hidden min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
            {/* Hero Section */}
            <section className="relative h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/contact-bg.jpg')] bg-cover bg-center opacity-30" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative text-center z-10"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400">Where Art Meets Skin</p>
                </motion.div>
            </section>

            {/* Contact Content */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        {/* Address */}
                        <div className="flex items-start space-x-4 bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700/50">
                            <MdLocationPin className="text-red-500 text-2xl mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Our Studio</h3>
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    Chitrakoot blg, Juhu Rd,<br />
                                    Juhi, Mumbai<br />
                                    Maharashtra 400049
                                </p>
                            </div>
                        </div>

                        {/* Phone/Email */}
                        <div className="flex items-start space-x-4 bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700/50">
                            <MdEmail className="text-red-500 text-2xl mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Contact Info</h3>
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    <a href="tel:+919773347222" className="hover:text-red-400 transition-colors">
                                        +91 9136136364
                                    </a><br />
                                    <a href="mailto:hello@tattitude.in" className="hover:text-red-400 transition-colors">
                                        hello@tattitude.in
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="flex items-start space-x-4 bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700/50">
                            <BsClock className="text-red-500 text-2xl mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Working Hours</h3>
                                <div className="grid grid-cols-2 gap-4 text-zinc-600 dark:text-zinc-400">
                                    <div>Tuesday - Friday</div>
                                    <div className="text-red-400">10 AM - 8 PM</div>
                                    <div>Saturday - Sunday</div>
                                    <div className="text-red-400">10 AM - 8 PM</div>
                                    <div>Monday</div>
                                    <div className="text-zinc-400 dark:text-zinc-500">Closed</div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="flex items-center space-x-6 bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700/50">
                            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-red-400 transition-colors">
                                <BsInstagram className="text-2xl" />
                            </a>
                            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-red-400 transition-colors">
                                <BsFacebook className="text-2xl" />
                            </a>
                            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-red-400 transition-colors">
                                <BsWhatsapp className="text-2xl" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="h-full min-h-[500px] bg-zinc-100 dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700/50"
                    >
                        <iframe
                            title="Harsh Saloon Juhu Mumbai"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src="https://maps.google.com/maps?q=Harsh%20Saloon%20Juhu%20Mumbai&z=16&output=embed"
                        />
                    </motion.div>
                </div>

                {/* WhatsApp Floating Button */}
                <a
                    href="https://wa.me/+919773347222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-8 right-8 bg-green-500 p-4 rounded-full shadow-xl hover:bg-green-600 transition-colors"
                >
                    <BsWhatsapp className="text-2xl text-white" />
                </a>
            </section>

            {/* Footer Note */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center py-8 border-t border-zinc-200 dark:border-zinc-800"
            >
                <p className="text-zinc-500 dark:text-zinc-400">
                    Walk-ins welcome • Consultation recommended for complex designs
                </p>
            </motion.div>
        </div>
    )
}

export default ContactPage
