import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Education = () => {
    const navigate = useNavigate()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    }

    return (
        <section id="education" className="section-container bg-transparent py-24 rounded-[3rem] my-10 relative">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="text-center mb-16">
                    <motion.h2 variants={cardVariants} className="heading-lg">
                        <span className="text-[var(--color-primary-500)]">Education</span>
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -5 }}
                        className="card group flex flex-col overflow-hidden relative p-8 md:p-12 shadow-lg dark:shadow-[var(--color-primary-500)]/10 border border-gray-100 dark:border-gray-800"
                    >
                        <div className="flex flex-col gap-3">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white group-hover:text-[var(--color-primary-500)] transition-colors duration-300">
                                SMK Telkom Sidoarjo
                            </h3>
                            <p className="text-lg md:text-xl text-[var(--color-primary-500)] font-semibold mb-4">
                                Telecommunication Access Network Engineering
                            </p>

                            <div className="mb-8">
                                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                                    A graduate of SMK Telkom Sidoarjo majoring in Telecommunication Access Network Engineering with a strong interest in networking and telecommunication systems. Achieved an average academic score of 86.16 throughout 3 years of study. Also participated in the Digital Talent Program as a Network Engineer trainee, gaining additional knowledge and practical experience in computer networking and network infrastructure.
                                </p>
                            </div>

                            <div className="mt-auto flex justify-start">
                                <button
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                        navigate('/projects');
                                    }}
                                    className="cursor-target inline-flex items-center justify-center px-6 py-3 text-base rounded-full bg-[var(--color-primary-50)] dark:bg-pink-900/30 text-[var(--color-primary-600)] dark:text-pink-300 font-medium hover:bg-[var(--color-primary-500)] hover:text-white dark:hover:bg-[var(--color-primary-500)] transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
                                >
                                    View Detail
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Education
