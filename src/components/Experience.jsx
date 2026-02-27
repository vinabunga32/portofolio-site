import { motion } from 'framer-motion'

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Senior Frontend Developer",
            company: "Tech Solutions Inc.",
            duration: "2022 - Present",
            description: "Led a team of 4 developers in rebuilding the core platform using React and Tailwind CSS, improving load times by 40%."
        },
        {
            id: 2,
            role: "Web Developer",
            company: "Creative Agency",
            duration: "2020 - 2022",
            description: "Developed and maintained multiple client websites focusing on responsive design and interactive animations."
        },
        {
            id: 3,
            role: "Junior Developer",
            company: "Startup Hub",
            duration: "2018 - 2020",
            description: "Assisted in building MVP for a fintech application using HTML, CSS, and basic JavaScript."
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    }

    return (
        <section id="experience" className="section-container relative">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="text-center mb-16">
                    <motion.h2 variants={itemVariants} className="heading-lg">
                        My <span className="text-[var(--color-primary-500)]">Experience</span>
                    </motion.h2>
                    <motion.div variants={itemVariants} className="w-24 h-1 bg-[var(--color-primary-500)] mx-auto rounded-full"></motion.div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative border-l-2 border-[var(--color-primary-200)] dark:border-pink-900/40 ml-4 md:ml-0 md:pl-0 space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                variants={itemVariants}
                                className="relative md:flex items-center justify-between"
                            >
                                {/* Timeline dot */}
                                <div className="absolute -left-[9px] md:left-1/2 md:-translate-x-1/2 mt-1.5 md:mt-0 w-4 h-4 rounded-full bg-[var(--color-primary-500)] border-4 border-white dark:border-gray-900 shadow-sm z-10"></div>

                                {/* Content */}
                                <div className={`ml-8 md:ml-0 w-full md:w-[45%] ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto'}`}>
                                    <div className="card p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-[var(--color-primary-50)] dark:bg-pink-900/30 text-[var(--color-primary-600)] dark:text-pink-300">
                                            {exp.duration}
                                        </span>
                                        <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-white">
                                            {exp.role}
                                        </h3>
                                        <h4 className="text-lg font-medium text-[var(--color-primary-500)] dark:text-[var(--color-primary-400)] mb-3">
                                            {exp.company}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Experience
