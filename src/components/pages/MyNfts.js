import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import MyNftCards from "../parts/MyNftCards";
import elCartel from "../../assets/images/NFT-data/300.png";
import nft1 from "../../assets/images/NFT-data/2877.png";

const MyNfts = () => {
  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col w-full max-w-5xl px-6 space-y-2 bg-white py-7 dark:bg-primaryDark rounded-nearkits">
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
        <div className="button-transfer">
          <button className="px-4 py-2 font-medium text-white transition duration-150 ease-in-out bg-secondaryDark rounded-nearkits hover:bg-opacity-70">
            Transfer
          </button>
        </div>
      </div>
      <div className="py-5 mx-auto w-ful">
        <div className="flex flex-col space-y-5">
          <h1 className="text-lg font-medium text-black dark:text-white">
            ($props) El Cartel Gen 1
          </h1>
          <div className="mynft-divider">
            {Array(10)
              .fill()
              .map((i, x) => {
                return (
                  <MyNftCards
                    imgSrc={elCartel}
                    nftTitle={"El Cartel Gen 1"}
                    key={x}
                  />
                );
              })}
          </div>
          <h1 className="text-lg font-medium dark:text-white">
            ($props) Near Dragon Nations
          </h1>
          <div className="mynft-divider">
            {Array(10)
              .fill()
              .map((i, x) => {
                return <MyNftCards imgSrc={nft1} nftTitle={"#2877"} key={x} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNfts;
