import { motion } from 'framer-motion'

const About = () => {
    const skills = [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Framer Motion', level: 75 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Git', level: 80 }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    return (
        <section id="about" className="section-container relative">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="text-center mb-16">
                    <motion.h2 variants={itemVariants} className="heading-lg">
                        About <span className="text-[var(--color-primary-500)]">Me</span>
                    </motion.h2>
                    <motion.div variants={itemVariants} className="w-24 h-1 bg-[var(--color-primary-500)] mx-auto rounded-full"></motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="heading-md text-gray-800 dark:text-gray-100">
                            Passionate Frontend Developer creating beautiful experiences
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            I am a web developer with a strong focus on creating clean, elegant, and highly performant user interfaces. My journey in web development started with a passion for design and technology, which perfectly combines in frontend development.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            When I'm not coding, you can find me exploring new design trends, reading tech blogs, or enjoying a good cup of coffee.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="card p-8">
                        <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Technical Skills</h3>
                        <div className="space-y-5">
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                        <motion.div
                                            className="bg-gradient-to-r from-[var(--color-primary-400)] to-[var(--color-primary-600)] h-2.5 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                            viewport={{ once: true }}
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default About
