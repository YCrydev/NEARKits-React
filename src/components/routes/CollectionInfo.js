import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import LineChart from "../Chart/LineChart";

const CollectionData = ({ name, info }) => {
  return (
    <div className="flex flex-col justify-center w-full p-1 mx-1 bg-white rounded-nearkits dark:bg-primaryDark">
      <div className="flex flex-col justify-start w-full p-4 mx-auto dark:bg-secondaryDark bg-fadeWhite rounded-nearkits">
        <span className="text-lg text-black dark:text-white">{name}</span>
        <div className="text-black dark:text-white">{info}</div>
      </div>
    </div>
  );
};

const CollectionInfo = () => {
  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col w-full max-w-4xl px-6 space-y-2 bg-white py-7 dark:bg-primaryDark rounded-nearkits">
        <form action="" className="relative inline-flex">
          <div className="relative flex flex-row items-stretch w-full">
            <input
              type={"text"}
              className="w-full p-2 text-sm text-white bg-white border border-black outline-none rounded-tl-nearkits rounded-bl-nearkits dark:bg-secondaryDark"
              placeholder="Search Nft collection"
            />
            <button className="px-2 bg-white border border-black dark:bg-primaryDark rounded-tr-nearkits rounded-br-nearkits">
              <SearchIcon className="w-6 text-darkText" />
            </button>
          </div>
        </form>
        <div className="container flex flex-row w-full mx-auto">
          <CollectionData name={"Total Owners"} info={579} />
          <CollectionData name={"Supply"} info={3000} />
          <CollectionData name={"Floor Price"} info={4} />
        </div>
      </div>
      <div className="container w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-auto ">
            <LineChart />
          </div>
          <div className="w-auto">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionInfo;
