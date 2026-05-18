import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { projects } from '../data/projectsData'
import { useEffect } from 'react'

const ProjectDetail = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const project = projects.find(p => p.slug === slug)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="text-[var(--color-primary-500)] hover:underline"
                    >
                        Return to Home
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-28 pb-20 dark:bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/projects')}
                    className="inline-flex items-center gap-2 mb-12 text-gray-600 dark:text-gray-400 hover:text-[var(--color-primary-500)] transition-colors group cursor-target"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </motion.button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Project Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square max-h-[500px]"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className={`w-full h-full object-cover ${project.position || 'object-center'}`}
                        />
                    </motion.div>

                    {/* Right: Project Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-primary-50)] dark:bg-pink-900/30 text-[var(--color-primary-600)] dark:text-pink-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                                {project.title}
                            </h1>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2 inline-block">
                                What I Did
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                {project.details}
                            </p>
                        </div>

                        {project.docsUrl && (
                            <div className="pt-8">
                                <a
                                    href={project.docsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--color-primary-500)] to-[#e11d48] text-white font-bold shadow-lg hover:shadow-pink-500/30 transition-all hover:scale-[1.02] cursor-target"
                                >
                                    View Documentation
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </a>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
