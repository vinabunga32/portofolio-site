import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { SplitText as GSAPSplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(GSAPSplitText, useGSAP)

const SplitText = ({
  text,
  className = "",
  delay = 30,          // 🔥 dipercepat
  duration = 0.8,      // 🔥 dipercepat
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  textAlign = "center",
  tag = "p",
  onLetterAnimationComplete
}) => {
  const ref = useRef(null)
  const completedRef = useRef(false)
  const callbackRef = useRef(onLetterAnimationComplete)
  const [fontsLoaded, setFontsLoaded] = useState(false)

  // update callback kalau berubah
  useEffect(() => {
    callbackRef.current = onLetterAnimationComplete
  }, [onLetterAnimationComplete])

  useGSAP(
    () => {
      if (!ref.current || !text) return
      if (completedRef.current) return

      const el = ref.current

      const split = new GSAPSplitText(el, {
        type: splitType,
        charsClass: "split-char",
        wordsClass: "split-word",
        linesClass: "split-line",
        onSplit(self) {
          const targets =
            splitType === "words"
              ? self.words
              : splitType === "lines"
                ? self.lines
                : self.chars

          gsap.fromTo(
            targets,
            from,
            {
              ...to,
              duration,
              ease,
              stagger: delay / 1000,
              onComplete: () => {
                completedRef.current = true
                callbackRef.current?.()
              }
            }
          )
        }
      })

      return () => {
        try {
          split.revert()
        } catch { }
      }
    },
    { dependencies: [text] }
  )

  const Tag = tag

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        textAlign,
        display: "inline-block",
        overflow: "hidden"
      }}
    >
      {text}
    </Tag>
  )
}

export default SplitText  