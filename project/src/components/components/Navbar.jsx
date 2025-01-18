"use client";

import  React,{useState} from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/components/ThemeToggle";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";


export function Navbar() {
  const [openMenu,setOpenMenu]=useState(false)
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black/80 backdrop-blur-sm border-b border-purple-500/20"
    >
      <div className=" justify-between container flex h-16 items-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mr-4 text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text"
        >
          Portfolio
        </motion.div>
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-4">
        {[{loc:"Home",a:"#"}, {loc:"About",a:"#about"}, {loc:"Projects",a:"#projects"}, {loc:"Contact",a:"#contact"}].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <a
                href={item.a}
                variant="ghost"
                className=" font-semibold dark:text-white hover:text-purple-400"
              >
                {item.loc}
              </a>
            </motion.div>
          ))}
        </nav>
        <ThemeToggle />
        <Sheet open={openMenu} onOpenChange={setOpenMenu}>
          <SheetTrigger>
        <MenuIcon className="block text-purple-400 md:hidden " />
        </SheetTrigger>
        <SheetContent>
        <nav className="flex w-full flex-col items-center justify-center gap-4">
          {[{loc:"Home",a:"#"}, {loc:"About",a:"#About"}, {loc:"Projects",a:"#Project"}, {loc:"Contact",a:"#Contact"}].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <a
                href={item.a}
                onClick={()=>setOpenMenu(false)}
                className="text-black items-center justify-center
                 dark:text-white hover:text-purple-400 w-full"
              >
                {item.loc}
              </a>
            </motion.div>
          ))}
        </nav>
        </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
