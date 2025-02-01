import React from "react";

export default function TagButton({ label }) {
  return (
    <div>
      <a
        href="#"
        className="relative text-black transition-all text-sm md:text-base group"
      >
        {label}
        <span className="absolute bottom-0 right-0 w-full h-[1px] bg-black transition-all duration-300 group-hover:w-0 "></span>
      </a>
    </div>
  );
}
