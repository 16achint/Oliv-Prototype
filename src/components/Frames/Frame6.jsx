import React from "react";
import Button from "../Button/Button";

export default function Frame6() {
  return (
    <div className="p-24 grid grid-cols-3 bg-slate-100 font-sans">
      {/* Left Section */}
      <div className="font-extralight uppercase text-sm flex flex-col items-start text-black">
        Contact
      </div>

      {/* Right Section */}
      <div className="flex flex-col space-y-12 col-span-2">
        <div className="space-y-6">
          <h1 className="text-6xl font-thin leading-tight">
            Let's start building your brand's unique story together.
          </h1>
          <p className="text-2xl font-50 font-sans">
            Want to see what a difference a strong brand can <br /> make?
            Request a consultation today.
          </p>
        </div>
        <div className="text-xl">
          <Button label="Get in Touch" className="mt-4 " />
        </div>
      </div>
    </div>
  );
}
