import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import nftTest from "../../assets/images/NFT-data/45.png";
import BatchListCard from "../batchlist-card/BatchListCard";

const Data = ({ src, timeStamp, price, title }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-center w-full p-1 space-x-5">
        <img
          src={src}
          alt={`index-of${src}`}
          className="w-[30%] rounded-nearkits flex justify-start"
        />
        <div className="flex flex-col justify-start w-full">
          <h1 className="text-sm text-black dark:text-white">{title}</h1>
          <div className="flex flex-col py-3">
            <span className="text-sm text-black dark:text-white">
              Price:{price}
            </span>
            <span className="text-sm text-black dark:text-white">
              {timeStamp}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const DataInfo = () => {
  return (
    <div className="container flex flex-col w-full mx-auto">
      <div className="flex flex-col w-full h-24 max-w-4xl px-6 space-y-2 bg-white py-7 dark:bg-primaryDark rounded-nearkits">
        <form action="" className="relative inline-flex">
          <div className="relative flex flex-row items-stretch w-full">
            <input
              type={"text"}
              className="w-full p-2 text-sm text-white bg-white border border-black outline-none rounded-tl-nearkits rounded-bl-nearkits dark:bg-secondaryDark"
              placeholder="Near Account"
            />
            <button className="px-2 bg-white border border-black dark:bg-primaryDark rounded-tr-nearkits rounded-br-nearkits">
              <SearchIcon className="w-6 text-darkText" />
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col max-w-4xl py-5 space-y-5 md:space-x-5 md:flex-row md:space-y-0">
        <div className="w-full max-w-3xl">
          <div className="w-full bg-white px-7 py-7 dark:bg-primaryDark rounded-nearkits">
            <div className="flex flex-col" id="header">
              <h4 className="mb-5 text-base text-green-600">Recent Buys</h4>
              <div className="grid grid-cols-1 gap-5">
                {Array(10)
                  .fill()
                  .map((i, x) => {
                    return (
                      <Data
                        timeStamp={"13 Hours Ago"}
                        title={"NEAR Future #3185"}
                        price={7.5}
                        src={nftTest}
                        key={x}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="container w-full max-w-3xl mx-auto">
          <div className="bg-white py-7 px-7 dark:bg-primaryDark rounded-nearkits">
            <div className="flex flex-col" id="header">
              <h4 className="mb-5 text-base text-red-600">Recent Sales</h4>
              <div className="grid grid-cols-1 gap-5">
                {Array(5)
                  .fill()
                  .map((i, x) => {
                    return (
                      <Data
                        timeStamp={"13 Hours Ago"}
                        title={"NEAR Future #3185"}
                        price={7.5}
                        src={nftTest}
                        key={x}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-full mx-auto">
        <div className="flex flex-col w-auto max-w-6xl px-6 space-y-2 bg-white border border-black py-7 dark:bg-primaryDark rounded-nearkits">
          <div className="flex flex-col space-y-5">
            <BatchListCard imgSrc={nftTest} />
            <BatchListCard imgSrc={nftTest} />
            <BatchListCard imgSrc={nftTest} />
            <BatchListCard imgSrc={nftTest} />
            <BatchListCard imgSrc={nftTest} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataInfo;
