'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, Code, Briefcase, FileText, Mail } from 'lucide-react'

const navItems = [
  { name: 'Intro', href: '#intro', icon: Home },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Resume', href: '#resume', icon: FileText },
  { name: 'Contact', href: '#contact', icon: Mail },
]

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-black bg-opacity-25 backdrop-blur-sm"
    >
      <ul className="flex justify-center space-x-6 px- py-3">
        {navItems.map((item) => (
          <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href={item.href} className="text-white hover:text-yellow-400 transition-colors flex flex-col items-center">
              <item.icon className="w-6 h-6 mb-1" />
              <span className="text-xs">{item.name}</span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}

