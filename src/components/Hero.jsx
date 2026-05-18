import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profileImg from '../assets/vina-profile.jpeg'
import TiltedCard from './TiltedCard'

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-primary-200)] dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-50 animate-blob pointer-events-none"></div>
            <div className="absolute top-40 -left-10 w-72 h-72 bg-[#fda4af] dark:bg-rose-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#fbcfe8] dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-50 animate-blob animation-delay-4000 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-start"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
                            Hi, I'm <span className="bg-gradient-to-r from-[var(--color-primary-500)] to-[#f43f5e] bg-clip-text text-transparent">Vina Bunga Livia</span>
                            <br />
                            this is my portfolio.
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
                            fresh graduate from Telecommunication Access Network Engineering SMK Telkom Sidoarjo.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[var(--color-primary-500)] to-[#e11d48] text-white font-medium shadow-lg hover:shadow-pink-500/30 transition-shadow cursor-pointer"
                            >
                                View My Work
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3.5 rounded-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700 hover:border-pink-400 dark:hover:border-pink-500 transition-colors cursor-pointer"
                            >
                                Contact Me
                            </motion.button>
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
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-200)] to-[#fecdd3] dark:from-pink-900/40 dark:to-rose-900/40 rounded-[40px] rotate-3 scale-105 transition-transform duration-500 hover:rotate-6 pointer-events-none"></div>
                            {/* Actual photo */}
                            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-[40px] overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl flex items-center justify-center text-gray-400 z-10">
                                <TiltedCard
                                    imageSrc={profileImg}
                                    altText="Vina Bunga Livia"
                                    captionText="Vina Bunga Livia"
                                    containerHeight="100%"
                                    containerWidth="100%"
                                    imageHeight="100%"
                                    imageWidth="100%"
                                    rotateAmplitude={12}
                                    scaleOnHover={1.05}
                                    showMobileWarning={false}
                                    showTooltip={true}
                                    displayOverlayContent={true}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
