// *********************
// Role of the component: Category wrapper that will contain title and category items
// Name of the component: CategoryMenu.tsx
// Developer: Moses Sechere
// Version: 1.0
// Component call: <CategoryMenu />
// Input parameters: no input parameters
// Output: section title and category items
// *********************

// import React from "react";
// import CategoryItem from "./CategoryItem";
// import Image from "next/image";
// import { categoryMenuList } from "@/lib/utils";
// import Heading from "./Heading";

// const CategoryMenu = () => {
//   return (
//     <div className="py-10 bg-transparent bg-[url('/background45.jpg')] bg-cover bg-center bg-no-repeat">
      
//       <div className="block text-blue-600 ">
//       <Heading  title="BROWSE CATEGORIES" />
//       </div>
//       <div className="max-w-screen-2xl mx-auto py-10 gap-x-5 px-16 max-md:px-10 gap-y-5 grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-[450px]:grid-cols-1 ">
//         {categoryMenuList.map((item) => (
//           <CategoryItem title={item.title} key={item.id} href={item.href}>
//             <Image src={item.src} width={60} height={60} alt={item.title} />
//           </CategoryItem>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryMenu;


"use client";

import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import Image from "next/image";
import { categoryMenuList } from "@/lib/utils";
import Heading from "./Heading";
import { ChevronDown, ChevronUp } from "lucide-react";

const CategoryMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-10 bg-transparent bg-[url('/background45.jpg')] bg-cover bg-center bg-no-repeat">
      <div 
        className="block text-blue-600 cursor-pointer md:cursor-default"
        onClick={toggleMenu}
      >
        <div className="flex items-center justify-center gap-2">
          <Heading title="BROWSE CATEGORIES" />
          <span className="md:hidden">
            {isOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </span>
        </div>
      </div>
      
      <div className={`
        max-w-screen-2xl mx-auto py-10 gap-x-5 px-16 max-md:px-10 gap-y-5 
        grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-[450px]:grid-cols-1
        ${!isOpen ? 'max-md:hidden' : ''}
      `}>
        {categoryMenuList.map((item) => (
          <CategoryItem 
            title={item.title} 
            key={item.id} 
            href={item.href}
          >
            <Image 
              src={item.src} 
              width={60} 
              height={60} 
              alt={item.title} 
            />
          </CategoryItem>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;