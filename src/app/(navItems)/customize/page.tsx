'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

const services = [
    {
        title: "Fresh Tattoo with Consultation",
        description: "Bring your vision to life with a new tattoo, including a free consultation.",
        price: "₹700 for Black, ₹1000 for Coloured (first sq. inch)",
        features: ["Free consultation", "Custom design", "Color options"]
    },
    {
        title: "Cover-Up Tattoos",
        description: "Transform existing tattoos into stunning new artwork.",
        price: "₹900 for Black & Grey, ₹1200 for Coloured (per sq. inch)",
        features: ["Expert color correction", "Strategic design planning"]
    },
    {
        title: "Big Tattoos",
        description: "Large-scale tattoos such as full forearm, hand, back, or leg designs.",
        price: "₹4500 per 8-hour session",
        features: ["Full-day session", "Intricate detailing", "Custom artwork"]
    },
    {
        title: "Cosmetic Tattoos",
        description: "Enhance or correct skin appearance with specialized tattooing techniques.",
        price: "₹500 for Moles/Beauty Spots, ₹1500 for Scar Cover Up (per sq. inch)",
        features: ["Moles/Beauty Spots", "Scar Cover Up", "Scalp Micropigmentation"]
    },
    {
        title: "Vitiligo Skin Matching",
        description: "Tattooing to match skin tones for vitiligo treatment.",
        price: "₹2000 for first sq. inch (first sitting)",
        features: ["Precise color matching", "Multiple sittings", "Touch-up included"]
    },
    {
        title: "Portraits / Animal Tattoos",
        description: "Detailed portraits or animal designs in black & grey or full color.",
        price: "₹8000 to ₹29000 based on size and color",
        features: ["5-6 inch or 10-12 inch options", "Black & Grey or Coloured"]
    }
]

const pricingData = [
    { type: "Small Tattoo", description: "Ideal for tiny minimalist designs, perfect for first-timers." },
    { type: "Medium Tattoo", description: "More detailed pieces like quotes, symbols, or mid-sized artwork." },
    { type: "Fresh Black Tattoo", description: "Clean black ink tattoos with sharp line work and basic shading." },
    { type: "Fresh Coloured Tattoo", description: "Vibrant colored tattoos that pop with lively hues and tones." },
    { type: "Cover-Up Black & Grey", description: "Strategic black and grey designs to mask old or faded tattoos." },
    { type: "Cover-Up Coloured", description: "Colorful cover-ups for bold transformations over existing tattoos." },
    { type: "Big Tattoo", description: "Large, intricate designs like full sleeves, backs, or large body art." },
    { type: "Cosmetic Tattoo - Moles/Beauty Spots", description: "Tiny detailed tattoos to create beauty spots or moles." },
    { type: "Cosmetic Tattoo - Scar Cover Up", description: "Specialized techniques to artistically blend scars into the skin." },
    { type: "Vitiligo Skin Matching", description: "Skin tone matching for treating vitiligo patches seamlessly." },
    { type: "Portrait Tattoo (5-6 inch)", description: "Lifelike portraits or animal designs, black & grey or colored." },
    { type: "Portrait Tattoo (10-12 inch)", description: "Highly detailed, larger portraits requiring longer sittings." }
];


const faqs = [
    {
        question: "How do I prepare for my appointment?",
        answer: "Stay hydrated, avoid alcohol 24 hours before, and eat a good meal."
    },
    {
        question: "What are the costs for touch-up tattoos?",
        answer: "For in-house tattoos: free within 6 months; ₹500 for black and ₹600 for coloured per sq. inch after 6 months. For tattoos from other studios: ₹1000 for black and ₹1500 for coloured per sq. inch."
    },
    {
        question: "What does cosmetic tattooing include?",
        answer: "Cosmetic tattooing covers moles/beauty spots (₹500 per inch), scar cover-up (₹1500 per sq. inch), and scalp micropigmentation (₹2500 to ₹8000 based on area)."
    },
    {
        question: "How is pricing determined for big tattoos?",
        answer: "Big tattoos are priced at ₹4500 per 8-hour session, covering large-scale designs like full forearm, hand, back, or leg tattoos."
    }
]

const ServicesPage = () => {
    const router = useRouter()

    return (
        <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/services-hero.jpg')] bg-cover bg-center opacity-20 dark:opacity-30" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative text-center z-10"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                        Our Services
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400">Where Art Meets Skin</p>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.description}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-zinc-100 dark:bg-zinc-800/50 p-8 rounded-2xl border border-zinc-300 dark:border-zinc-700/50 hover:border-red-500 transition-colors"
                        >
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-6">{service.description}</p>
                            <div className="text-red-500 text-xl mb-6">{service.price}</div>
                            <ul className="space-y-3">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-zinc-600 dark:text-zinc-400">
                                        <FiCheckCircle className="text-red-500 mr-2" /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 bg-zinc-100 dark:bg-zinc-950 transition-colors">
                <div className="max-w-7xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-4">Tattoo Types & Details</h2>
                        <div className="w-24 h-1 bg-red-500 mx-auto" />
                    </motion.div>

                    <div className="space-y-6">
                        {pricingData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => {
                                    const phone = "919136136364";
                                    const type = item?.type || "Tattoo"; // fallback if item.type is missing
                                    const msg = `Hi, I want to book for a ${type}. Can you help me with slots?`;
                                    const encodedMsg = encodeURIComponent(msg);
                                    const link = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMsg}`;
                                    window.open(link, "_blank");
                                }}

                                className="flex justify-between items-start bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-300 dark:border-zinc-700/50 hover:border-red-500 cursor-pointer transition-all"
                            >
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{item.type}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 max-w-lg text-right">{item.description}</p>
                            </motion.div>
                        ))}

                    </div>

                    <p className="text-zinc-500 text-sm mt-6 text-center">* Descriptions may vary based on individual designs and consultation</p>


                    <p className="text-zinc-500 text-sm mt-6">* Prices may vary based on design complexity</p>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
                        <div className="w-24 h-1 bg-red-500 mx-auto" />
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-300 dark:border-zinc-700/50"
                            >
                                <div className="flex items-center justify-between cursor-pointer">
                                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                                    <FiArrowRight className="text-red-500 transform transition-transform" />
                                </div>
                                <p className="mt-4 text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* CTA */}
            <section className="pb-20 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="max-w-2xl mx-auto bg-zinc-100 dark:bg-zinc-800/50 p-8 rounded-2xl border border-zinc-300 dark:border-zinc-700/50"
                >
                    <h2 className="text-2xl font-bold mb-4">Ready to Start Your Ink Journey?</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                        Book your free consultation for custom tattoos, cover-ups, or cosmetic tattooing today!
                    </p>
                    <Button className="bg-black text-white hover:bg-red-500 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 dark:bg-white dark:text-black">
                        <Link href="https://wa.me/+919136136364" target="_blank">
                            Schedule Consultation
                        </Link>
                    </Button>
                </motion.div>
            </section>
        </div>
    )
}

export default ServicesPage
