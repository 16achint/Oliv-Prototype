import React from "react";

function Testimonial({ logo, quote, content }) {
  return (
    <div className="grid grid-cols-4 gap-5">
      <div></div>
      <div className="w-fit">
        <img src={logo} alt="logo" />
      </div>
      <div className="col-span-2 flex flex-col space-y-10">
        <h1 className="text-3xl font-thin font-sans">{quote}</h1>
        <div className="leading-relaxed font-sans text-lg">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
