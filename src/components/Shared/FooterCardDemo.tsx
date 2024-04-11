import React from "react";
import { Meteors } from "../ui/meteors";
import Link from "next/link";
import logo from "../../../public/logo-two.png"
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { SparklesCore } from "../ui/sparkles";
export function FooterCardDemo() {
  return (
    <div className="mt-20">
      <div className="w-full mx-auto h-full relative  items-center justify-center rounded-md">
        {/* Gradients */}
        <div className=" hidden ">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-3/5 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
        <hr className="w-2/3 mx-auto bg-white h-px hidden "></hr>
        <div className="grid  md:grid-cols-2 grid-cols-1   justify-center w-10/12  mx-auto md:mt-10 ">

          <div className="flex flex-col   ">
            <div className="w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
              <Image src={logo} alt="no-icon" className="md:w-96 w-44 mx-auto md:object-cover object-contain md:h-36 h-24"></Image>
              <div className="w-[40rem] h-40  last:  relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-[#020817] lg:[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] [mask-image:radial-gradient(167px_140px_at_top,transparent_31%,white)] md:[mask-image:radial-gradient(215px_167px_at_top,transparent_4%,white)]"></div>
              </div>
            </div>
            {/* <HeroHighlight>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="block lg:hidden text-center tracking-wide font-normal md:text-base sm:text-sm text-sm text-neutral-400 md:w-4/5 mx-auto "
              >
                My passion lies in full stack , but I'm always eager to explore new horizons. If you have a project that needs a fresh perspective don't hesitate to reach out!
              </motion.h1>
            </HeroHighlight> */}
          </div>
          <div className="my-10 w-full relative max-w-xs mx-auto h-min  ">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 overflow-hidden  px-2 py-2 h-full rounded-2xl flex flex-col justify-end items-start">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              <h1 className="font-bold text-xl text-white mb-4 relative ">
                Ready ? Let&apos;s Getting Touch
              </h1>

              <p className="font-normal text-base text-slate-500 mb-4 relative ">
                Ready to take the next step? Drop me a message via below press Explor button and let's bring your ideas to life together!
              </p>

              <Link href="/contect" className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                Explore
              </Link>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
          <div className="md:grid hidden grid-cols-3 col-span-2 my-20">

            <div className="flex  flex-col gap-2   mx-auto ">

              <h4 className="border-b-2 border-blue-500 hover:border-blue-400 w-min mb-5">Site</h4>
              <span>About</span>
              <span> Resume</span>
              <span> Blogs</span>
              <Link href="#Expertise"> Skills</Link>
              <Link href="#projects"> Projects</Link>
            </div>
            <div className="flex  flex-col gap-2  ">
              <h4 className="border-b-2 w-min border-teal-500 hover:border-teal-300 mb-5">Contact</h4>
              <Link href="tel:+91 9510039054" >+91 9510039054</Link>
              <Link href="mailto:mitup7869@gmail.com" >mitup7869@gmail.com</Link>
              <Link href="mailto:mitenpate1234@gmail.com">email</Link> 
              
            </div>

            <div className="flex  flex-col gap-2 ">
              <h4 className="border-b-2 w-min border-red-500 hover:border-red-300 mb-5">Social</h4>
              <Link target="_blank" href="https://www.linkedin.com/in/miten-patel-8939571b2/">LinkedIn</Link>
              <Link target="_blank" href="https://www.instagram.com/miten_02/">Instagram</Link>
              <Link target="_blank" href="https://github.com/mitenkumar">Github-One</Link>
              <Link target="_blank" href="https://github.com/Miten-Kumar">Github-Two</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
