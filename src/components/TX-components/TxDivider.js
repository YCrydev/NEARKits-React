import React from "react";

const TxDivider = ({ month, totalBuys, totalSells }) => {
  return (
    <div className="container w-full mx-auto">
      <div className="flex flex-row items-start justify-between w-full">
        <div className="flex flex-col w-full">
          <div className="flex justify-start text-base text-black dark:text-white">
            {month}
          </div>
        </div>
        <div className="flex flex-col items-end w-full">
          <div className="text-green-600 ">Total Buys: {totalBuys}Ⓝ</div>
          <div className="text-red-600 ">Total Sales: {totalSells}Ⓝ</div>
        </div>
      </div>
    </div>
  );
};

export default TxDivider;
