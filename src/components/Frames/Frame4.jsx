import React from "react";
import HorizontalLine from "../Line/HorizontalLine";
import Button2 from "../Button/Button2";
import Button from "../Button/Button";

const cards = [
  {
    id: 1,
    image:
      "https://assets-global.website-files.com/63c3f1995d4c3581bbc944b5/63c68f2ecddac415070de2e8_team-01-p-800.webp",
    name: "Annette Black",
    buttonTitle: "Branding",
  },
  {
    id: 2,
    image:
      "https://assets-global.website-files.com/63c3f1995d4c3581bbc944b5/63c68f2e0a57ab81ad90f31f_team-02-p-800.webp",
    name: "Devon Lane",
    buttonTitle: "Branding",
  },
  {
    id: 3,
    image:
      "https://assets-global.website-files.com/63c3f1995d4c3581bbc944b5/63c68f2ed7fe4b9a5bef7ee1_team-03-p-800.webp",
    name: "Chris Watson",
    buttonTitle: "Marketing",
  },
];

export default function Frame4() {
  return (
    <div className="container mx-auto px-6">
      <div className="">
        <h3 className="uppercase text-gray-600 tracking-wide">Our Team</h3>
        <HorizontalLine />
        <div className="flex flex-col md:flex-row justify-between items-center my-10">
          <h1 className="text-4xl md:text-5xl text-gray-900">
            Our Team of Experts
          </h1>
          <Button2 label="About Us" className="mt-4 md:mt-0" />
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-16">
        <div className="bg-slate-100 flex flex-col justify-between h-full p-12">
          <div className="mb-24">
            <span className="uppercase text-sm text-gray-600">
              Join the Team
            </span>
            <h2 className="text-4xl font-thin text-gray-900 mt-2 leading-tight">
              Want to <br /> shape the <br /> future of <br /> branding?
            </h2>
            <p className="text-gray-500 text-lg mt-2 leading-normal">
              Join us and shape the <br /> future of branding <br /> today!
            </p>
          </div>
          <div className="mt-auto">
            <Button label="Apply Now" />
          </div>
        </div>
        {cards.map((card) => (
          <div key={card.id} className="flex flex-col items-center">
            <img
              className="h-96 w-full object-cover"
              src={card.image}
              alt={card.name}
            />
            <div className="flex justify-between items-center w-full mt-4 px-2">
              <h3 className="text-lg font-thin text-gray-900">{card.name}</h3>
              <div className="text-xs font-thin">
                <Button2 label={card.buttonTitle} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
