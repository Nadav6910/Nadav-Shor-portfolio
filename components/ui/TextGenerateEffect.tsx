"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { FlipWords } from "./FlipWords";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate()

  let wordsArray = words.split(" ")
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.1),
      }
    );
  
  }, [animate])

  const wordsToFlip = ["Full-Stack-Developer", "UI/UX-Designer"]

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={'dark:text-white text-black opacity-0'}
            >
              {word}{" "}
            </motion.span>
          )
        })}

        <div className="m-2 text-nowrap">
          <FlipWords words={wordsToFlip} />
        </div>
      </motion.div>
    )
  }

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4 relative w-[13em]">
        <div className="dark:text-white text-black text-2xl md:text-3xl leading-snug tracking-wide absolute w-[13em]">
          {renderWords()}
        </div>
      </div>
    </div>
  )
}