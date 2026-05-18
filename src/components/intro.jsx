import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import SplitText from "./SplitText"

const texts = [
    "Hello you",
    "I'm Vina Bunga Livia",
    "This is my website",
]

export default function Intro({ onFinish }) {
    const [index, setIndex] = useState(0)

    const handleNext = () => {
        if (index < texts.length - 1) {
            setIndex(index + 1)
        } else {
            onFinish() // intro selesai
        }
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={index}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <SplitText
                    text={texts[index]}
                    className="text-4xl md:text-5xl font-bold text-white text-center"
                    delay={60}
                    duration={1.2}
                    splitType="chars"
                    from={{ opacity: 0, y: 60 }}
                    to={{ opacity: 1, y: 0 }}
                    onLetterAnimationComplete={handleNext}
                />
            </motion.div>
        </AnimatePresence>
    )
}