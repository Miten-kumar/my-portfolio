"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import webtrio from "../../../public/next_react.png"
import html from "../../../public/html.png"
import css from "../../../public/css-logo.png"
import js from "../../../public/js.png"
import node from "../../../public/node js.png"
import express from "../../../public/express.png"
import shadcn from "../../../public/shadcn.png"
import taiwind from "../../../public/taiwind.png"
import material from "../../../public/material_ui.png"

const content = [
    {
        title: "Web Dev Trio",
        description: "The web is built on the powerful trio of HTML, CSS, and JavaScript.  HTML structures the content, CSS styles the presentation, and JavaScript brings interactivity. Together, they  transform plain text into dynamic and engaging websites.", content: (
            <div className="h-full w-full  flex flex-row  items-center justify-between">
                <Image src={html}  alt="no-image" className="animate-bounce delay-1000" width={100} />
                <Image src={css}  alt="no-image" className="animate-bounce delay-100" width={100}/>
                <Image src={js}  alt="no-image" className="animate-bounce delay-300" width={100} />
            </div>
        ),
    },
    {
        title: "Front-end Frameworks",
        description: "React builds user interfaces with reusable components, allowing for clean and maintainable code. Next.js extends React by adding features like server-side rendering and static site generation. This powerful duo helps developers create fast, scalable, and SEO-friendly web applications.", content: (
            <div className="h-full w-full  flex items-center justify-center">
                <Image src={webtrio}  alt="no-image" className="animate-bounce" />
            </div>
        ),
    },
    {
        title: "Backend Frameworks",
        description: "Node.js unlocks the power of JavaScript for server-side development. It excels at building fast and efficient applications. Express.js acts as a powerful toolkit on top of Node.js, streamlining web application creation. By offering features for routing, middleware, and more, Express.js makes building APIs and web applications with Node.js a breeze.", content: (
            <div className="h-full w-full  flex flex-row  items-center justify-around">
                <Image src={node}  alt="no-image" className="animate-bounce delay-1000" width={100} />
                <Image src={express}  alt="no-image" className="animate-bounce delay-100" width={100}/>

            </div>
        ),
    },
    {
        title: "Css (UI) Frameworks",
        description: "UI frameworks like Shadcn UI, Tailwind CSS, Material UI, and Acertitude UI accelerate web development.  Each offers pre-built components or utility classes for styling and functionality.  This saves time and ensures consistency, allowing developers to focus on the unique features of their web application.", content: (
            <div className="h-full w-full  flex flex-row  items-center justify-around">
                <Image src={material}  alt="no-image" className="animate-bounce delay-500" width={80} />
                <Image src={shadcn}  alt="no-image" className="animate-bounce delay-1000" width={130}/>
                <Image src={taiwind}  alt="no-image" className="animate-bounce delay-75" width={80} />
            </div>
        ),
    },
    {
        title: "Helpful AI Tools",
        description: "When searching for the best solutions or optimizing code, I turn to ChatGPT, Phind AI, and sometimes Gemini AI. These tools serve as versatile converters, helping me navigate through complex tasks and adhere to best practices effortlessly, ensuring optimal outcomes.", content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Running out of content
            </div>
        ),
    },
];
export function StickyScrollRevealDemo() {
    return (
        <div className="w-10/12 mx-auto -translate-y-20">
            <StickyScroll content={content} />
        </div>
    );
}
