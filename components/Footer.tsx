/* eslint-disable @next/next/no-img-element */
import { LuArrowUpRight } from "react-icons/lu";
import MagicButton from "./ui/MagicButton"
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <img 
                src="/footer-grid.svg" 
                alt="grid"
                className="w-full h-full opacity-60"
            />
        </div>

        <div className="flex flex-col items-center gap-6 md:gao-0">
            <h1 className="heading">
                Lets <span className="text-purple">Chat</span>
            </h1>
            <a href="mailto:nadavshordev@gmail.com">
                <MagicButton 
                    title="Email Me"
                    icon={<LuArrowUpRight className="w-6 h-6 ml-2" />}
                    position="right"
                    otherClasses="gap-0 text-md"
                />
            </a>
        </div>

        <div className="flex mt-16 flex-col justify-between items-center md:flex-row gap-6 md:gap-0">
            <p 
                className="text-sm font-light md:text-base md:font-normal"
            >
                {`Copyright © ${new Date().getFullYear()} Nadav Shor`}
            </p>

            <div className="flex items-center gap-6 md:gap-3">
                {socialMedia.map((profile) => (
                    <a 
                        key={profile.id} 
                        href={profile.id === 1 ? "https://github.com/Nadav6910" : "https://www.linkedin.com/in/nadav-shor-268475216"} 
                        target="_blank"
                    >
                        <div      
                            className="cursor-pointer w-10 h-10 flex justify-center items-center
                            backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200
                            rounded-lg border border-black-300 hover:border-purple transition-all 
                            ease-in-out hover:scale-110 duration-150"
                        >
                            <img 
                                src={profile.img} 
                                alt="social media"
                                width={20}
                                height={20}
                            />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer
