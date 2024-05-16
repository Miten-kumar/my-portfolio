"use client";

import { IconArrowLeft, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMapPin, IconBrandX, IconPhone, IconMail, IconSchool, IconCode, IconLink, IconDeviceLaptop } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Separator } from "../ui/Separator";
import { IconAward } from "@tabler/icons-react";


export function ResumeDemo() {
    const router = useRouter()
    return (
        <div className="w-10/12 mx-auto tracking-wide opacity-90">
            <header>
                <h1 className="text-center text-3xl font-normal">Patel Mitenkumar Mukeshbhai</h1>
                <div className="flex h-5 space-x-4 cursor-pointer mt-20 mb-2 justify-center items-center text-sm">
                    <Link href="https://maps.app.goo.gl/hxd1M2zPHjEN8g2p9" target="_blank">Navsari <IconMapPin className="inline mb-0.5" size={16} /></Link >
                    <Separator orientation="vertical" />
                    <Link className="" href="tel:+91 9510039054" >+91 9510039054 <IconPhone className="inline mb-0.5" size={16} /></Link>
                    <Separator orientation="vertical" />
                    <Link className="font-light " href="mailto:mitenpate1234@gmail.com" >mitenpate1234@gmail.com <IconMail className="inline" size={16} /></Link>
                    <Separator orientation="vertical" />
                    <Link target="_blank" href="https://github.com/Miten-Kumar"><span className="mr-1 inline-flex">Github</span><IconBrandGithub className="inline" size={18} /></Link>
                    <Separator orientation="vertical" />
                    <Link target="_blank" href="https://www.linkedin.com/in/miten-patel-8939571b2/"><span className="mr-1 inline-flex">LinkedIn</span><IconBrandLinkedin className="inline" size={20} /></Link>
                </div>
            </header>

            <hr className="mb-10" />

            <main>
                <section>
                    <h5>Educations <IconSchool className="inline mb-1" size={18} /> </h5>
                    <div className="flex mt-4 justify-between items-start">
                        <h6 className="inline">Shantilal Shah Engineering College, Bhavnagar</h6>
                        <span className="inline">june 2019 - May 2023 </span>
                    </div>
                    <div className="flex mt-2 justify-between items-start">
                        <h6 className="inline">Bachelor Of Engineering, Information Technology</h6>
                        <i className="inline">CGPA - 8.56/10</i>
                    </div>
                </section>

                <hr className="my-10 w-7/12" />

                <section>
                    <h5>Experience <IconCode className="inline " size={18} /><span className="block mt-1 text-sm ">  ( 1 year 6 Mounth )</span> </h5>
                    <div className="space-y-10 mt-10">
                        <ul className="flex mt-4  mb-0 flex-col ">
                            <div className="flex justify-between items-start">
                                <Link href="https://drive.google.com/file/d/1TQBWtBP44BjmHE2JnLAk6gIxzeYOdPT9/view" target="_blank" className="inline"> {`1) Internship - Twowits internship`}  <IconLink className="inline mb-1" size={18} /> <span className="block mt-1 text-sm mx-5">  ( 1 Mounth )</span> </Link>
                                <li className="inline">dec 2021 - jan 2021 </li>
                            </div>
                            <li className="mr-4 mt-8 space-y-3">
                                <li> - I have proficiency in CSS for page styling, designing, and integrating dynamic data.</li>
                                <li> - I completed a one-month internship in web design during the lockdown period.</li>
                            </li>
                        </ul>
                        <ul className="flex mt-4  mb-0 flex-col">
                            <div className="flex justify-between items-start">
                                <Link className="inline" href='#'> {`2) Internship - Aspire SoftServ Pvt Ltd. `}  <IconLink className="inline mb-1" size={18} /> <span className="block mt-1 text-sm mx-5">  ( 6 Mounth )</span> </Link>
                                <li className="inline">Feb 2023 - Aug 2023 </li>
                            </div>
                            <li className="mr-4 mt-8 space-y-3">
                                <li> - I have worked extensively on a blog application using React, Node.js, Express, and MongoDB.</li>
                                <li> - I'm experienced in UI design, API calling, fetching data, CRUD operations with MongoDB, and authentication flow implementation.</li>
                            </li>
                        </ul>
                        <ul className="flex mt-4  mb-0 flex-col">
                            <div className="flex justify-between items-start">
                                <Link className="inline" href='https://qa.liquidox.com/' target="_blank" > {`3) LiquidOx - Aspire SoftServ Pvt Ltd. `}  <IconLink className="inline mb-1" size={18} /><span className="block mt-1 text-sm mx-5">  ( 1 year )</span> </Link>
                                <li className="inline"> After May 2023 <div className="h-1 w-1 rounded-full bg-white mr-0.5 animate-bounce transition-all delay-1000 inline-flex" /><div className="h-1 w-1 rounded-full bg-white animate-bounce transition-all delay-100 inline-flex mr-0.5" /><div className="h-1 w-1 rounded-full bg-white animate-bounce delay-300 transition-all inline-flex mr-0.5" /> </li>
                            </div>
                            <li className="mr-4 mt-8 space-y-3">
                                <li> - I'm currently working on Liquidox.</li>
                                <li> - Technologies I'm using include Next.js, GraphQL, TypeScript, and Tailwind CSS.</li>
                                <li> - I've contributed to third-party integrations for KYC and payment gateways.</li>
                                <li> - I've also contributed to implemented authentication flows including Apple and Google SSO.</li>
                            </li>
                        </ul>
                    </div>
                </section>

                <hr className="my-10 w-7/12" />

                <section>
                    <h5>Projects <IconDeviceLaptop className="inline " size={18} /><span className="mt-1 text-sm hidden">  (  )</span> </h5>
                    <div className="flex flex-row flex-wrap">
                        <ul className="flex space-y-10 mt-10 mb-0 flex-col">
                            <li className="inline" > {`1) Apple Sso with NextAuth `}</li>
                            <li className="mr-4 mt-8 space-y-3">
                                <li>Configure Apple Developer Accounts</li>
                                <li>Get & Set up the key file</li>
                                <li>Set up Next.js App with NextAuth</li>
                                <li>Connect & get response</li>
                            </li>
                        </ul>
                        <ul className="flex space-y-10 mt-10 mb-0 flex-col">
                            <li className="inline" > {`2) Blog app`}</li>
                            <li className="mr-4 mt-8 space-y-3">
                                <li> - Use MERN technologies</li>
                                <li> - Perform CRUD operations</li>
                                <li> - Utilize Material UI for system design</li>
                                <li> - Add authentication feature</li>
                            </li>
                        </ul>
                        <ul className="flex space-y-10 mt-10 mb-0 flex-col">
                            <li className="inline" > {`3) Dockerization Your Base Project`}</li>
                            <li className="mr-4 mt-8 space-y-3">
                                <li> - script for Node.js, React, or Angular app</li>
                                <li> - Working on Windows, macOS, and Linux</li>
                                <li> - Install and set up Docker if needed </li>
                                <li> - Install and set up Docker Desktop </li>
                                <li> - User input for selecting base image</li>
                                <li> - Handled port mapping </li>
                                <li> - Easy execution with simple user input</li>
                            </li>
                        </ul>
                    </div>
                </section>

                <hr className="my-12 w-7/12" />

                <section>
                    <h5>Technical Skills <IconAward className="inline " size={18} /><span className="mt-1 text-sm hidden">  (  )</span> </h5>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                        <ul className="flex  mt-10 mb-0 flex-col">
                            <li className="inline">1) Web Trio</li>
                            <li className="mr-4">
                                <ul>
                                    <li>- HTML</li>
                                    <li>- CSS</li>
                                    <li>- JavaScript</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="flex  mt-10 mb-0 flex-col">
                            <li className="inline">2) Front-end frameworks</li>
                            <li className="mr-4">
                                <ul>
                                    <li>- React</li>
                                    <li>- Next</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="flex  mt-10 mb-0 flex-col">
                            <li className="inline">3) Back-end frameworks</li>
                            <li className="mr-4">
                                <ul>
                                    <li>- Node</li>
                                    <li>- Express</li>
                                    <li>- Strapi</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="flex  mt-10 mb-0 flex-col">
                            <li className="inline">4) UI Libraries</li>
                            <li className="mr-4">
                                <ul>
                                    <li>- Tailwind CSS</li>
                                    <li>- Material UI</li>
                                    <li>- Shadowcn UI</li>
                                    <li>- Acerternity UI</li>
                                    <li>- Bootstrap</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="flex  mt-10 mb-0 flex-col">
                            <li className="inline">5) ORM's & fetching tech.</li>
                            <li className="mr-4">
                                <ul>
                                    <li>- Sequelize</li>
                                    <li>- GraphQL</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="flex  mt-10 mb-0 flex-col">
                            <li className="inline">6) Database technologies</li>
                            <li className="mr-4">
                                <ul>
                                    <li>- MongoDB</li>
                                    <li>- PostgreSQL</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="flex  mt-10 mb-0 flex-col">
                            <li className="inline">7) DevOps Essential Tools</li>
                            <li className="mr-4">
                                <ul>
                                    <li>- Git</li>
                                    <li>- GitHub</li>
                                    <li>- GitLab</li>
                                    <li>- Docker</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="flex  mt-10 mb-0 flex-col">
                            <li className="inline">8) AI tools</li>
                            <li className="mr-4">
                                <ul>
                                    <li>- ChatGPT</li>
                                    <li>- Phind AI</li>
                                    <li>- Gemini AI</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="flex  mt-10 mb-0 flex-col">
                            <li className="inline">9) Key Tools & Frameworks</li>
                            <li className="mr-4">
                                <ul>
                                    <li>- Postman</li>
                                    <li>- Axios</li>
                                    <li>- TypeScript</li>
                                    <li>- VS Code</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </section>
            </main>
        </div>
    );
}
