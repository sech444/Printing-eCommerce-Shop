

import React from "react";
import ProductItem from "./ProductItem";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Function to map URL slugs to database category names
const mapSlugToCategoryName = (slug: string): string => {
  const categoryMap: { [key: string]: string } = {
    "Printing-Services": "Printing-Services",
    "Banners-Printing": "Banners-Printing", 
    "T-Shirt-Printing": "T-Shirt-Printing",
    "Book-Printing": "Book-Printing",
    "Custom-Printing": "Custom-Printing",
    "Coffee-Mug-Printing": "Coffee-Mug-Printing",
    "Business-Card": "Business-Card",
    "printers": "Printers",
    "Printers": "Printers",
    "Car-Branding": "Car-Branding",
    "DI-Printing": "DI-Printing"
  };
  
  return categoryMap[slug] || slug;
};

const Products = async ({ slug }: any) => {
  // getting all data from URL slug and preparing everything for sending GET request
  const inStockNum = slug?.searchParams?.inStock === "true" ? 1 : 0;
  const outOfStockNum = slug?.searchParams?.outOfStock === "true" ? 1 : 0;
  const page = slug?.searchParams?.page ? Number(slug?.searchParams?.page) : 1;

  let stockMode: string = "lte";
  
  // preparing inStock and out of stock filter for GET request
  // If in stock checkbox is checked, stockMode is "equals"
  if (inStockNum === 1) {
    stockMode = "equals";
  }
 // If out of stock checkbox is checked, stockMode is "lt"
  if (outOfStockNum === 1) {
    stockMode = "lt";
  }
   // If in stock and out of stock checkboxes are checked, stockMode is "lte"
  if (inStockNum === 1 && outOfStockNum === 1) {
    stockMode = "lte";
  }
   // If in stock and out of stock checkboxes aren't checked, stockMode is "gt"
  if (inStockNum === 0 && outOfStockNum === 0) {
    stockMode = "gt";
  }

  // Map the URL slug to the correct category name
  const categoryName = slug?.params?.slug?.length > 0 
    ? mapSlugToCategoryName(slug.params.slug[0]) 
    : "";

  console.log('Category filtering:', {
    originalSlug: slug?.params?.slug?.[0],
    mappedCategory: categoryName
  });

  // Build the API URL with proper filtering
  const priceFilter = slug?.searchParams?.price || 3000;
  const ratingFilter = Number(slug?.searchParams?.rating) || 0;
  const sortParam = slug?.searchParams?.sort || "";
  
  // Build URL parts
  const baseUrl = `${apiUrl}/api/products`;
  const priceParam = `filters[price][$lte]=${priceFilter}`;
  const ratingParam = `filters[rating][$gte]=${ratingFilter}`;
  const stockParam = "filters[inStock][$" + stockMode + "]=1";
  const categoryParam = categoryName ? `filters[category][$equals]=${categoryName}` : "";
  const sortParamFull = sortParam ? `sort=${sortParam}` : "";
  const pageParam = `page=${page}`;
  
  // Combine all parameters
  const params = [priceParam, ratingParam, stockParam, categoryParam, sortParamFull, pageParam]
    .filter(param => param !== "")
    .join("&");
  
  const apiUrl_full = `${baseUrl}?${params}`;

  console.log('Full API URL:', apiUrl_full);

  // sending API request with filtering, sorting and pagination for getting all products
  const data = await fetch(apiUrl_full);

  const products = await data.json();

  console.log('Products API URL:', data.url);
  console.log('Products found:', products.length);

  /*
    const req = await fetch(
    `http://backend:1337/api/products?populate=*&filters[price][$lte]=${
      searchParams?.price || 1000
    }${searchParams.women === "true" ? "&filters[category][$eq]=women" : ""}${searchParams.womenNewEdition === "true" ? "&filters[category][$eq]=women%20new%20edition" : ""}&filters[rating][$gte]=${
      searchParams?.rating || 1
    }`
  );
  const products = await req.json();
  */
  return (
    <div className="grid grid-cols-3 justify-items-center gap-x-2 gap-y-5 max-[1300px]:grid-cols-3 max-lg:grid-cols-2 max-[500px]:grid-cols-1">
      {products.length > 0 ? (
        products.map((product: Product) => (
          <ProductItem key={product.id} product={product} color="black" />
        ))
      ) : (
        <h3 className="text-3xl mt-5 text-center w-full col-span-full max-[1000px]:text-2xl max-[500px]:text-lg">
          No products found for specified query
        </h3>
      )}
    </div>
  );
};

export default Products;


