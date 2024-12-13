"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Project 1",
        description: "A brief description of Project 1",
        image: "/placeholder.svg?height=200&width=300",
        link: "#",
        github: "#",
    },
    {
        title: "Project 2",
        description: "A brief description of Project 2",
        image: "/placeholder.svg?height=200&width=300",
        link: "#",
        github: "#",
    },
    {
        title: "Project 3",
        description: "A brief description of Project 3",
        image: "/placeholder.svg?height=200&width=300",
        link: "#",
        github: "#",
    },
];

export default function Projects() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center bg-black bg-opacity-50"
            ref={ref}
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                >
                    My Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg backdrop-blur-md"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={300}
                                height={200}
                                className="w-full"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between">
                                    <a
                                        href={project.link}
                                        className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        View Project
                                    </a>
                                    <a
                                        href={project.github}
                                        className="inline-flex items-center bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
                                    >
                                        <Github className="w-4 h-4 mr-2" />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
