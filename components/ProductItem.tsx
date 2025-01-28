// *********************
// Role of the component: Product item component 
// Name of the component: ProductItem.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <ProductItem product={product} color={color} />
// Input parameters: { product: Product; color: string; }
// Output: Product item component that contains product image, title, link to the single product page, price, button...
// *********************

// // Printing-eCommerce-Shop/components/ProductItem.tsx

// import Image from "next/image";
// import React from "react";
// import Link from "next/link";

// const ProductItem = ({
//   product,
//   color,
// }: {
//   product: Product;
//   color: string;
// }) => {
//   return (
//     <div className="flex flex-col items-center gap-y-2">
//       <Link href={`/product/${product.slug}`}>
//         <Image
//           src={
//             product.mainImage
//               ? `/${product.mainImage}`
//               : "/product_placeholder.jpg"
//           }
//           width="0"
//           height="0"
//           sizes="100vw"
//           className="w-auto h-[300px]"
//           alt={product?.title}
//         />
//       </Link>
//       <Link
//         href={`/product/${product.slug}`}
//         className={
//           color === "black"
//             ? `text-xl text-black font-normal mt-2 uppercase`
//             : `text-xl text-white font-normal mt-2 uppercase`
//         }
//       >
//         {product.title}
//       </Link>
//       <p
//         className={
//           color === "black"
//             ? "text-lg text-black font-semibold"
//             : "text-lg text-white font-semibold"
//         }
//       >
//         {/* ₦{product.price.toLocaleString("en-NG")} */}
//       </p>
//     </div>
//   );
// };

// export default ProductItem;

// Printing-eCommerce-Shop/components/ProductItem.tsx

import Image from "next/image";
import React from "react";
import Link from "next/link";

// Define the Product type if not already defined elsewhere
type Product = {
  id: string; 
  slug: string;
  mainImage?: string;
  title: string;
  price: number;
};

const ProductItem = ({
  product,
  color,
}: {
  product: Product;
  color: string;
}) => {
  // Handle missing product gracefully
  if (!product) {
    return (
      <div className="flex flex-col items-center gap-y-2 text-red-500">
        <p>Product data is unavailable.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-y-2">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={
            product.mainImage
              ? `/${product.mainImage}`
              : "/product_placeholder.jpg"
          }
          width={300} // Fixed width for proper rendering
          height={300} // Fixed height for proper rendering
          sizes="100vw"
          className="w-auto h-[300px]"
          alt={product?.title || "Product Image"}
        />
      </Link>
      <Link
        href={`/product/${product.slug}`}
        className={
          color === "black"
            ? "text-xl text-black font-normal mt-2 uppercase"
            : "text-xl text-white font-normal mt-2 uppercase"
        }
      >
        {product.title || "Untitled Product"}
      </Link>
      <p
        className={
          color === "black"
            ? "text-lg text-black font-semibold"
            : "text-lg text-white font-semibold"
        }
      >
        {product.price ? `₦${product.price.toLocaleString("en-NG")}` : "Price not available"}
      </p>
    </div>
  );
};

export default ProductItem;
