'use client'

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React frontend and Node.js backend.",
    tags: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "Task Management App",
    description: "A mobile app for task management and productivity tracking.",
    tags: ["Java", "Android", "SQLite"]
  },
  {
    title: "University Course Scheduler",
    description: "A web application to help students plan their course schedules efficiently.",
    tags: ["React", "Firebase", "Material-UI"]
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-black">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-black dark:text-white mb-12"
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white dark:bg-purple-900/20 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-black text-2xl dark:text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-lg dark:text-gray-300">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-purple-100 dark:bg-purple-500/50 text-purple-800 dark:text-white">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

