import React from "react";
import HorizontalLine from "../Line/HorizontalLine";

export default function Footer() {
  return (
    <div className="text-gray-500">
      <HorizontalLine />
      <div className="my-8 flex justify-between items-center">
        <div className="text-sm font-sans">
          © Made by{" "}
          <a href="#" className="hover:cursor-pointer text-slate-900">
            Pawel Gola
          </a>{" "}
          - Powered By{" "}
          <a href="#" className="text-slate-900">
            Webflow
          </a>
        </div>
        <div className="flex justify-between items-center space-x-5">
          <div>Privacy</div>
          <div>Imprint</div>
        </div>
      </div>
    </div>
  );
}
