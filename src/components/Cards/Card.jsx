import React from "react";

export default function Card({ title, description, linkText }) {
  return (
    <div className="bg-gray-100 p-10 rounded-sm h-96  grid place-items-center">
      <h3 className="text-2xl md:text-3xl font-thin text-center ">{title}</h3>
      <p className="text-gray-600 text-lg text-center ">{description}</p>
      <a
        href="#"
        className="relative text-black transition-all text-sm md:text-base group"
      >
        {linkText}
        <span className="absolute bottom-0 right-0 w-full h-[2px] bg-black transition-all duration-300 group-hover:w-0 "></span>
      </a>
    </div>
  );
}
