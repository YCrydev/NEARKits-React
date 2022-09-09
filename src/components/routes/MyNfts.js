import React from "react";

import MyNftCards from "../mynfts-card/MyNftCards";
import elCartel from "../../assets/images/NFT-data/300.png";
import nft1 from "../../assets/images/NFT-data/2877.png";
import SearchBar from "../SearchBar/search-bar.component";

const MyNfts = () => {
  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col w-full max-w-5xl px-6 space-y-2 bg-white py-7 dark:bg-primaryDark rounded-nearkits">
        <SearchBar />
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
