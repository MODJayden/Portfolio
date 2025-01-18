"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-black dark:text-white mb-12"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto space-y-8"
        >
          <p className="text-center text-gray-600 dark:text-gray-400">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out to me through any of the following channels:
          </p>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="mailto:darkolyrical@gmail.com"
              className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:underline"
            >
              <Mail className="w-5 h-5" />
              <span>darkolyrical@gmail.com</span>
            </a>
            <a
              href="https://github.com/darkolyrical"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:underline"
            >
              <Github className="w-5 h-5" />
              <span>GitHub Profile</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:underline"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn Profile</span>
            </a>

            <a
              target="_blank"
              href="https://wa.me/233257479336"
              className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:underline"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400">
            I'm looking forward to hearing from you and discussing how we can
            work together!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
