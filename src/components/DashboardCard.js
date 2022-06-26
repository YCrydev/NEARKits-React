import React from "react";
import loadingSvg from "../assets/images/loading_circle.svg";

const DashboardCard = () => {
  return (
    <div className="flex flex-col justify-center w-full h-[182px] p-2 rounded-nearkits dark:bg-primaryDark bg-white mx-1">
      <div className="flex justify-start px-3">
        <span className="text-lg text-darkText">Total Account Value</span>
      </div>
      <div className="flex justify-start w-full h-[100px] p-5 mx-auto dark:bg-darkBase bg-fadeWhite rounded-nearkits">
        <img src={loadingSvg} alt="loadingSvg" className="w-[60px]" />
      </div>
    </div>
  );
};

export default DashboardCard;
