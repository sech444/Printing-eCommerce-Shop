// File: pages/[productSlug].tsx

import {
  StockAvailabillity,
  UrgencyText,
  SingleProductRating,
  ProductTabs,
  SingleProductDynamicFields,
  AddToWishlistBtn,
} from "@/components";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import React from "react";
import { FaSquareFacebook, FaSquareXTwitter, FaSquarePinterest } from "react-icons/fa6";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function generateMetadata({ params }: { params: { productSlug: string } }): Promise<Metadata> {
  // Return static metadata to avoid build issues
  return {
    title: `Product - La'Moniega Printing Services`,
    description: 'Professional printing services with high-quality materials and fast turnaround times.',
  };
}

interface ImageItem {
  imageID: string;
  productID: string;
  image: string;
}

interface SingleProductPageProps {
  params: {
    productSlug: string;
  };
}

const SingleProductPage = async ({ params }: SingleProductPageProps) => {
  try {
    // Use the API URL from environment variables
    if (!apiUrl) {
      console.error('NEXT_PUBLIC_API_URL is not defined in environment variables');
      return notFound();
    }
    
    // Fetch product data
    const productRes = await fetch(`${apiUrl}/api/slugs/${params.productSlug}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!productRes.ok) {
      console.error(`Product API error: ${productRes.status} ${productRes.statusText}`);
      return notFound();
    }

    const product = await productRes.json();

    if (!product || product.error) {
      return notFound();
    }

    // Fetch product images (with error handling)
    let images: ImageItem[] = [];
    try {
      const imagesRes = await fetch(`${apiUrl}/api/images/${product.id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
        next: { revalidate: 3600 },
      });
      
      if (imagesRes.ok) {
        images = await imagesRes.json();
      }
    } catch (imageError) {
      console.warn('Failed to fetch product images:', imageError);
      // Continue without images
    }

    return (
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-center gap-x-16 pt-10 max-lg:flex-col items-center gap-y-5 px-5">
            {/* Product Images */}
           
            <div>
              <Image
                src={product?.mainImage ? `/${product.mainImage}` : "/product_placeholder.jpg"}
                width={500}
                height={500}
                alt="main image"
                className="w-auto h-auto"
              />
              <div className="flex justify-around mt-5 flex-wrap gap-y-1 max-[500px]:justify-center max-[500px]:gap-x-1">
                {images?.map((imageItem) => (
                  <Image
                    key={imageItem.imageID}
                    src={`/${imageItem.image}`}
                    width={100}
                    height={100}
                    alt="product image"
                    className="w-auto h-auto"
                  />
                ))}
              </div>
            </div>
            {/* Product Details */}
            <div className="flex flex-col gap-y-7 text-black max-[500px]:text-center">
              <SingleProductRating rating={product.rating} />
              <h1 className="text-3xl">{product.title}</h1>
              <SingleProductDynamicFields product={product} />
              <div className="flex flex-col gap-y-2 max-[500px]:items-center">
                <AddToWishlistBtn product={product} slug={params.productSlug} />
                <p className="text-lg">
                  SKU: <span className="ml-1">{product.sku || "N/A"}</span>
                </p>
                <div className="text-lg flex gap-x-2">
                  <span>Share:</span>
                  <div className="flex items-center gap-x-1 text-2xl">
                    <FaSquareFacebook />
                    <FaSquareXTwitter />
                    <FaSquarePinterest />
                  </div>
                </div>
                <div className="flex gap-x-2">
                  {["visa", "mastercard", "ae", "paypal", "dinersclub", "discover"].map((icon) => (
                    <Image
                      key={icon}
                      src={`/${icon}.svg`}
                      width={50}
                      height={50}
                      alt={`${icon} icon`}
                      className="w-auto h-auto"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="py-16">
            <ProductTabs product={product} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading product data:", error);
    return notFound();
  }
};

export default SingleProductPage;



// import {
//   StockAvailabillity,
//   UrgencyText,
//   SingleProductRating,
//   ProductTabs,
//   SingleProductDynamicFields,
//   AddToWishlistBtn,
// } from "@/components";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import React from "react";
// import { FaSquareFacebook, FaSquareXTwitter, FaSquarePinterest } from "react-icons/fa6";

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// interface SingleProductPageProps {
//   params: {
//     productSlug: string;
//   };
// }

// interface ImageItem {
//   imageID: string;
//   productID: string;
//   image: string;
// }

// const SingleProductPage = async ({ params }: SingleProductPageProps) => {
//   try {
//     // Fetch single product data
//     const productResponse = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/slugs/${params.productSlug}`,
//       { method: 'GET' }
//     );
//     const product = await productResponse.json();

//     if (!product || product.error) {
//       notFound();
//     }

//     // Fetch product images
//     const imagesResponse = await fetch(
//       `${apiUrl}/api/images/${product.id}`
//     );
//     const images = await imagesResponse.json();

//     return (
//       <div className="bg-white">
//         <div className="max-w-screen-2xl mx-auto">
//           <div className="flex justify-center gap-x-16 pt-10 max-lg:flex-col items-center gap-y-5 px-5">
//             <div>
//               <Image
//                 src={product?.mainImage ? `/${product?.mainImage}` : "/product_placeholder.jpg"}
//                 width={500}
//                 height={500}
//                 alt="main image"
//                 className="w-auto h-auto"
//               />
//               <div className="flex justify-around mt-5 flex-wrap gap-y-1 max-[500px]:justify-center max-[500px]:gap-x-1">
//                 {images?.map((imageItem: ImageItem) => (
//                   <Image
//                     key={imageItem.imageID}
//                     src={`/${imageItem.image}`}
//                     width={100}
//                     height={100}
//                     alt="product image"
//                     className="w-auto h-auto"
//                   />
//                 ))}
//               </div>
//             </div>
//             <div className="flex flex-col gap-y-7 text-black max-[500px]:text-center">
//               <SingleProductRating rating={product?.rating} />
//               <h1 className="text-3xl">{product?.title}</h1>
//               <SingleProductDynamicFields product={product} />
//               <div className="flex flex-col gap-y-2 max-[500px]:items-center">
//                 <AddToWishlistBtn product={product} slug={params.productSlug} />
//                 <p className="text-lg">
//                   SKU: <span className="ml-1">{product?.sku || 'N/A'}</span>
//                 </p>
//                 <div className="text-lg flex gap-x-2">
//                   <span>Share:</span>
//                   <div className="flex items-center gap-x-1 text-2xl">
//                     <FaSquareFacebook />
//                     <FaSquareXTwitter />
//                     <FaSquarePinterest />
//                   </div>
//                 </div>
//                 {/* Payment method icons */}
//                 <div className="flex gap-x-2">
//                   {['visa', 'mastercard', 'ae', 'paypal', 'dinersclub', 'discover'].map((card) => (
//                     <Image
//                       key={card}
//                       src={`/${card}.svg`}
//                       width={50}
//                       height={50}
//                       alt={`${card} icon`}
//                       className="w-auto h-auto"
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="py-16">
//             <ProductTabs product={product} />
//           </div>
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error('Error fetching product:', error);
//     notFound();
//   }
// };

// export default SingleProductPage;