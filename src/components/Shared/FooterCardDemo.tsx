import React from "react";
import { Meteors } from "../ui/meteors";
import Link from "next/link";
import logo from "../../../public/logo-two.png"
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { SparklesCore } from "../ui/sparkles";
import footer_image from "../../../public/footer_image.png"
import { Separator } from "../ui/Separator";
import instagram from "../../../public/instagram_contect.png"
import github from "../../../public/github_contect.png"
import linkedin from "../../../public/linkedin_contect.png"
import location from "../../../public/home.png"
import { IconBrandGithubCopilot, IconBrandGitlab, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";

export function FooterCardDemo() {
  return (
    <div className="mt-20">
      <div className="w-full mx-auto h-full relative z-10">
        <footer className="footer ">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={10}
            className="w-full absolute h-full -z-10"
            particleColor="#FFFFFF"
          />

          <div className="grid lg:grid-cols-5 grid-cols-1 w-11/12 mx-auto">
            <Image src={logo} alt="no-icon" className="h-24 w-44 mx-auto md:object-cover object-contain md:my-0 my-5"></Image>
            <div className="col-span-4 grid lg:grid-cols-3  grid-cols-1 md:justify-start md:items-start justify-center  items-center">
              <div className="flex  flex-col gap-2 w-7/12 lg:w-1/2 mx-auto lg:justify-start lg:items-start justify-center items-center">
                <h5 className="font-semibold lg:mb-5 mb-2 tracking-widest text-md">Site Links</h5>
                <div className="flex lg:flex-col lg:gap-2 gap-4 font-light text-neutral-400 text-sm">
                  <Link href="" >About</Link>
                  <Link href="" > Resume</Link>
                  <Link href="" > Blogs</Link>
                  <Link href="#Expertise " > Skills</Link>
                  <Link href="#projects" > Projects</Link>
                </div>
              </div>

              <div className="flex  flex-col gap-2 justify-center lg:items-start items-center mt-8 lg:mt-0">
                <h5 className="font-semibold lg:mb-5 mb-2 tracking-widest md:text-md text-sm">Contact Info</h5>
                <Link className="font-light text-neutral-400 text-sm" href="tel:+91 9510039054" >+91 9510039054</Link>
                <Link className="font-light text-neutral-400 text-sm" href="mailto:mitenpate1234@gmail.com" >mitenpate1234@gmail.com</Link>
                <div className="lg:flex hidden mt-5 gap-8 text-neutral-400">

                  <div className="flex gap-4"> <Link target="_blank" href="https://www.linkedin.com/in/miten-patel-8939571b2/" className="group">
                    <IconBrandLinkedin className="w-8 h-8 text-gray-700 linkedin_icon transition duration-300 ease-in-out transform hover:scale-105" />
                  </Link>
                    <div className="flex gap-4">
                      <Link target="_blank" href="https://www.instagram.com/miten_02/" className="group">
                        <IconBrandInstagram className="w-8 h-8 text-gray-700  transition duration-300 instagram_icon transform hover:scale-105" />
                      </Link>
                    </div>

                    <Link target="_blank" href="https://github.com/Miten-Kumar" className="group">
                      <IconBrandGithub className="w-8 h-8 text-gray-700 github_icon transition duration-300 ease-in-out transform hover:scale-105" />
                    </Link>
                    <Link target="_blank" href="https://github.com/mitenkumar" className="group">
                      <IconBrandGitlab className="w-8 h-8 text-gray-700 transition duration-300 ease-in-out transform hover:scale-105 gitlab_icon" />
                    </Link>
                  </div>

                </div>
              </div>

              <div className=" lg:hidden flex flex-col gap-2  mt-8 lg:mt-0 items-center ">
                <h5 className="font-semibold lg:mb-5 mb-2 tracking-widest md:text-md text-sm">Social Links</h5>
                <div className="flex lg:flex-col gap-8 font-light text-neutral-400">

                  <Link target="_blank" href="https://www.linkedin.com/in/miten-patel-8939571b2/"><span className="mr-1 md:inline-flex hidden text-sm">LinkedIn</span><IconBrandLinkedin className="inline" /></Link>
                  <Link target="_blank" href="https://www.instagram.com/miten_02/"><span className="mr-1 md:inline-flex hidden text-sm">Instagram</span><IconBrandInstagram className="inline" /></Link>
                  <Link target="_blank" href="https://github.com/Miten-Kumar"><span className="mr-1 md:inline-flex hidden text-sm">Github</span><IconBrandGithub className="inline" /></Link>
                  <Link target="_blank" href="https://github.com/mitenkumar"><span className="mr-1 md:inline-flex hidden text-sm">Github-II</span><IconBrandGithubCopilot className="inline" /></Link>
                </div>
              </div>


              <div className="lg:flex hidden flex-col gap-2 lg:justify-start justify-center lg:items-start items-center lg:mt-0 mt-8">
                {/* <h4 className=" mb-5">Let&apos;s Getting Touch</h4> */}
                <p className="font-normal text-lg text-slate-500 mb-4 relative ">
                  Let's brew something great together!              </p>
                <Link href="/contact" className="border px-2 py-1 w-32 rounded-lg  border-gray-500 text-neutral-400">
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* <div className="w-full relative max-w-xs mx-auto h-min  ">
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
                Ready to take the next step? Drop me a message via below press contact button and let's bring your ideas to life together!
              </p>

              <Link href="/contact" className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              contact 
              </Link>

              <Meteors number={20} />
            </div>
          </div> */}
          </div>
        </footer>
        {/* <Image src={footer_image} alt="footer_image" classNameName="h-96 w-10/12 mx-auto"/> */}
        {/* <div className=" hidden ">
          <div classNameName="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div classNameName="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div classNameName="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-3/5 blur-sm" />
          <div classNameName="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>s
        <hr classNameName="w-2/3 mx-auto  h-pxlg:block hidden "></hr>
        <div classNameName="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1   justify-center w-10/12  mx-auto md:mt-10 ">

          <div classNameName="flex flex-col md:rotate-180 lg:hidden ">
            <div classNameName="w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
              <Image src={logo} alt="no-icon" classNameName="md:w-96 w-44 mx-auto md:object-cover object-contain md:h-36 h-24 lg:hidden block"></Image>
              <div classNameName="w-[40rem] h-40  last:  relative">
                <div classNameName="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div classNameName="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div classNameName="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div classNameName="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  classNameName="w-full h-full"
                  particleColor="#FFFFFF"
                />
                <div classNameName="absolute inset-0 w-full h-full bg-[#020817] lg:[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] [mask-image:radial-gradient(167px_140px_at_top,transparent_31%,white)] md:[mask-image:radial-gradient(215px_167px_at_top,transparent_4%,white)]"></div>
              </div>
            </div>
            
          </div>
          <div classNameName="my-10 w-full relative max-w-xs mx-auto h-min  ">
            <div classNameName="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div classNameName="relative shadow-xl bg-gray-900 border border-gray-800 overflow-hidden  px-2 py-2 h-full rounded-2xl flex flex-col justify-end items-start">
              <div classNameName="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  classNameName="h-2 w-2 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              <h1 classNameName="font-bold text-xl text-white mb-4 relative ">
                Ready ? Let&apos;s Getting Touch
              </h1>

              <p classNameName="font-normal text-base text-slate-500 mb-4 relative ">
                Ready to take the next step? Drop me a message via below press contact button and let's bring your ideas to life together!
              </p>

              <Link href="/contact" classNameName="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              contact 
              </Link>

              <Meteors number={20} />
            </div>
          </div>
          <div classNameName="md:grid hidden grid-cols-3 col-span-2 my-20">

            <div classNameName="flex  flex-col gap-2   mx-auto ">

              <h4 classNameName="border-b-2 border-blue-500 hover:border-blue-400 w-min mb-5">Site Links</h4>
              <span>About</span>
              <span> Resume</span>
              <span> Blogs</span>
              <Link href="#Expertise"> Skills</Link>
              <Link href="#projects"> Projects</Link>
            </div>
            <div classNameName="flex  flex-col gap-2  ">
              <h4 classNameName="border-b-2 w-min border-teal-500 hover:border-teal-300 mb-5">Contact Info</h4>
              <Link href="tel:+91 9510039054" >+91 9510039054</Link>
              <Link href="mailto:mitup7869@gmail.com" >mitup7869@gmail.com</Link>
              
            </div>

            <div classNameName="flex  flex-col gap-2 ">
              <h4 classNameName="border-b-2 w-min border-red-500 hover:border-red-300 mb-5">Social Links</h4>
              <Link target="_blank" href="https://www.linkedin.com/in/miten-patel-8939571b2/">LinkedIn</Link>
              <Link target="_blank" href="https://www.instagram.com/miten_02/">Instagram</Link>
              <Link target="_blank" href="https://github.com/mitenkumar">Github-One</Link>
              <Link target="_blank" href="https://github.com/Miten-Kumar">Github-Two</Link>
            </div>
          </div>
        </div> */}

        <span className="bottom-0 text-xs text-neutral-500 absolute w-full text-center translate-y-10">©2024, All Rights Reserved.</span>
      </div>
    </div>
  );
}
