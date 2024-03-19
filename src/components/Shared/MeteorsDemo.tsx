import React from "react";
import { Meteors } from "../ui/meteors";

export function MeteorsDemo() {
  return (
    // <div className=" h-full overflow-hidden">
    <>
      <div className="w-full mx-auto h-full relative overflow-hidden items-center justify-center rounded-md">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-3/5 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

      <div className="grid grid-cols-4  justify-center w-10/12  mx-auto mt-10">

        <div className=" w-full relative max-w-xs mx-auto h-min">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800   px-2 py-2 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
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

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Ready ? Let&apos;s Getting Touch
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              Ready to take the next step? Drop me a message via below press Explor button and let's bring your ideas to life together!
            </p>

            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Explore
            </button>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
        <div className="flex flex-col gap-2 mx-auto">
          <h4 className="border-b-2 border-blue-500 hover:border-blue-400 w-min mb-5">Site</h4>
          <span>About</span>
          <span> Resume</span>
          <span> Blogs</span>
          <span> Skills</span>
          <span> Projects</span>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="border-b-2 w-min border-teal-500 hover:border-teal-300 mb-5">Contact</h4>
          <span >+91 9510039054</span>
          <span>mitup7869@gmail.com</span>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="border-b-2 w-min border-red-500 hover:border-red-300 mb-5">Social</h4>
          <span>LinkedIn</span>
          <span>Instagram</span>
          <span>Github-One</span>
          <span>Github-Two</span>
        </div>
      </div>
      </div>
    </>
    // </div>
  );
}
