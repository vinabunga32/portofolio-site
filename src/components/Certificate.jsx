import { motion } from 'framer-motion'

const Certificate = () => {
    const certificates = [
        {
            id: 1,
            title: "Google UX Design",
            issuer: "Coursera",
            date: "Oct 2023",
            image: "https://placehold.co/600x400/fdf2f8/db2777?text=UX+Certificate"
        },
        {
            id: 2,
            title: "Advanced React Patterns",
            issuer: "Frontend Masters",
            date: "Aug 2023",
            image: "https://placehold.co/600x400/fce7f3/be185d?text=React+Certificate"
        },
        {
            id: 3,
            title: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            date: "Jan 2023",
            image: "https://placehold.co/600x400/fbcfe8/9d174d?text=AWS+Certificate"
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
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    }

    return (
        <section id="certificate" className="section-container bg-gray-50/50 dark:bg-gray-900/20 py-24 rounded-[3rem] my-10 relative">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="text-center mb-16">
                    <motion.h2 variants={cardVariants} className="heading-lg">
                        My <span className="text-[var(--color-primary-500)]">Certificates</span>
                    </motion.h2>
                    <motion.p variants={cardVariants} className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg pt-2">
                        Continuous learning is part of my journey. Here are some of my professional certifications.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.id}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="card group"
                        >
                            <div className="p-2">
                                <div className="relative overflow-hidden rounded-xl aspect-video border border-gray-100 dark:border-gray-800">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-4 py-2 bg-white text-gray-900 font-medium rounded-full text-sm shadow-lg"
                                        >
                                            View Credential
                                        </motion.button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 text-center">
                                <h3 className="text-lg font-bold mb-1 text-gray-800 dark:text-white">
                                    {cert.title}
                                </h3>
                                <p className="text-[var(--color-primary-500)] font-medium text-sm mb-2">
                                    {cert.issuer}
                                </p>
                                <span className="text-gray-500 dark:text-gray-400 text-xs">
                                    Issued: {cert.date}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Certificate
