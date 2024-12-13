'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative"
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 origin-[0%] z-50"
        style={{ scaleX }}
      />
      <Navigation />
      <Intro />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </motion.main>
  )
}

