import { motion } from 'framer-motion'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            description: "A comprehensive admin dashboard for e-commerce with real-time data visualization.",
            image: "https://placehold.co/600x400/fce7f3/db2777?text=Project+1",
            tags: ["React", "Tailwind CSS", "Recharts"]
        },
        {
            id: 2,
            title: "Social Media App",
            description: "A minimalistic social platform focusing on visually appealing content sharing.",
            image: "https://placehold.co/600x400/fdf2f8/ec4899?text=Project+2",
            tags: ["React", "Firebase", "Framer Motion"]
        },
        {
            id: 3,
            title: "Landing Page Builder",
            description: "Drag and drop interface for creating quick marketing pages.",
            image: "https://placehold.co/600x400/fbcfe8/be185d?text=Project+3",
            tags: ["React Native", "Expo", "Redux"]
        }
    ]

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
        <section id="projects" className="section-container bg-gray-50/50 dark:bg-gray-900/20 py-24 rounded-[3rem] my-10 relative">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="text-center mb-16">
                    <motion.h2 variants={cardVariants} className="heading-lg">
                        Featured <span className="text-[var(--color-primary-500)]">Projects</span>
                    </motion.h2>
                    <motion.p variants={cardVariants} className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg pt-2">
                        Here are some of my recent works. Each project was built with a focus on user experience and clean code.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="card group cursor-pointer"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        href="#"
                                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-[var(--color-primary-500)] transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        href="#"
                                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-[var(--color-primary-500)] transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                        </svg>
                                    </motion.a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-[var(--color-primary-500)] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-primary-50)] dark:bg-pink-900/30 text-[var(--color-primary-600)] dark:text-pink-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:border-[var(--color-primary-300)] dark:hover:border-[var(--color-primary-700)] hover:text-[var(--color-primary-500)] transition-all shadow-sm"
                    >
                        View More Projects
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </motion.a>
                </div>
            </motion.div>
        </section>
    )
}

export default Projects
