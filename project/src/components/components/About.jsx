'use client'

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-black">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-black dark:text-white mb-12"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 space-y-6"
        >
          <p>
            Hello! I'm Michael Owusu Darko, a passionate Full Stack and Mobile Developer currently pursuing my studies at Accra Technical University in Ghana. My journey in the world of programming has been driven by a deep fascination with creating innovative digital solutions.
          </p>
          <p>
            As a student, I'm constantly learning and applying new technologies to real-world projects. My expertise lies in building responsive web applications with React and developing robust mobile apps using Java. I'm always excited to take on new challenges and push the boundaries of what's possible in software development.
          </p>
          <p>
            When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or mentoring fellow students in programming. I believe in the power of technology to transform lives and am committed to using my skills to make a positive impact in my community and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

