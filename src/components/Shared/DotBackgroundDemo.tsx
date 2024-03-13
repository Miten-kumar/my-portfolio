import React from "react";
import background from "../../../public/93826.jpg"
import Image from "next/image";

export function GridSmallBackgroundDemo() {
  return (
<div className="h-[600px] w-full  dark:bg-black absolute">
  <Image src={background}  className="absolute element h-[600px]  overflow-hidden top-0 -z-10 object-cover" alt="no-background"
  />
</div>

  );
}
