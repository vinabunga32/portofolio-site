import { useState } from "react"
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"

const Contact = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const { name, email, message } = form

        // WhatsApp Integration
        const phoneNumber = "6289677171340"
        const template = `Hi, Saya ${name}, Email Saya ${email}. ${message}`
        const encodedMessage = encodeURIComponent(template)
        const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

        // Open WhatsApp
        window.open(waUrl, "_blank")

        setTimeout(() => {
            setForm({ name: "", email: "", message: "" })
        }, 1000)
    }

    const socials = [
        { Icon: FaEnvelope, href: "mailto:vinanalivia@gmail.com", hover: "hover:text-red-500" },
        { Icon: FaLinkedin, href: "https://www.linkedin.com/in/vina-bunga", hover: "hover:text-blue-500" },
        { Icon: FaInstagram, href: "https://www.instagram.com/vxynn._/", hover: "hover:text-pink-500" },
        { Icon: FaGithub, href: "https://github.com/vinabunga32", hover: "hover:text-gray-900 dark:hover:text-white" }
    ]

    return (
        <section
            id="contact"
            className="section-container py-20 relative z-10 scroll-mt-28"
        >
            <div className="max-w-2xl mx-auto">

                <div className="text-center mb-12">
                    <h2 className="heading-lg">
                        Get In <span className="text-[var(--color-primary-500)]">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-[var(--color-primary-500)] mx-auto rounded-full mt-4" />
                    <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg font-medium">
                        Got a project in mind? Let’s talk! Fill out the form below.
                    </p>
                </div>

                <div className="card p-8 sm:p-10 !rounded-[2rem]">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/20 border border-gray-200 dark:border-gray-700 focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-500)]/20 outline-none transition-all text-gray-800 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/20 border border-gray-200 dark:border-gray-700 focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-500)]/20 outline-none transition-all text-gray-800 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Your Message
                            </label>
                            <textarea
                                name="message"
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                required
                                placeholder="Tell me about your project"
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/20 border border-gray-200 dark:border-gray-700 focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-500)]/20 outline-none transition-all resize-none text-gray-800 dark:text-white"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--color-primary-500)] to-[#e11d48] text-white font-bold text-lg shadow-lg hover:shadow-pink-500/30 transition-all cursor-target"
                        >
                            Send to WhatsApp
                        </button>

                        <div className="flex justify-center items-center gap-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                            {socials.map(({ Icon, href, hover }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target={href.startsWith('mailto:') ? undefined : "_blank"}
                                    rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                                    className={`text-2xl text-gray-500 dark:text-gray-400 transition-all duration-200 hover:scale-110 ${hover}`}
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>

                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact