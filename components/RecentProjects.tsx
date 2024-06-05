'use client'

/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data"
import { PinContainer } from "./ui/PinContainer"
import { LuArrowUpRight } from "react-icons/lu";
import { m, domAnimation, LazyMotion } from "framer-motion";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
        <h1 className="heading">
            A small selection of {' '}
            <span className="text-purple">
                recent projects
            </span>
        </h1>
        <div 
            className="flex flex-wrap items-center justify-center p-4 gap-x-20 gap-y-4 md:gap-y-2 mt-10" 
        >
            {projects.map(({
                id,
                title,
                des,
                img,
                iconLists,
                link,
                liveSiteLink
            }) => (
                <LazyMotion features={domAnimation} key={id}>
                    <m.div 
                        className="lg:min-h-[32.5rem] h-[26rem] flex items-center justify-center
                        sm:w-96 w-[80vw]"
                        onClick={() => window.open(link, "_blank")}
                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut"}}
                    >
                        <PinContainer title={link} href={link}>
                            <div 
                                className="relative flex items-center justify-center sm:w-96
                                w-[80vw] h-[20vh] overflow-hidden lg:h-[30vh] mb-6"
                            >
                                {/* <div 
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl 
                                    bg-[#13162d]"
                                >
                                    <img src="/bg.png" alt="bg-img" />
                                </div> */}
                                <img 
                                    src={img} 
                                    alt={title}
                                    className="z-10 absolute bottom-0 h-full w-full rounded-2xl"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <h1 className="font-bold md:text-xl text-base line-clamp-1">
                                    {title}
                                </h1>

                                <p className="lg:text-base lg:font-normal font-light text-sm line-clamp-3">
                                    {des}
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-7">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div 
                                            key={icon} 
                                            className="border border-white/[0.2] rounded-full
                                            bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex items-center 
                                            justify-center"
                                            style={{transform: `translateX(-${5 * index * 2}px)`}}
                                        >
                                            <img src={icon} alt={icon} className="p-2" />
                                        </div>
                                    ))}
                                </div>

                                <div 
                                    className="flex justify-center items-center hover:underline decoration-purple"
                                    onClick={() => window.open(liveSiteLink, "_blank")}
                                >
                                    <p className="flex lg:text-base text-sm text-purple">
                                        Check Live Site 
                                    </p>
                                    <LuArrowUpRight className="ms-2 w-5 h-5" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>
                    </m.div>
                </LazyMotion>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects
