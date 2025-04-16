"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Abu Bakar
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl font-medium mb-6 text-sky-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
             Agentic AI Developer
            </motion.h2>

            <motion.p
              className="text-slate-600 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              I build agents with a focus on clean code, performance, and user experience. Specialized
              in CrewAI Langchain LangGraph Development.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button className="bg-sky-600 hover:bg-sky-700">View Projects</Button>
              <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-100">
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <SocialLink href="https://github.com/abubakarzohaib141" icon={<Github />} label="GitHub" />
              <SocialLink href="https://linkedin.com/in/abubakar-software-wala" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="https://x.com/abubakar_1415" icon={<Twitter />} label="Twitter" />
              <SocialLink href="mailto:contact@example.com" icon={<Mail />} label="Email" />
            </motion.div>
          </motion.div>

          {/* Simple profile image */}
          <motion.div
            className="flex-shrink-0 w-64 h-64 relative rounded-full overflow-hidden border-4 border-white shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <img src="https://media.licdn.com/dms/image/v2/D5603AQHkvOS9fYY9GA/profile-displayphoto-shrink_400_400/B56ZWNaYejGQAg-/0/1741834259873?e=1750291200&v=beta&t=_UQvn4E7TccKAeUdvpcg_TYgAZjeJG1rKSOVALtT9qw" alt="Profile" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white shadow hover:bg-sky-200 flex items-center justify-center text-sky-600 transition-colors duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
