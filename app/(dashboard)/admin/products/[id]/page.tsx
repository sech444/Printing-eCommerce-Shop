"use client";
import { CustomButton, DashboardSidebar, SectionTitle } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import {
  convertCategoryNameToURLFriendly as convertSlugToURLFriendly,
  formatCategoryName,
} from "../../../../../utils/categoryFormating";
import { nanoid } from "nanoid";

interface DashboardProductDetailsProps {
  params: { id: number };
}

interface Product {
  title: string;
  slug: string;
  price: number;
  manufacturer: string;
  description: string;
  mainImage: string;
  inStock: number;
  categoryId: string;
}

interface Category {
  id: string;
  name: string;
}

interface OtherImages {
  image: string;
}

const DashboardProductDetails = ({
  params: { id },
}: DashboardProductDetailsProps) => {
  const [product, setProduct] = useState<Product>();
  const [categories, setCategories] = useState<Category[]>();
  const [otherImages, setOtherImages] = useState<OtherImages[]>([]);
  const router = useRouter();

  // functionality for deleting product
  const deleteProduct = async () => {
    const requestOptions = {
      method: "DELETE",
    };
    try {
      const response = await fetch(`http://localhost:8080/api/products/${id}`, requestOptions);
      if (response.status !== 204) {
        if (response.status === 400) {
          toast.error("Cannot delete the product because of foreign key constraint");
        } else {
          throw new Error("There was an error while deleting product");
        }
      } else {
        toast.success("Product deleted successfully");
        router.push("/admin/products");
      }
    } catch (error) {
      toast.error("There was an error while deleting product");
    }
  };

  // functionality for updating product
  const updateProduct = async () => {
    if (
      !product?.title ||
      !product?.slug ||
      !product?.price ||
      !product?.manufacturer ||
      !product?.description
    ) {
      toast.error("You need to enter values in input fields");
      return;
    }

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    };

    try {
      const response = await fetch(`http://localhost:8080/api/products/${id}`, requestOptions);
      if (response.status === 200) {
        const data = await response.json();
        toast.success("Product successfully updated");
      } else {
        throw new Error("There was an error while updating product");
      }
    } catch (error) {
      toast.error("There was an error while updating product");
    }
  };

  // functionality for uploading main image file
  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("uploadedFile", file);

    try {
      const response = await fetch("http://localhost:8080/api/main-image", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("File uploaded successfully");
      } else {
        toast.error("File upload unsuccessful.");
      }
    } catch (error) {
      console.error("There was an error during request sending:", error);
      toast.error("There was an error during request sending");
    }
  };

  // fetching main product data including other product images
  const fetchProductData = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/products/${id}`);
      const data = await response.json();
      setProduct(data);

      const imagesData = await fetch(`http://localhost:8080/api/images/${id}`, {
        cache: "no-store",
      });
      const images = await imagesData.json();
      setOtherImages(images);
    } catch (error) {
      console.error("Error fetching product data:", error);
      toast.error("Error loading product data");
    }
  }, [id]);

  // fetching all product categories
  const fetchCategories = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/categories`);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Error loading categories");
    }
  }, []);

  useEffect(() => {
    fetchCategories();
    fetchProductData();
  }, [fetchCategories, fetchProductData]);

  // Handle file change with proper type checking
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      
      // Optional: Add file type validation
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validTypes.includes(selectedFile.type)) {
        toast.error('Please select a valid image file (JPEG, PNG, or GIF)');
        return;
      }

      uploadFile(selectedFile);
      setProduct(prev => prev ? { ...prev, mainImage: selectedFile.name } : prev);
    }
  };

  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto xl:h-full max-xl:flex-col max-xl:gap-y-5">
      <DashboardSidebar />
      <div className="flex flex-col gap-y-7 xl:ml-5 w-full max-xl:px-5">
        <h1 className="text-3xl font-semibold">Product details</h1>
        
        {/* Product name input */}
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Product name:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={product?.title ?? ''}
              onChange={(e) =>
                setProduct(prev => prev ? { ...prev, title: e.target.value } : prev)
              }
            />
          </label>
        </div>

        {/* Price input */}
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Product price:</span>
            </div>
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              value={product?.price ?? ''}
              onChange={(e) =>
                setProduct(prev => prev ? { ...prev, price: Number(e.target.value) } : prev)
              }
            />
          </label>
        </div>

        {/* Manufacturer input */}
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Manufacturer:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={product?.manufacturer ?? ''}
              onChange={(e) =>
                setProduct(prev => prev ? { ...prev, manufacturer: e.target.value } : prev)
              }
            />
          </label>
        </div>

        {/* Slug input */}
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Slug:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={product?.slug ? convertSlugToURLFriendly(product.slug) : ''}
              onChange={(e) =>
                setProduct(prev => prev ? {
                  ...prev,
                  slug: convertSlugToURLFriendly(e.target.value),
                } : prev)
              }
            />
          </label>
        </div>

        {/* In stock select */}
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Is product in stock?</span>
            </div>
            <select
              className="select select-bordered"
              value={product?.inStock ?? 1}
              onChange={(e) => {
                setProduct(prev => prev ? { ...prev, inStock: Number(e.target.value) } : prev);
              }}
            >
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>
          </label>
        </div>

        {/* Category select */}
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Category:</span>
            </div>
            <select
              className="select select-bordered"
              value={product?.categoryId ?? ''}
              onChange={(e) =>
                setProduct(prev => prev ? {
                  ...prev,
                  categoryId: e.target.value,
                } : prev)
              }
            >
              {categories?.map((category: Category) => (
                <option key={category.id} value={category.id}>
                  {formatCategoryName(category.name)}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Main image upload */}
        <div>
          <input
            type="file"
            accept="image/*"
            className="file-input file-input-bordered file-input-lg w-full max-w-sm"
            onChange={handleFileChange}
          />
          {product?.mainImage && (
            <Image
              src={`/${product.mainImage}`}
              alt={product.title}
              className="w-auto h-auto mt-2"
              width={100}
              height={100}
            />
          )}
        </div>

        {/* Other images */}
        <div className="flex gap-x-1">
          {otherImages?.map((image) => (
            <Image
              src={`/${image.image}`}
              key={nanoid()}
              alt="product image"
              width={100}
              height={100}
              className="w-auto h-auto"
            />
          ))}
        </div>

        {/* Description */}
        <div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Product description:</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              value={product?.description ?? ''}
              onChange={(e) =>
                setProduct(prev => prev ? { ...prev, description: e.target.value } : prev)
              }
            ></textarea>
          </label>
        </div>

        {/* Action buttons */}
        <div className="flex gap-x-2 max-sm:flex-col">
          <button
            type="button"
            onClick={updateProduct}
            className="uppercase bg-blue-500 px-10 py-5 text-lg border border-black border-gray-300 font-bold text-white shadow-sm hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2"
          >
            Update product
          </button>
          <button
            type="button"
            className="uppercase bg-red-600 px-10 py-5 text-lg border border-black border-gray-300 font-bold text-white shadow-sm hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2"
            onClick={deleteProduct}
          >
            Delete product
          </button>
        </div>

        <p className="text-xl max-sm:text-lg text-error">
          To delete the product you first need to delete all its records in
          orders (customer_order_product table).
        </p>
      </div>
    </div>
  );
};

export default DashboardProductDetails;