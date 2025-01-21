// *********************
// Role of the component: IntroducingSection with the text "Introducing LA MONEIQA"
// Name of the component: IntroducingSection.tsx
// Developer: Moses Sechere
// Version: 1.0
// Component call: <IntroducingSection />
// Input parameters: no input parameters
// Output: Section with the text "Introducing LA MONEIQA" and button
// *********************

import Link from "next/link";
import React from "react";

const IntroducingSection = () => {
  return (
    // <div className="py-20 pt-24 bg-gradient-to-l from-white to-blue-600">
     <div className="py-16 bg-gradient-to-l from-white to-blue-600 max-md:pt-8">

      <div className="text-center flex flex-col gap-y-5 items-center">
        <h2 className="text-white text-8xl font-extrabold text-center mb-2 max-md:text-6xl max-[480px]:text-4xl">
          INTRODUCING <span className="text-black"> LA'</span><span className="text-blue-600">MONEIQA</span><br />
          <span className="text-black">Integrated Services Ltd</span>
        </h2>
        <div>
          <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            We Provide all Kinds of Printing Services.
          </p>
          <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            We Bring You the Best.
          </p>
          {/* <Link href="/shop" className="block text-blue-600 bg-white font-bold px-12 py-3 text-xl hover:bg-gray-100 w-96 mt-2  max-md:text-lg max-md:w-72 max-[480px]:w-60 mx-auto">
            SHOP NOW
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default IntroducingSection;
