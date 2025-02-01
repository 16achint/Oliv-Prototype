import React from "react";

function Button({ label }) {
  return (
    <div>
      <button
        className="rounded-full border-2 text-white bg-black border-black px-6 py-3 cursor-pointer hover:bg-gray-800 transition"
        type="button"
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
