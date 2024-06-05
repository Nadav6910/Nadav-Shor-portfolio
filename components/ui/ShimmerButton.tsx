'use client'

import { motion } from "framer-motion";

const ShimmerButton = ({text, icon, position, onClick, otherClasses}: buttonProps) => {

  return (
    
    <motion.div
      initial={{
          opacity: 0,
          y: 20,
      }}
      animate={{
          opacity: 1,
          y: 0,
      }}
      transition={{
          duration: 3,
          ease: "easeInOut",
          type: "spring",
          stiffness: 80,
          damping: 10,
      }}
      className="text-center"
    >
      <button 
        className="inline-flex h-12 animate-shimmer items-center 
        justify-center rounded-lg border border-slate-800 
        bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
        bg-[length:200%_100%] px-4 font-medium text-slate-400 
        transition-colors focus:outline-none focus:ring-2 
        focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
        bg-black-100"
        onClick={onClick}
      >
        {position === "left" && icon}
        {text}
        {position === "right" && icon}
      </button>
    </motion.div>
  )
}

export default ShimmerButton