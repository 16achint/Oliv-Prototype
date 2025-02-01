import React from "react";
import Button from "../Button/Button";

export default function MainHeading() {
  return (
    <div className="flex flex-col space-y-4 py-8 mt-36">
      <header className="text-8xl text-gray-900 font-thin">
        <h1>Building Brands, One</h1>
        <h1>Success Story at a Time.</h1>
      </header>
      <section className="mt-6 text-2xl text-gray-600 font-thin ">
        <p className="">Create a Brand That Resonates: We Can Help You</p>
        <p className="">Define and Communicate Your Unique Message.</p>
      </section>
      <Button label="Our Services" />
    </div>
  );
}
