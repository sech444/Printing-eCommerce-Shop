

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      className="h-[600px] w-full  bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat max-lg:h-[800px] max-md:h-[900px]"
    >
      <div className="bg-black bg-opacity-50 h-full overflow-y-auto">
        <div className="grid grid-cols-2 items-center justify-items-center px-10 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10">
          <div className="flex flex-col gap-y-5 px-5 text-center max-lg:text-left">
            <h1 className="text-6xl text-white font-bold mb-3 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl">
              PRINTING JUST GOT EASY!
            </h1>
            <p className="text-white max-sm:text-sm">
              Welcome to a new era of printing excellence, where creativity meets technology. At our premium printing service, we pride ourselves on being your go-to destination for all things print. Whether you&apos;re a small business seeking professional marketing materials, an artist looking to showcase your work, or an individual with a unique project in mind, we have the capabilities to bring your ideas to life.
            </p>
            {/* <p className="text-white max-sm:text-sm">
              Our state-of-the-art technology ensures that every print is vibrant, precise, and true to your vision. We offer a diverse range of printing services, including high-quality business cards, eye-catching flyers, stunning posters, and custom merchandise. With our expert craftsmanship and attention to detail, you can trust that each piece is crafted to perfection.
            </p> */}
            <div className="flex gap-x-1 max-lg:flex-col max-lg:gap-y-1">
              <button className="bg-white text-blue-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
                BUY NOW
              </button>
              <button className="bg-white text-blue-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center h-full max-lg:order-first">
            <Image
              src="/banner.gif"
              width={400}
              height={400}
              alt="smart watch"
              className="max-md:w-[300px] max-md:h-[300px] max-sm:h-[250px] max-sm:w-[250px] w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;