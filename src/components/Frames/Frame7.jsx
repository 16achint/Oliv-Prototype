import React from "react";
import HorizontalLine from "../Line/HorizontalLine.jsx";
import Button2 from "../Button/Button2.jsx";
import TagButton from "../Button/TagButton.jsx";
const cards = [
  {
    id: 1,
    image:
      "https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6926c3e0cadb265cce971_post-01-thumb-p-800.webp",
    h3: "The Importance of a Strong Brand Positioning",
    tag: "Read More",
  },
  {
    id: 2,
    image:
      "https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c692830763057ff261e841_post-02-thumb-p-800.webp",
    h3: "The Role of Market Research in Branding Strategy",
    tag: "Read More",
  },
  {
    id: 3,
    image:
      "https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c69293cb2ab32755a1a6d7_post-03-thumb-p-500.webp",
    h3: "Creating a Consistent Brand Identity Across All Touchpoints",
    tag: "Read More",
  },
  {
    id: 4,
    image:
      "https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c692a30a57ab0d6c9128fe_post-04-thumb-p-800.webp",
    h3: "The Impact of Social Media on Branding",
    tag: "Read More",
  },
];

export default function Frame7() {
  return (
    <div className="py-12">
      <div className="flex flex-col space-y-5 mb-20">
        <div className="uppercase text-sm">Blog</div>
        <HorizontalLine />
        <div className="flex justify-between">
          <h1 className="text-5xl font-sans tracking-normal">
            Insights on Branding
          </h1>
          <Button2 label={"See all"} />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {cards.map(({ id, image, h3, tag }) => (
          <div key={id} className="flex flex-col space-y-3">
            <img src={image} alt={`image-${id}`} className="w-full h-auto" />
            <h3 className="text-xl font-sans font-thin font-medium">{h3}</h3>
            <TagButton label={tag} />
          </div>
        ))}
      </div>
    </div>
  );
}
