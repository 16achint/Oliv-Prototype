import React from "react";
import Card from "./Cards/Card";

const cardData = [
  {
    id: 1,
    title: "Brand Strategy",
    description:
      "We help businesses define their unique brand message and branding positioning.",
    linkText: "About Strategy",
  },
  {
    id: 2,
    title: "Visual Identity",
    description:
      "We create visual elements such as logos, packaging, and marketing materials for your brand.",
    linkText: "About Identity",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "We help businesses to promote their brand online and create engaging digital experiences.",
    linkText: "About Marketing",
  },
  {
    id: 4,
    title: "Brand Management",
    description:
      "We help businesses to implement their brand across all touchpoints and ensure consistency.",
    linkText: "About Management",
  },
];

export default function Cards() {
  return (
    <div className="container mt-12 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            linkText={card.linkText}
          />
        ))}
      </div>
    </div>
  );
}
