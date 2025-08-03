
// "use client";

// import React, { useState } from "react";

// const RangeWithLabels = () => {
//   const [currentRangeWLabelsValue, setCurrentRangeWLabelsValue] =
//     useState<number>(0);

//   // function for handling range change
//   const handleRangeWLabelsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setCurrentRangeWLabelsValue(parseInt(e.target.value));
//   };

//   return (
//     <div>
//       <span className="label-text text-lg text-black">Price filter:</span>
//       <input
//         type="range"
//         min={0}
//         max="1000"
//         value={currentRangeWLabelsValue}
//         onChange={(e) => handleRangeWLabelsValue(e)}
//         className="range range-warning"
//         step="200"
//       />
//       <div className="w-full flex justify-between text-xs px-2">
//         <span>₦0</span>
//         <span>₦2000</span>
//         <span>₦4000</span>
//         <span>₦6000</span>
//         <span>₦80000</span>
//       </div>
//     </div>
//   );
// };

// export default RangeWithLabels;
