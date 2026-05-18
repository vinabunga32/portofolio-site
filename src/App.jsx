import { useState, useEffect } from "react"
import { Home, User, GraduationCap, Briefcase, Mail, Sun, Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Routes, Route, useLocation } from "react-router-dom"

import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import TargetCursor from "./components/TargetCursor"
import LiquidEther from "./components/LiquidEther"
import SplitText from "./components/SplitText"
import ProjectDetail from "./components/ProjectDetail"
import ProjectsPage from "./components/ProjectsPage"
import InternshipPage from "./components/InternshipPage"
import InternshipDetail from "./components/InternshipDetail"
import "./App.css"

const navItems = [
  { name: "Home", url: "/#home", icon: Home },
  { name: "About", url: "/#about", icon: User },
  { name: "Education", url: "/#education", icon: GraduationCap },
  { name: "Experience", url: "/#experience", icon: Briefcase },
  { name: "Contact", url: "/#contact", icon: Mail },
]

const introTexts = [
  "Hello, you!",
  "I'm Vina Bunga Livia",
  "This is my website",
]

const MainView = () => (
  <main className="flex-grow">
    <section id="home"><Hero /></section>
    <section id="about"><About /></section>
    <section id="education"><Education /></section>
    <section id="experience"><Experience /></section>
    <section id="contact"><Contact /></section>
  </main>
)

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [introIndex, setIntroIndex] = useState(0)
  const location = useLocation()

  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  // Handle hash scrolling and scroll to top on path changes
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "")
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 500)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  const handleIntroNext = () => {
    if (introIndex < introTexts.length - 1) {
      setIntroIndex((prev) => prev + 1)
    } else {
      setShowIntro(false)
    }
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black overflow-visible"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={introIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center overflow-visible"
                style={{ lineHeight: "1.3" }}
              >
                <SplitText
                  text={introTexts[introIndex]}
                  className="text-4xl md:text-5xl font-bold text-[var(--color-primary-500)]"
                  delay={60}
                  duration={1.2}
                  splitType="chars"
                  from={{ opacity: 0, y: 50 }}
                  to={{ opacity: 1, y: 0 }}
                  onLetterAnimationComplete={handleIntroNext}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && (
        <div className="min-h-screen flex flex-col w-full overflow-x-hidden transition-colors duration-300">
          {darkMode && (
            <div className="fixed inset-0 -z-10 dark-bg-gradient" />
          )}

          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="fixed top-6 right-6 lg:top-8 lg:right-12 z-[100] p-3 rounded-full
              bg-white/20 dark:bg-gray-900/40 border border-gray-200/50 dark:border-gray-800/50
              backdrop-blur-xl text-gray-800 dark:text-gray-200
              hover:text-[var(--color-primary-500)] dark:hover:text-[var(--color-primary-400)]
              transition-colors shadow-lg"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <TargetCursor
            spinDuration={2}
            hideDefaultCursor
            parallaxOn
            hoverDuration={0.2}
            targetSelector=".cursor-target, a, button, img, [role='button']"
          />

          <NavBar items={navItems} />

          <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/internship" element={<InternshipPage />} />
            <Route path="/internship/:slug" element={<InternshipDetail />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  )
}

export default App