import React from "react";
import Button from "../Button/Button.jsx";

const cardData = [
  {
    id: 1,
    title: "Helping Brands <br /> Stand Out",
    label: "Bold Moves,<br /> Big Impact.",
    bgColor: "bg-green-50 gap-48 p-8 grid  py-14",
  },
  {
    id: 2,
    title: "How We Work <br /> with Our Clients",
    label: "Honesty is the <br /> Best Policy.",
    bgColor: "bg-gray-100 gap-48 p-8 grid  py-14",
  },
  {
    id: 3,
    title: "",
    label: "",
    bgColor: "bg-white",
  },
  {
    id: 4,
    title: "",
    label: "",
    bgColor: "bg-white",
  },
  {
    id: 5,
    title: "Collaboration is Key",
    label: "Building Strong,<br />Partnerships.",
    bgColor: "bg-gray-100 gap-48 p-8 grid  py-14",
  },
  {
    id: 6,
    title: "Our Approach",
    label: "Achieving <br /> Real Results.",
    bgColor: "bg-orange-100 gap-48 p-8 grid  py-14",
  },
  {
    id: 7,
    title: "Our Philosophy",
    label: "Building Trust, <br />Not Pitching.",
    bgColor: "bg-yellow-50 gap-48 p-8 grid  py-14",
  },
  {
    id: 8,
    title: "",
    label: "",
    bgColor: "bg-white p-8 grid  py-14 ",
  },
  {
    id: 9,
    title:
      "Crafting Exceptional <br /> Digital Experiences Across <br /> All Platforms: Our Goal at <br /> Øliv. ",
    label: "",
    bgColor: "text-5xl leading-tight font-thin gap-0",
  },
  {
    id: 10,
    title: "",
    label: "",
    bgColor: "",
  },
  {
    id: 11,
    title: "",
    label: "",
    bgColor: "",
  },
  {
    id: 12,
    title:
      "At Øliv, our goal is to craft exceptional digital experiences across all platforms. In today's digitally driven world, having a strong online presence is paramount for businesses to connect with their target audience effectively. We understand the importance of delivering seamless and engaging experiences that leave a lasting impression.",
    label: "",
    bgColor: "mt-5 text-lg ",
  },
  {
    id: 13,
    title:
      "Our team of skilled designers, developers, and digital strategists collaborate to create customized digital solutions tailored to your unique business needs. Whether it's designing a user-friendly website, developing a mobile application, or enhancing your e-commerce platform, we strive to provide solutions that not only meet but exceed your expectations.",
    label: "",
    bgColor: "text-lg mt-5",
  },
];

export default function Cards2() {
  return (
    <div className="py-20">
      <div className="grid grid-cols-4 gap-5">
        <div className="bg-slate-100 p-8 grid grid-rows-2 gap-28">
          <div>
            <span className="text-xs uppercase tracking-wide text-gray-600">
              SERVICES
            </span>
            <h3 className="text-2xl font-light text-black mt-3 ">
              Our Approach <br /> to Branding.
            </h3>
          </div>
          <div className="flex justify-center items-center text-lg ">
            <Button label="About Øliv ↗" className="mt-auto mb-4" />
          </div>
        </div>
        {cardData.map((cards) => (
          <div
            key={cards.id}
            className={`  ${cards.bgColor} ${
              cards.id === 9 ? "col-span-2" : ""
            } `}
          >
            <p dangerouslySetInnerHTML={{ __html: cards.title }} />
            <p
              className={`text-black text-2xl font-light leading-1`}
              dangerouslySetInnerHTML={{ __html: cards.label }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
