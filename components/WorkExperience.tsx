/* eslint-disable @next/next/no-img-element */
import { workExperience } from "@/data"
import { Button } from "./ui/MovingBorder"

const WorkExperience = () => {

    return (
        <div className="py-20" id="experience">
            <h1 className="heading">
                My <span className="text-purple">work experience</span>
            </h1>
            <div className="w-full mt-12 grid grid-cols-1 gap-10 lg:grid-cols-4">
                {workExperience.map((card) => (
                    <Button 
                        key={card.id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        className="flex-1 text-white border-neutral-200 dark:border-slate-800"
                        borderRadius="1.75rem"
                    >
                        <div 
                            className="flex flex-col p-3 py-6 gap-2 md:p-5 
                            lg:p-10 lg:flex-row lg:items-center"
                        >
                            <img 
                                className="w-16 md:w-20 lg:w-32"
                                src={card.thumbnail} 
                                alt={card.thumbnail} 
                            />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.title}
                                </h1>
                                <p className="text-start text-white-100 mt-3 font-semibold">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default WorkExperience

