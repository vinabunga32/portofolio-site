'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './ProfileCard.css';

const buildKeyframes = (from, steps) => {
    const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);
    const keyframes = {};
    keys.forEach(k => {
        keyframes[k] = [from[k], ...steps.map(s => s[k])];
    });
    return keyframes;
};

const ProfileCard = ({ imageSrc, name, tag }) => {
    const cardRef = useRef(null);
    const [inView, setInView] = useState(false);

    // Intersection Observer for scroll trigger
    useEffect(() => {
        if (!cardRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(cardRef.current);
                }
            },
            { threshold: 0.2, rootMargin: '0px' }
        );
        observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    // Motion values for tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for rotation
    const rotateXSpring = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
    const rotateYSpring = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // High-Impact Animation: Top-to-Center with dramatic shake
    const animationFrom = { filter: 'blur(15px)', opacity: 0, y: -400, scale: 0.8 };
    const animationTo = [
        { filter: 'blur(4px)', opacity: 0.8, y: 20, scale: 1.05 },  // Impact (Overshoot)
        { filter: 'blur(0px)', opacity: 1, y: -15, scale: 1 },     // Rebound 1
        { filter: 'blur(0px)', opacity: 1, y: 8, scale: 1.02 },    // Rebound 2
        { filter: 'blur(0px)', opacity: 1, y: 0, scale: 1 }       // Settle
    ];

    const animateKeyframes = buildKeyframes(animationFrom, animationTo);

    const transition = {
        duration: 1.8,
        times: [0, 0.4, 0.6, 0.8, 1],
        ease: "easeOut"
    };

    return (
        <motion.div
            className="profile-card-container"
            initial={animationFrom}
            animate={inView ? animateKeyframes : animationFrom}
            transition={transition}
        >
            <motion.div
                ref={cardRef}
                className="profile-card-inner"
                style={{
                    rotateX: rotateXSpring,
                    rotateY: rotateYSpring,
                    transformStyle: "preserve-3d"
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02 }}
            >
                <div className="profile-card-glow" />

                <div className="profile-image-wrapper">
                    <motion.img
                        src={imageSrc}
                        alt={name}
                        className="profile-image"
                    />
                </div>

                <div className="profile-info">
                    <h4 className="profile-name">{name}</h4>
                    <p className="profile-tag">{tag}</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProfileCard;
