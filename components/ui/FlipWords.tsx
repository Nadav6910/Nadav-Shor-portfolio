"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

let interval: any

export const FlipWords = ({
  words,
  duration = 4750,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0])
  const [isAnimating, setIsAnimating] = useState(true)

  const intervalRef = useRef(interval)

  const startAnimation = useCallback(() => {
    let i = 0
    if (!isAnimating) return

    intervalRef.current = setInterval(() => {

      i++

      if (i === words.length) i = 0

      const word = words[i]
      setCurrentWord(word)
      
    }, duration) // Adjust the interval as needed
  }, [isAnimating, words, duration])

  useEffect(() => {
    const handleVisibilityChange = () => {

      if (document.hidden) {
        setIsAnimating(false)
        clearInterval(intervalRef.current)
      } 
      
      else {
        setIsAnimating(true)
        startAnimation()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      clearInterval(intervalRef.current)
    }
  }, [startAnimation])

  useEffect(() => {

    startAnimation()
    
    return () => clearInterval(intervalRef.current)

  }, [isAnimating, startAnimation])
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
          position: "absolute"
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
          className
        )}
        key={currentWord}
      >
        {currentWord.split("").map((letter, index) => (
          <motion.span
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            className="inline-block text-purple"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
