import React from "react";
import HorizontalLine from "../Line/HorizontalLine.jsx";
import Button2 from "../Button/Button2.jsx";

const projects = [
  {
    id: 1,
    title: "Invision Studio",
    label: "Marketing",
    imgSrc:
      "https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b981e34f347cacdc73b6_project-01-thumb.webp",
  },
  {
    id: 2,
    title: "Square Media",
    label: "Branding",
    imgSrc:
      "https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b96d86c0c985079d8d60_project-02-thumb.webp",
  },
  {
    id: 3,
    title: "Vision Design",
    label: "Social Media",
    imgSrc:
      "https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b953a2c1a5706f63bbe1_project-03-thumb.webp",
  },
  {
    id: 4,
    title: "Design Bros",
    label: "Branding",
    imgSrc:
      "https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b943f334e17d7007a0ea_project-04-thumb.webp",
  },
];

function Frame2() {
  return (
    <div className="pt-32 grid grid-cols-1 gap-6">
      <div>
        <div>OUR WORK</div>
        <HorizontalLine />
        <div className="flex justify-between mt-4">
          <h2 className="text-3xl">Selected Work</h2>
          <Button2 label="All Work" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {projects.map((project) => (
            <div key={project.id} className="space-y-4">
              <div className="relative overflow-hidden">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-xl">{project.title}</h3>
                <Button2 className="font-light" label={project.label} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Frame2;
