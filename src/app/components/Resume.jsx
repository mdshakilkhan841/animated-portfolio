"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
    {
        title: "Senior Web Developer",
        company: "Tech Corp",
        period: "2020 - Present",
        description:
            "Led a team of developers in creating responsive web applications.",
    },
    {
        title: "Web Developer",
        company: "Digital Solutions",
        period: "2017 - 2020",
        description:
            "Developed and maintained client websites using modern web technologies.",
    },
];

const education = [
    {
        degree: "Master of Science in Computer Science",
        school: "Tech University",
        period: "2015 - 2017",
    },
    {
        degree: "Bachelor of Science in Software Engineering",
        school: "State University",
        period: "2011 - 2015",
    },
];

export default function Resume() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id="resume"
            className="min-h-screen flex items-center justify-center bg-black bg-opacity-50"
            ref={ref}
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
                >
                    Resume
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 flex items-center">
                            <Briefcase className="w-6 h-6 mr-2 text-yellow-400" />
                            Experience
                        </h3>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.1 * index,
                                    duration: 0.5,
                                }}
                                className="mb-4 bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-md"
                            >
                                <h4 className="text-xl font-medium">
                                    {exp.title}
                                </h4>
                                <p className="text-yellow-400">{exp.company}</p>
                                <p className="text-gray-400">{exp.period}</p>
                                <p className="mt-2">{exp.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 flex items-center">
                            <GraduationCap className="w-6 h-6 mr-2 text-orange-500" />
                            Education
                        </h3>
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.1 * index,
                                    duration: 0.5,
                                }}
                                className="mb-4 bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-md"
                            >
                                <h4 className="text-xl font-medium">
                                    {edu.degree}
                                </h4>
                                <p className="text-orange-500">{edu.school}</p>
                                <p className="text-gray-400">{edu.period}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
