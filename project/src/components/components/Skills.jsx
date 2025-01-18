"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Server, Laptop2 } from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    description:
      "Building responsive web apps with React and modern JavaScript",
    icon: Code2,
  },
  {
    title: "Mobile Development",
    description:
      "Creating native mobile applications with React Native and Java",
    icon: Smartphone,
  },
  {
    title: "Backend Development",
    description:
      "Developing robust server-side solutions with Node.js and Java",
    icon: Server,
  },
  {
    title: "Desktop App",
    description: "Building robust Desktop application  with Swing",
    icon: Laptop2,
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-black dark:text-white mb-12"
        >
          My Skills
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-lg bg-gray-100 dark:bg-purple-900/20 border border-purple-500/20"
            >
              <skill.icon className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-lg dark:text-gray-400">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
