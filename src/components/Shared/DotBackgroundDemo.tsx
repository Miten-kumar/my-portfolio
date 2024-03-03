// import React from "react";
// import { TypewriterEffectSmoothDemo } from "./TypewriterEffectSmoothDemo";
// import { ThreeDCardDemo } from "./ThreeDCardDemo";

import { ThreeDCardDemo } from "./ThreeDCardDemo";
import { TypewriterEffectSmoothDemo } from "./TypewriterEffectSmoothDemo";

// export function DotBackgroundDemo() {
//   return (
//     <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
//       {/* Radial gradient for the container to give a faded look */}
//       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
//       </div>
//       <div className="md:w-full grid md:grid-cols-3 grid-cols-1 justify-center it gap-3">
//         <div className="md:col-span-2 col-span-1 flex justify-center items-center">
//           <TypewriterEffectSmoothDemo />
//         </div>
//         <div>
//           <ThreeDCardDemo />
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";

export function GridSmallBackgroundDemo() {
  return (
    <div className="md:h-screen h-svh  w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="md:w-full grid md:grid-cols-3 grid-cols-1 justify-center it gap-3">
        <div className="md:col-span-2 col-span-1 flex justify-center items-center">
          <TypewriterEffectSmoothDemo />
        </div>
        <div>
          <ThreeDCardDemo />
        </div>
      </div>
    </div>
  );
}
