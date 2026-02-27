import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-primary-200)] dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-40 -left-10 w-72 h-72 bg-[#fda4af] dark:bg-rose-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#fbcfe8] dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-start"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="px-4 py-2 rounded-full bg-[var(--color-primary-50)] dark:bg-pink-950/30 text-[var(--color-primary-600)] dark:text-pink-300 text-sm font-medium tracking-wide mb-6 border border-[var(--color-primary-100)] dark:border-pink-900/50"
                        >
                            🚀 Welcome to my portfolio
                        </motion.span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
                            Hi, I'm <span className="bg-gradient-to-r from-[var(--color-primary-500)] to-[#f43f5e] bg-clip-text text-transparent">Your Name</span>
                            <br />
                            Frontend Developer.
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
                            I build modern, beautifully designed web experiences utilizing React, Tailwind CSS, and Framer Motion.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[var(--color-primary-500)] to-[#e11d48] text-white font-medium shadow-lg hover:shadow-pink-500/30 transition-shadow"
                            >
                                View My Work
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="px-8 py-3.5 rounded-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700 hover:border-pink-400 dark:hover:border-pink-500 transition-colors"
                            >
                                Contact Me
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Image/Visual Right Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-200)] to-[#fecdd3] dark:from-pink-900/40 dark:to-rose-900/40 rounded-[40px] rotate-3 scale-105 transition-transform duration-500 hover:rotate-6"></div>
                            {/* Replace placeholder with actual photo */}
                            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-[40px] overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl flex items-center justify-center text-gray-400">
                                <span className="text-lg font-medium">Your Photo Here</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
