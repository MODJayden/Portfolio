'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import image from "@/components/components/image/dion.png"


export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black relative overflow-hidden pt-16 sm:pt-24">
      <div className="absolute inset-0 bg-purple-500/10 dark:bg-purple-500/20" />
      <div className="container px-4 grid lg:grid-cols-2 gap-8 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
            Michael Owusu Darko
            <span className="block text-purple-600 dark:text-purple-400">Full Stack & Mobile Developer</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Student at Accra Technical University, Ghana
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Crafting beautiful web and mobile experiences with React and Java
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-full">
              View Projects
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <img
            src={image}
            alt="Michael Owusu Darko"
            className="object-cover rounded-full overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </motion.div>
      </div>
    </div>
  )
}

