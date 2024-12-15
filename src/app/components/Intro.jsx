"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";

import AnimatedBackground from "./AnimatedBackground";
import Image from "next/image";
import programmingSVG from "../../../public/programming-animate.svg";

export default function Intro() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id="intro"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black bg-opacity-50"
            ref={ref}
        >
            <AnimatedBackground />
            <div className="container mx-auto flex sm:flex-row flex-col items-center justify-center sm:gap-0 gap-20 ">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-cente z-10 px-4 sm:w-1/2"
                >
                    <motion.h1
                        initial={{ scale: 0.5 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                    >
                        Hello, I'm Shakil
                    </motion.h1>
                    <TypeAnimation
                        data-aos="fade-up"
                        sequence={[
                            "Software Developer",
                            2000,
                            "MERN Stack",
                            2000,
                            "",
                        ]}
                        speed={30}
                        wrapper="h2"
                        repeat={Infinity}
                        className="text-yellow-500 text-4xl font-bold sm:text-3xl"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-2xl text-gray-300 mt-3"
                    >
                        I've successfully completed my graduation from NIT
                        Rourkela, India.
                    </motion.p>
                    {/* <motion.svg
                        width="200"
                        height="200"
                        viewBox="0 0 200 200"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="mt-8 mx-auto"
                    >
                        <defs>
                            <linearGradient
                                id="gradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop offset="0%" stopColor="#FF1493" />
                                <stop offset="50%" stopColor="#FF4500" />
                                <stop offset="100%" stopColor="#FFD700" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M100 20
               A80 80 0 0 1 180 100
               A80 80 0 0 1 100 180
               A80 80 0 0 1 20 100
               A80 80 0 0 1 100 20
               Z"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="4"
                        />
                        <circle cx="100" cy="20" r="8" fill="#FF1493" />
                        <circle cx="180" cy="100" r="8" fill="#FF4500" />
                        <circle cx="100" cy="180" r="8" fill="#FFD700" />
                        <circle cx="20" cy="100" r="8" fill="#FF1493" />
                    </motion.svg> */}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center text-center z-10 px-4 sm:w-1/2 w-full"
                >
                    <Image
                        src={programmingSVG}
                        alt="programming"
                        className="w-full h-full sm:w-4/5 sm:h-4/5"
                        // width={200}
                        // height={200}
                    />
                </motion.div>
            </div>
        </section>
    );
}
