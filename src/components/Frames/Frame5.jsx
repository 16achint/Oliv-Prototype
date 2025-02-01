import React from "react";
import HorizontalLine from "../Line/HorizontalLine.jsx";

const testimonials = [
  {
    logo: "https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c418ce6a0062cf2d279e35_client-logo-02.svg",
    quote: "“We couldn't be happier with the branding strategy developed.”",
    text: "We approached Øliv for a complete rebranding of our company and we couldn't be happier with the results. Their market research and analysis helped us define our target audience and unique brand positioning. Their team then created a visually compelling logo and consistent branding across all touchpoints.</br> </br>The new brand has helped us stand out in the market and increase sales. We highly recommend Øliv to any business looking to rebrand or refresh their brand.",
  },
  {
    logo: "https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c418cea9dabef95143b0c1_client-logo-06.svg",
    quote: "“Expert Brand Management from Øliv”",
    text: "As a growing business, it was important for us to have a strong and consistent brand. Øliv's brand management services helped us to achieve this. They conducted a thorough brand audit and provided valuable insights and recommendations.</br> </br>Their ongoing monitoring and implementation of our brand has helped us maintain consistency and stay aligned with our business goals. We couldn't be happier with the results and highly recommend Øliv's brand management services.",
  },
];

export default function Frame5() {
  return (
    <div className="py-24 grid grid-cols-4 gap-5">
      {testimonials.map((testimonial, index) => (
        <React.Fragment key={index}>
          <div></div>
          <div className="w-fit">
            <img src={testimonial.logo} alt="logo" />
          </div>
          <div className="col-span-2 flex flex-col space-y-10">
            <h1 className="text-3xl font-thin font-sans">
              {testimonial.quote}
            </h1>
            <div className="leading-relaxed font-sans text-lg">
              <p dangerouslySetInnerHTML={{ __html: testimonial.text }} />
            </div>
          </div>
          <div></div>
          <div className="col-span-3 my-12">
            {index === 0 && <HorizontalLine className="" />}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

// export default function Frame5() {
//   return (
//     <div className="py-32">
//       {testimonials.map((testimonial, index) => (
//         <div key={index}>
//           <div className="grid grid-cols-4 gap-5 mt-10">
//             <div></div>
//             <div className="w-fit">
//               <img src={testimonial.logo} alt="logo" />
//             </div>
//             <div className="col-span-2 flex flex-col space-y-10">
//               <h1 className="text-3xl font-thin font-sans">
//                 {testimonial.quote}
//               </h1>
//               <div className="leading-relaxed font-sans text-lg">
//                 <p dangerouslySetInnerHTML={{ __html: testimonial.text }} />
//               </div>
//             </div>
//           </div>
//           {index === 0 && <HorizontalLine />}
//         </div>
//       ))}
//     </div>
//   );
// }

// import React from "react";
// import HorizontalLine from "./HorizontalLine.jsx";
// import Testimonial from "./Testimonial.jsx"; // import the new component

// export default function Frame5() {
//   return (
//     <div className="py-32">
//       <Testimonial
//         logo="https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c418ce6a0062cf2d279e35_client-logo-02.svg"
//         quote="“We couldn't be happier with the branding strategy developed.”"
//         content={
//           <>
//             We approached Øliv for a complete rebranding of our company and we
//             couldn't be happier with the results. Their market research and
//             analysis helped us define our target audience and unique brand
//             positioning. Their team then created a visually compelling logo and
//             consistent branding across all touchpoints.
//             <br />
//             <br />
//             The new brand has helped us stand out in the market and increase
//             sales. We highly recommend Øliv to any business looking to rebrand
//             or refresh their brand.
//           </>
//         }
//       />
//       <div className="my-20">
//         <HorizontalLine />
//       </div>
//       <Testimonial
//         logo="https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c418cea9dabef95143b0c1_client-logo-06.svg"
//         quote="“Expert Brand Management from Øliv”"
//         content={
//           <>
//             As a growing business, it was important for us to have a strong and
//             consistent brand. Øliv's brand management services helped us to
//             achieve this. They conducted a thorough brand audit and provided
//             valuable insights and recommendations.
//             <br />
//             <br />
//             Their ongoing monitoring and implementation of our brand has helped
//             us maintain consistency and stay aligned with our business goals. We
//             couldn't be happier with the results and highly recommend Øliv's
//             brand management services.
//           </>
//         }
//       />
//     </div>
//   );
// }
