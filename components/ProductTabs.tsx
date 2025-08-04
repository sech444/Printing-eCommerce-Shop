"use client";

import React, { useState } from "react";
import RatingPercentElement from "./RatingPercentElement";
import SingleReview from "./SingleReview";
import { formatCategoryName } from "@/utils/categoryFormating";

const ProductTabs = ({ product }: { product: Product }) => {
  const [currentProductTab, setCurrentProductTab] = useState<number>(0);

  if (!product) {
    return <div className="px-5 text-black">Product information not available</div>;
  }

  const responsiveTextClasses = "max-[500px]:text-base max-[400px]:text-sm max-[370px]:text-xs";

  const tabs = [
    { id: 0, label: "Description" },
    { id: 1, label: "Additional info" }
  ];

  const handleKeyDown = (e: React.KeyboardEvent, tabId: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setCurrentProductTab(tabId);
    }
  };

  return (
    <div className="px-5 text-black">
      <div role="tablist" className="tabs tabs-bordered">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.label.toLowerCase().replace(' ', '-')}`}
            aria-selected={currentProductTab === tab.id}
            aria-controls={`panel-${tab.label.toLowerCase().replace(' ', '-')}`}
            className={`tab text-lg text-black pb-8 ${responsiveTextClasses} ${currentProductTab === tab.id && "tab-active"
              }`}
            onClick={() => setCurrentProductTab(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pt-5">
        {currentProductTab === 0 && (
          <div
            role="tabpanel"
            id="panel-description"
            aria-labelledby="tab-description"
          >
            <p className="text-lg max-sm:text-base max-sm:text-sm">
              {product?.description}
            </p>
          </div>
        )}

        {currentProductTab === 1 && (
          <div
            role="tabpanel"
            id="panel-additional-info"
            aria-labelledby="tab-additional-info"
            className="overflow-x-auto"
          >
            <table className="table text-xl text-center max-[500px]:text-base">
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>Manufacturer:</th>
                  <td>{product?.manufacturer}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>Category:</th>
                  <td>
                    {product?.category?.name
                      ? formatCategoryName(product?.category?.name)
                      : "No category"}
                  </td>
                </tr>
                {/* row 3 */}
                {/* <tr>
                  <th>Color:</th>
                  <td>Silver, LightSlateGray, Blue</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;