import React from "react";

export default function Button2({ label }) {
  return (
    <div className="rounded-full border-2 w-fit border-black px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white transition">
      <div className="px-2">{label}</div>
    </div>
  );
}
