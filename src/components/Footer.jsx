const Footer = () => {
    return (
        <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-800 py-12 mt-10 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <a
                            href="#"
                            className="text-2xl font-bold bg-gradient-to-r from-[var(--color-primary-500)] to-[#f43f5e] bg-clip-text text-transparent inline-block mb-2"
                        >
                            Vina Bunga Livia.
                        </a>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Telecommunication Access Network Engineering Student.
                        </p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400 gap-4">
                    <p>© {new Date().getFullYear()} Vina Bunga Livia. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-[var(--color-primary-500)] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[var(--color-primary-500)] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
