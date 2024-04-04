"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import instagram from "../../../public/instagram_contect.png"
import github from "../../../public/github_contect.png"
import linkedin from "../../../public/linkedin_contect.png"
import location from "../../../public/home.png"
import Image from "next/image";
import { Separator } from "../ui/Separator";
import Link from "next/link";

export function SignupFormDemo() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <>
            <div className="lg:grid  grid-cols-2 flex flex-col h-screen  lg:justify-around justify-center items-center mx-auto">
                <div className="border  w-10/12 p-4 h-fit mx-auto md:rounded-2xl z-10 shadow-input  flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 pt-4">
                        Let's Chat, Reach Out to Me!
                    </h2>
                    <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                        Have questions or feedback? I'm here to help. Send me a message and I'will respond within 24 hours.
                    </p>
                    <form className="my-8 md:w-auto w-full" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                            <LabelInputContainer>
                                <Label htmlFor="firstname">First name</Label>
                                <Input id="firstname" placeholder="Tyler" type="text" />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="lastname">Last name</Label>
                                <Input id="lastname" placeholder="Durden" type="text" />
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="my-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="description">What Can I Help With You ?</Label>
                            <Textarea id="description" placeholder="Write the purpose of contacting me... " />
                        </LabelInputContainer>
                        <button
                            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="submit"
                        >
                            Submit &rarr;
                            <BottomGradient />
                        </button>
                    </form>
                </div>
                {/* <div className="text-center w-full mx-auto">
                    <h4 className="text-neutral-300 font-normal flex lg:hidden py-10 justify-center items-center tracking-wider">Ready to talk? Send me a message..</h4>
                    <h4 className="text-neutral-300 font-normal lg:w-11/12 w-full mx-auto lg:flex hidden">Curious about something? Just shoot me a message on any of my social media platforms.</h4>
                    <div className="grid grid-cols-4 text-sm md:py-10 py-0 lg:w-2/3 w-9/12 mx-auto">
                        <div className="flex justify-around items-center">
                            <Link href="https://github.com/mitenkumar" target="_blank">
                                <Image src={github} alt="no-image" className="object-cover !m-0 !p-0 object-top cursor-pointer h-14 w-14  hover:scale-110 hover:rotate-45 relative transition duration-500 mx-auto" />
                            </Link>
                            <Separator orientation="vertical" className="h-10" />
                        </div>
                        <div className="flex justify-around items-center">
                            <Link href="https://www.instagram.com/miten_02/" target="_blank">
                                <Image src={instagram} alt="no-image" className="object-cover !m-0 !p-0 object-top cursor-pointer h-14 w-14  hover:scale-110 hover:-rotate-45 relative transition duration-500 mx-auto" />
                            </Link>
                            <Separator orientation="vertical" className="h-10" />
                        </div>
                        <div className="flex justify-around items-center">
                            <Link href="https://www.linkedin.com/in/miten-patel-8939571b2/" target="_blank">
                                <Image src={linkedin} alt="no-image" className="object-cover !m-0 !p-0 object-top cursor-pointer h-14 w-14  hover:scale-110 hover:rotate-45 relative transition duration-500 mx-auto" />
                            </Link>
                            <Separator orientation="vertical" className="h-10" />
                        </div>
                        <div className="flex justify-around items-center">
                            <Link href="https://maps.app.goo.gl/hxd1M2zPHjEN8g2p9" target="_blank">
                                <Image src={location} alt="no-image" className="object-cover !m-0 !p-0 object-top cursor-pointer h-14 w-14  hover:scale-110 hover:-rotate-45 relative transition duration-500 mx-auto" />
                            </Link>
                            <div></div>
                        </div>
                    </div>
                </div> */}
                <div className=" md:w-10/12 w-11/12 mx-auto">
                    <h2 className="text-center text-4xl lg:block hidden">Click. Chat. Connect.</h2>
                    <h4 className="text-center md:my-10 my-5 lg:hidden block tracking-wide font-normal">Need help? Message me directly</h4>
                    <h4 className="text-center my-10 lg:block hidden tracking-wide font-normal">Curious about something? Just shoot me a message on any of my social media platforms.</h4>
                    <div className="w-full md:my-10 ">
                        <div className="flex md:space-x-8 space-x-4 text-sm cursor-pointer justify-center items-center">
                            <Link href="https://github.com/mitenkumar" target="_blank" className="hover:scale-110 transition-all duration-500">
                                <Image src={github} alt="no-image" className="object-cover !m-0 !p-0 object-top cursor-pointer transition-all duration-500 hover:rotate-45 h-14 w-14 mb-2  relative mx-auto" />
                                <span className="pt-5 justify-center flex hover:rotate-0">
                                    Github
                                </span>
                            </Link>
                            <Separator orientation="vertical" className="h-10 flex items-center justify-center mb-10" />
                            <Link href="https://www.instagram.com/miten_02/" target="_blank"  className="hover:scale-110 transition-all duration-500">
                                <Image src={instagram} alt="no-image" className="object-cover !m-0 !p-0 object-top cursor-pointer h-14 w-14  110 md:hover:-rotate-45 relative transition duration-500 mx-auto" />
                                <span className="pt-5 justify-center flex hover:rotate-0">
                                    Instagram
                                </span>
                            </Link>
                            <Separator orientation="vertical" className="h-10 flex items-center justify-center mb-10" />
                            <Link href="https://www.linkedin.com/in/miten-patel-8939571b2/" target="_blank"  className="hover:scale-110 transition-all duration-500">
                                <Image src={linkedin} alt="no-image" className="object-cover !m-0 !p-0 object-top cursor-pointer h-14 w-14   md:hover:rotate-45 relative transition duration-500 mx-auto" />
                                <span className="pt-5 justify-center flex hover:rotate-0">
                                    LinkedIn
                                </span>
                            </Link>
                            <Separator orientation="vertical" className="h-10 flex items-center justify-center mb-10" />
                            <Link href="https://maps.app.goo.gl/hxd1M2zPHjEN8g2p9" target="_blank" className="hover:scale-110 transition-all duration-500">
                                <Image src={location} alt="no-image" className="object-cover !m-0 !p-0 object-top cursor-pointer h-14 w-14   md:hover:-rotate-45 relative transition duration-500 mx-auto" />
                                <span className="pt-5 justify-center flex hover:rotate-0">
                                    Location
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
