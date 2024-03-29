"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote?: string;
        image?: any;
        class?: string
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLDataElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div ref={containerRef} className={cn("scroller relative my-auto   w-full overflow-hidden", className)} >

            {/* <hr className="hr-text gradient mt-1" data-content="MY SKILL" /> */}
            <data ref={scrollerRef} className={cn(" flex  min-w-full shrink-0 no-quotes w-max flex-nowrap ", start && "animate-scroll ", pauseOnHover && "hover:[animation-play-state:paused]")}>
                {items.map((item, idx) => (
                    <div className="w-96 relative flex-shrink-0" key={idx} >
                        <div aria-hidden="true" className="user-select-none -z-1 pointer-events-none absolute -left-0.5  h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
                        <span className=" relative z-20  text-xs  text-slate-100 ">
                            {item.quote}
                        </span>
                        {item?.image ? <Image height={50} width={50} src={item.image} alt="no-icon" className={`object-cover h-10 w-10 !m-0 !p-0 object-top rounded-full group-hover:scale-105 group-hover:z-30   relative ${item?.class ? item?.class : ""}`} /> : ""}
                    </div>
                ))}
            </data>
        </div>
    );
};
