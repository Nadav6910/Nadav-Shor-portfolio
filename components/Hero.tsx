import ShimmerButton from "./ui/ShimmerButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import { LuArrowUpRight } from "react-icons/lu";

const Hero = () => {

  return (
    <div className="pb-20 pt-36">
        <div>
            <Spotlight 
                className="-top-40 -left-10 md:-left-32 md:-top-10 h-screen"
                fill="white"
            />
            <Spotlight 
                className="top-10 left-[80%] h-[80vh] w-[50vw]"
                fill="purple"
            />
            <Spotlight 
                className="top-28 left-80 h-[80vh] w-[50vw]"
                fill="blue"
            />
        </div>

        <div 
            className="absolute top-0 left-0 h-screen w-full dark:bg-black-100
            bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.2] 
            flex items-center justify-center"
        >
            {/* Radial gradient for the container to give a faded look */}
            <div 
                className="absolute pointer-events-none inset-0
                flex items-center justify-center dark:bg-black-100 bg-white 
                [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
            />
        </div>

        <div className="flex relative justify-center my-[7.6rem] z-10">
            <div 
                className="flex flex-col items-center justify-center 
                max-w-[90vw] md:max-w-2xl lg:max-w-[60vw]"
            >

                <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                    Nadav Shor&apos;s Portfolio
                </h2>

                <TextGenerateEffect 
                    words="Hi, my name is Nadav Shor and I am a"
                    className="text-center text-[40px] md:text-5xl lg:text-6xl max-w-[20rem] md:max-w-[24rem]"
                />

                <a href="#about" className="my-[8em] md:my-[8.5em]">
                    <ShimmerButton 
                        text="See my work"
                        position="right"
                        icon={<LuArrowUpRight className="w-6 h-6 ml-2" />}
                    />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero
