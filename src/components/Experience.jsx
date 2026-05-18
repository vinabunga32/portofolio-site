// src/components/Experience.jsx
import React from "react";
import { timelineData } from "./ExperienceData";
import { useNavigate } from "react-router-dom";

const Experience = () => {
    const navigate = useNavigate();

    return (
        <section id="experience" className="section-container relative">
            <div className="max-w-4xl mx-auto py-10">
                <h2 className="text-3xl font-bold text-center mb-6">My Experience</h2>

                <div className="space-y-6">
                    {timelineData.map((item, idx) => (
                        <div key={idx} className="p-6 card transition-all duration-300 group">
                            <h3 className="text-xl font-bold text-[var(--color-primary-500)] mb-1">{item.role}</h3>
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.company}</h4>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">{item.description}</p>
                            <span className="inline-block mt-4 text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">{item.title}</span>

                            {item.role === 'Finance Intern' && (
                                <div className="mt-6 flex justify-start">
                                    <button
                                        onClick={() => {
                                            window.scrollTo(0, 0);
                                            navigate('/internship');
                                        }}
                                        className="cursor-target inline-flex items-center justify-center px-5 py-2 text-sm rounded-full bg-[var(--color-primary-50)] dark:bg-pink-900/30 text-[var(--color-primary-600)] dark:text-pink-300 font-medium hover:bg-[var(--color-primary-500)] hover:text-white dark:hover:bg-[var(--color-primary-500)] transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
                                    >
                                        View Detail
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        href="/CV_VINA.pdf"
                        download="CV_VINA_Admin.pdf"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[var(--color-primary-500)] to-[#e11d48] text-white font-bold hover:shadow-lg hover:shadow-pink-500/30 transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 12 12 16.5m0 0L16.5 12M12 16.5V3" />
                        </svg>
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Experience;