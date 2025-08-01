'use client'
import { motion } from 'framer-motion'

type Step = {
    title: string,
    desc: string,
}[]

const steps: Step = [
    { title: 'Consultation', desc: 'Discuss your ideas with our artists' },
    { title: 'Design', desc: 'Custom artwork creation' },
    { title: 'Approval', desc: 'Review and refine design' },
    { title: 'Session', desc: 'Professional tattooing' },
    { title: 'Aftercare', desc: 'Healing guidance' }
]

export default function ProcessSteps() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    }

    const StepCard = ({ step, idx }: { step: { title: string; desc: string }; idx: number }) => (
        <motion.div
            key={step.title}
            variants={itemVariants}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 0, 0, 0.3)",
                transition: { duration: 0.3 }
            }}
            className="w-full max-w-xs md:w-64 p-6 rounded-xl transition-all duration-300 border border-red-600 relative overflow-hidden group bg-zinc-100 dark:bg-zinc-900"
        >
            <motion.div
                className="absolute -top-10 -left-10 w-20 h-20 bg-red-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                whileHover={{ scale: 1.2 }}
            />

            <div className="text-red-600 text-3xl font-bold mb-4">0{idx + 1}</div>
            <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white">{step.title}</h3>
            <p className="text-zinc-700 dark:text-zinc-400 text-sm">{step.desc}</p>

            <motion.div
                className="w-0 h-1 bg-red-600 absolute bottom-0 left-0"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
            />
        </motion.div>
    )

    return (
        <section className="bg-white dark:bg-black py-16 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-red-500 via-red-400 to-yellow-400 bg-clip-text text-transparent"
                >
                    Our Process
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col gap-8 items-center sm:grid sm:grid-cols-2 sm:gap-8 sm:place-items-center"
                >
                    {/* Top Row: first 2 cards */}
                    {steps.slice(0, 2).map((step, idx) => (
                        <StepCard key={step.title} step={step} idx={idx} />
                    ))}

                    {/* Middle Row: one card centered */}
                    <motion.div className="sm:col-span-2 flex justify-center">
                        {steps[2] && <StepCard step={steps[2]} idx={2} />}
                    </motion.div>

                    {/* Bottom Row: last 2 cards */}
                    {steps.slice(3).map((step, idx) => (
                        <StepCard key={step.title} step={step} idx={idx + 3} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
