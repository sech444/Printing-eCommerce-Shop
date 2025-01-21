// *********************
// Role of the component: Footer component
// Name of the component: Footer.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Footer />
// Input parameters: no input parameters
// Output: Footer component
// *********************

import { navigation } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <div className="bg-black bg-opacity-50 g-[url('/background2.jpg')] bg-cover bg-center bg-no-repeat text-white bg-sky-500/50 ...">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8 pt-24 pb-14">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <Image
              src="/logo v1.png"
              alt="La Moniega Logo"
              width={250}
              height={250}
              className="h-auto w-auto"
            />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-lg font-bold leading-6 text-blue-600">
                    Sale
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.sale.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-black hover:text-gray-700"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-base font-bold leading-6 text-blue-600">
                    About Us
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.about.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-black hover:text-gray-700"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-bold leading-6 text-blue-600">
                    Buying
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.buy.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-black hover:text-gray-700"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-base font-bold leading-6 text-blue-600">
                  Contact Us
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
            <strong>Address:</strong> GF10B Noble Plaza Area 10 garki Abuja <br />
            <strong>Phone:</strong>  08069249249, 08098440096 <br />
            <strong>Email:</strong> info@lamoneiqa.ng <br />
            <strong>Website:</strong> lamoneiqa.ng
          </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
