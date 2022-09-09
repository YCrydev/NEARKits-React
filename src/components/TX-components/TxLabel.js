import React from "react";

const LabelButton = ({ type }) => {
  if (type === "Sales") {
    return (
      <>
        <div className="p-1 text-white rounded-sm bg-primaryRed">Sales</div>
      </>
    );
  } else {
    return (
      <>
        <div className="p-1 text-white rounded-sm bg-primaryGreen">Buy</div>
      </>
    );
  }
};

const TxLabel = ({ contractName, totalAmount, timeStamp, labelType }) => {
  return (
    <div className="container w-full mx-auto">
      <div className="flex flex-row items-start justify-between w-full">
        <div className="flex flex-col w-full">
          <div className="flex justify-start text-base text-black dark:text-white">
            {contractName}
          </div>
          <div className="flex justify-start">
            <LabelButton type={labelType} />
          </div>
        </div>
        <div className="flex flex-col items-end w-full">
          <div className="text-lg text-black dark:text-white">
            {totalAmount}Ⓝ
          </div>
          <div className="text-sm text-darkText">{timeStamp}</div>
        </div>
      </div>
    </div>
  );
};

export default TxLabel;
