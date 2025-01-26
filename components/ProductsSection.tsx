// *********************
// Role of the component: products section intended to be on the home page
// Name of the component: ProductsSection.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <ProductsSection slug={slug} />
// Input parameters: no input parameters
// Output: products grid
// *********************

import React from "react";
import ProductItem from "./ProductItem";
import Heading from "./Heading";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;


// const ProductsSection = async () => {
//   // sending API request for getting all products
//   const data = await fetch(`${apiUrl}/api/products`);
//   const products = await data.json();
//   return (
//     <div className="bg-blue-500 border-t-4 border-white">
//       <div className="max-w-screen-2xl text-white mx-auto pt-20">
//         <Heading title="FEATURED PRODUCTS" />
//         <div className="grid grid-cols-4 justify-items-center max-w-screen-2xl mx-auto py-10 gap-x-2 px-10 gap-y-8 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
//           {products.map((product: Product) => (
//             <ProductItem key={product.id} product={product} color="white" />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsSection;

const ProductsSection = async () => {
  try {
    // Wrap fetch in try-catch to handle network or API errors
    const response = await fetch(`${apiUrl}/api/products`, {
      // Add error handling options
      headers: {
        'Content-Type': 'application/json'
      },
      // Optional: add timeout
      signal: AbortSignal.timeout(5000)
    });

    // Check if the response is OK (status in 200-299 range)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Safely parse JSON
    const products = await response.json();

    // Validate products data
    if (!Array.isArray(products) || products.length === 0) {
      return (
        <div className="text-red-500 p-4">
          No products found. Please try again later.
        </div>
      );
    }

    return (
      <div className="bg-blue-500 border-t-4 border-white">
        <div className="max-w-screen-2xl text-white mx-auto pt-20">
          <Heading title="FEATURED PRODUCTS" />
          <div className="grid grid-cols-4 justify-items-center max-w-screen-2xl mx-auto py-10 gap-x-2 px-10 gap-y-8 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {products.map((product: Product) => (
              <ProductItem key={product.id} product={product} color="white" />
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    // Comprehensive error handling
    console.error('Failed to fetch products:', error);
    
    return (
      <div className="text-red-500 p-4">
        {error instanceof TypeError 
          ? "Network error. Please check your connection." 
          : "Unable to load products. Please try again later."}
      </div>
    );
  }
};

export default ProductsSection;
