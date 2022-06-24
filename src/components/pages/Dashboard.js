import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import DashboardCard from "../DashboardCard";

const Dashboard = () => {
  return (
    <>
      <div className="container w-full h-screen mx-auto">
        <div className="flex flex-col p-1">
          {/* Search Bar  */}
          <div className="flex justify-center w-full mx-auto">
            <div className="inline-flex items-center w-full space-x-2">
              <input
                type="text"
                className="w-full p-2 text-white rounded-md outline-none bg-secondaryDark"
                placeholder="Near Account"
              />
              <label>
                <SearchIcon className="w-6 text-darkText" />
              </label>
            </div>
          </div>
        </div>
        {/* Value Information */}
        <div className="container w-full py-2 mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-5 ">
            {Array(4)
              .fill()
              .map((i, x) => {
                return <DashboardCard key={x} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
