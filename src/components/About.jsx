'use client';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';
import profileImg from '../assets/vina-profile.jpeg';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

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
                    <motion.div
                        variants={itemVariants}
                        className="w-24 h-1 bg-[var(--color-primary-500)] mx-auto rounded-full"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="heading-md text-gray-800 dark:text-gray-100">
                            Fresh Graduate from SMK Telkom Sidoarjo
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            My name is Vina Bunga Livia. Fresh graduate from SMK Telkom Sidoarjo majoring in Telecommunication Access Network Engineering, with experience in financial administration and finance support. Skilled in preparing documents and work documentation using Microsoft Word and Microsoft Excel accurately and neatly. Possess strong communication skills, able to work effectively in a team, and highly motivated to learn and take responsibility in completing tasks professionally.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            I have a strong interest in coding, which I pursue to enhance my logical thinking, problem-solving abilities, and technical skills in networking and technology.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="w-full flex justify-center items-center"
                    >
                        <ProfileCard
                            imageSrc={profileImg}
                            name="Vina Bunga Livia"
                            tag="Telecommunication Access Network Engineering"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;