import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import MyNftCards from "../parts/MyNftCards";
import elCartel from "../../assets/images/NFT-data/45.png";
import { Link } from "react-router-dom";

const Snipe = () => {
  const snipeSearch = true;
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
      </div>
      {snipeSearch ? (
        <div className="py-5 mx-auto w-ful">
          <div className="flex flex-col space-y-5">
            <div className="mynft-divider">
              {Array(1)
                .fill()
                .map((i, x) => {
                  return (
                    <Link to={`/snipe/collection_info`}>
                      <MyNftCards
                        imgSrc={elCartel}
                        nftTitle={"El Cartel Gen 1"}
                        key={x}
                      />
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Snipe;
