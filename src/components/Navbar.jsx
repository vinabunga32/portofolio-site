import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { cn } from "../lib/utils"

export default function NavBar({ items, className }) {
    const [activeTab, setActiveTab] = useState(items[0].name)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname !== "/") {
            setActiveTab("") // No tab is "active" by hash if we aren't on the home page
            return
        }

        const observers = []
        items.forEach((item) => {
            const targetId = item.url.split("#")[1]
            if (!targetId) return

            const element = document.getElementById(targetId)
            if (element) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                                setActiveTab(item.name)
                            }
                        })
                    },
                    {
                        threshold: [0, 0.2, 0.5, 0.8],
                        rootMargin: "-15% 0px -15% 0px"
                    }
                )
                observer.observe(element)
                observers.push(observer)
            }
        })

        return () => {
            observers.forEach((obs) => obs.disconnect())
        }
    }, [items, location.pathname])

    return (
        <nav
            className={cn(
                "fixed bottom-6 md:top-6 left-1/2 -translate-x-1/2 z-40 pointer-events-none",
                className
            )}
        >
            <div className="pointer-events-auto flex items-center gap-2 sm:gap-3 bg-white/30 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-xl py-1 px-1 rounded-full shadow-lg">
                {items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.name

                    return (
                        <Link
                            key={item.name}
                            to={item.url}
                            onClick={() => {
                                if (location.pathname === "/") {
                                    setActiveTab(item.name)
                                }
                            }}
                            className={cn(
                                "relative cursor-pointer text-sm font-semibold px-4 sm:px-6 py-2 rounded-full transition-colors",
                                "text-gray-600 dark:text-gray-300 hover:text-[var(--color-primary-500)]",
                                isActive && "text-[var(--color-primary-600)] dark:text-[var(--color-primary-400)]"
                            )}
                        >
                            <span className="hidden md:inline">{item.name}</span>
                            <span className="md:hidden">
                                <Icon size={18} strokeWidth={2.5} />
                            </span>

                            {isActive && (
                                <motion.div
                                    layoutId="lamp"
                                    className="absolute inset-0 bg-[var(--color-primary-50)] dark:bg-white/10 rounded-full -z-10"
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                />
                            )}
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
