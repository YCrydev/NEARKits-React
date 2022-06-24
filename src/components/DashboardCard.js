import React from "react";
import loadingSvg from "../assets/images/loading_circle.svg";

const DashboardCard = () => {
  return (
    <div className="relative flex flex-col justify-center w-full h-[182px] rounded-lg bg-primaryDark p-2">
      <div className="flex justify-start px-3">
        <span className="text-lg text-darkText">Total Account Value</span>
      </div>
      <div className="flex justify-start w-[335px] h-[100px] p-2 mx-auto bg-darkBase rounded-lg">
        <img src={loadingSvg} alt="loadingSvg" className="w-[60px]" />
      </div>
    </div>
  );
};

export default DashboardCard;
