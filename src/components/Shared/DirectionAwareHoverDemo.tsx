"use client";

import { DirectionAwareHover } from "../ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {

    return (
        <div className="h-[40rem] relative  flex items-center justify-center">
            <DirectionAwareHover >
                <p className="font-bold text-xl">In the mountains</p>
                <p className="font-normal text-sm">$1299 / night</p>
            </DirectionAwareHover>    </div>
    );
}
