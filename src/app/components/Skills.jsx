"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#000000" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Node.js", color: "#339933" },
    { name: "CSS", color: "#1572B6" },
    { name: "Tailwind CSS", color: "#38B2AC" },
    { name: "GraphQL", color: "#E10098" },
    { name: "REST APIs", color: "#FF6C37" },
    { name: "Git", color: "#F05032" },
    { name: "Agile", color: "#0052CC" },
];

export default function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id="skills"
            className="min-h-screen flex items-center justify-center bg-black bg-opacity-50"
            ref={ref}
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
                >
                    My Skills
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white bg-opacity-10 rounded-lg p-4 text-center backdrop-blur-md"
                        >
                            <motion.div
                                className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: skill.color }}
                            >
                                <span className="text-2xl font-bold text-white">
                                    {skill.name[0]}
                                </span>
                            </motion.div>
                            <span className="text-lg font-semibold">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
