'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const quizQuestions = [
    {
        question: "What's your preferred aesthetic?",
        options: [
            { text: "Bold & Traditional", result: "Traditional" },
            { text: "Realistic Details", result: "Realism" },
            { text: "Watercolor Effects", result: "Watercolor" },
            { text: "Geometric Patterns", result: "Geometric" }
        ]
    },
    {
        question: "Which color palette appeals to you most?",
        options: [
            { text: "Rich and Deep", result: "Dark" },
            { text: "Bright and Vibrant", result: "Vibrant" },
            { text: "Soft Pastels", result: "Pastel" },
            { text: "Earth Tones", result: "Earthy" }
        ]
    },
    {
        question: "What pace best suits your workflow?",
        options: [
            { text: "Fast & Energetic", result: "Energetic" },
            { text: "Calm & Methodical", result: "Calm" },
            { text: "Innovative & Adaptive", result: "Innovative" },
            { text: "Classic & Steady", result: "Classic" }
        ]
    }
]

export default function StyleQuiz() {
    const [currentStep, setCurrentStep] = useState(0)
    const [results, setResults] = useState<string[]>([])
    const [quizCompleted, setQuizCompleted] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleAnswer = (result: string) => {
        const newResults = [...results, result]
        setResults(newResults)

        if (currentStep < quizQuestions.length - 1) {
            setCurrentStep(currentStep + 1)
        } else {
            setQuizCompleted(true)
            console.log('Quiz completed with results:', newResults)
        }
    }

    const handleSubmit = () => {
        console.log('Submitted quiz results:', results)
        setSubmitted(true)
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
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

    return (
        <section className="py-4 bg-white dark:bg-black transition-colors duration-500">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-8 text-zinc-900 dark:text-white"
                >
                    Find Your <span className="text-red-600">Perfect Style</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-zinc-100 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-300 dark:border-zinc-800 shadow-lg"
                >
                    {!quizCompleted && quizQuestions[currentStep] && (
                        <>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                key={currentStep}
                                className="text-xl mb-8 text-zinc-700 dark:text-gray-200"
                            >
                                {quizQuestions[currentStep].question}
                            </motion.p>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid md:grid-cols-2 gap-4"
                            >
                                {quizQuestions[currentStep].options.map((option) => (
                                    <motion.button
                                        key={option.text}
                                        variants={itemVariants}
                                        whileHover={{
                                            scale: 1.03,
                                            boxShadow: "0 0 12px rgba(255, 0, 0, 0.2)",
                                            borderColor: "#dc2626"
                                        }}
                                        className="p-6 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all duration-300 relative overflow-hidden group"
                                        onClick={() => handleAnswer(option.result)}
                                    >
                                        <motion.span className="relative z-10">
                                            {option.text}
                                        </motion.span>
                                        <motion.div
                                            className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                        />
                                    </motion.button>
                                ))}
                            </motion.div>

                            <motion.div className="flex justify-center mt-8">
                                <span className="text-zinc-500 text-sm">
                                    Question {currentStep + 1} of {quizQuestions.length}
                                </span>
                            </motion.div>
                        </>
                    )}

                    {quizCompleted && !submitted && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-zinc-700 dark:text-gray-200"
                        >
                            <h3 className="text-2xl mb-4">Review Your Answers</h3>
                            <ul className="mb-6">
                                {results.map((result, index) => (
                                    <li key={index} className="mb-2">
                                        <strong>Q{index + 1}:</strong> {result}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={handleSubmit}
                                className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                            >
                                Submit
                            </button>
                        </motion.div>
                    )}

                    {submitted && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-zinc-700 dark:text-gray-200"
                        >
                            <h3 className="text-2xl mb-4">Thank you!</h3>
                            <p>Your quiz results have been submitted.</p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
