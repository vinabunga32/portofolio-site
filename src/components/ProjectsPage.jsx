import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projectsData'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'

const ProjectsPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
        <div className="min-h-screen pt-32 pb-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/')}
                    className="mb-8 inline-flex cursor-target items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[var(--color-primary-500)] dark:hover:text-[var(--color-primary-400)] transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Back Home</span>
                </motion.button>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="text-center mb-16 md:mb-20">
                        <motion.h1 variants={cardVariants} className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
                            School <span className="text-[var(--color-primary-500)]">Activities & Projects</span>
                        </motion.h1>
                        <motion.p variants={cardVariants} className="text-gray-600 dark:text-gray-400 max-w-4xl mx-auto text-lg md:text-xl pt-2 leading-relaxed">
                            This section showcases activities, practical work, and projects completed during school, including networking practices, telecommunication assignments, technical documentation, and other academic experiences related to Telecommunication Access Network Engineering.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={cardVariants}
                                whileHover={{ y: -10 }}
                                onClick={() => navigate(`/project/${project.slug}`)}
                                className="card group cursor-pointer flex flex-col h-full overflow-hidden relative"
                            >
                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full h-full object-cover ${project.position || 'object-center'} transition-transform duration-500 group-hover:scale-105`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 pointer-events-none">
                                        <span className="text-white font-medium bg-[var(--color-primary-500)]/80 px-4 py-2 rounded-full pointer-events-auto cursor-target">
                                            View Details
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-[var(--color-primary-500)] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
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
                </motion.div>
            </div>
        </div>
    )
}

export default ProjectsPage
