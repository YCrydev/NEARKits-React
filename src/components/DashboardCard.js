import React from "react";
import loadingSvg from "../assets/images/loading_circle.svg";

const DashboardCard = () => {
  return (
    <div className="relative flex flex-col justify-center w-full h-[182px] rounded-nearkits bg-primaryDark mx-1">
      <div className="flex justify-start px-3">
        <span className="text-lg text-darkText">Total Account Value</span>
      </div>
      <div className="flex justify-start w-[335px] h-[100px] p-2 mx-auto bg-darkBase rounded-nearkits">
        <img src={loadingSvg} alt="loadingSvg" className="w-[60px]" />
      </div>
    </div>
  );
};

export default DashboardCard;
