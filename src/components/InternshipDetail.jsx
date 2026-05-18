import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { internshipData } from '../data/internshipData'
import { useEffect } from 'react'

const InternshipDetail = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const item = internshipData.find(d => d.slug === slug)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!item) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Experience Not Found</h1>
                    <button
                        onClick={() => navigate('/internship')}
                        className="text-[var(--color-primary-500)] hover:underline"
                    >
                        Return to Internship Page
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
                    onClick={() => navigate('/internship')}
                    className="inline-flex items-center gap-2 mb-12 text-gray-600 dark:text-gray-400 hover:text-[var(--color-primary-500)] transition-colors group cursor-target"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Internship
                </motion.button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {item.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-primary-50)] dark:bg-pink-900/30 text-[var(--color-primary-600)] dark:text-pink-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                                {item.title}
                            </h1>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2 inline-block">
                                What I Did
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                {item.details}
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square max-h-[500px]"
                    >
                        <img
                            src={item.detailImage}
                            alt={item.title}
                            className={`w-full h-full object-cover ${item.position || 'object-center'}`}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default InternshipDetail
