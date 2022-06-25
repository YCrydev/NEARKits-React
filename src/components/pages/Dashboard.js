import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import DashboardCard from "../DashboardCard";
import NFTCard from "../NFTCard";
import nft1 from "../../assets/images/NFT-data/300.png";
import { Pagination } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <div className="w-full h-screen mx-auto ">
        <div className="flex flex-col p-1">
          {/* Search Bar  */}
          <div className="flex justify-center w-full mx-auto">
            <form className="inline-flex items-center w-full space-x-2">
              <input
                type="text"
                className="w-full p-2 text-white rounded-md outline-none bg-secondaryDark"
                placeholder="Near Account"
              />
              <button>
                <SearchIcon className="w-6 text-darkText" />
              </button>
            </form>
          </div>
        </div>
        {/* Value Information */}
        <div className="w-full py-2 mx-auto ">
          <div className="flex flex-col md:flex-row md:space-x-5 ">
            {Array(4)
              .fill()
              .map((i, x) => {
                return <DashboardCard key={x} />;
              })}
          </div>
        </div>
        {/* showing nfts */}
        <div className="w-full py-2 mx-auto ">
          <div className="flex flex-col">
            <h1 className="py-2 text-sm font-semibold text-white">
              Displaying $props out of $props nft
            </h1>
            <div className="flex flex-row justify-between">
              <form className="container flex flex-col w-full max-w-2xl space-y-2">
                <label className="text-sm font-semibold text-white">
                  Display No:
                </label>
                <select
                  name="displayNo"
                  id="xxx"
                  className="px-2 py-2 text-white outline-none bg-darkBase rounded-nearkits "
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
              </form>
              <form
                action=""
                className="container flex flex-col w-full max-w-2xl space-y-2"
              >
                <label className="text-sm font-semibold text-white">
                  Display No:
                </label>
                <select
                  name="displayNo"
                  id="xxx"
                  className="px-2 py-2 text-white outline-none bg-darkBase rounded-nearkits "
                >
                  <option value={"Alphabetically"}>
                    Alphabetically (A &gt; Z)
                  </option>
                  <option value={"Highest"}>Highest to Lowest FP</option>
                  <option value={"Lowest"}>Lowest to Highest FP</option>
                  <option value={"RarityHigh"}>Highest to Lowest Rarity</option>
                  <option value={"RarityLow"}>Lowest to Highest Rarity</option>
                  <option value={"Staked"}>Staked</option>
                </select>
              </form>
            </div>
            <div className="w-full py-5 mx-auto">
              <div className="grid grid-cols-5 gap-3">
                {Array(10)
                  .fill()
                  .map((i, x) => {
                    return (
                      <NFTCard
                        key={x}
                        imageSrc={nft1}
                        title="El Cafe Cartel - Gen 1 #300"
                        price={"14.9N"}
                        rarity={164.99}
                        nftCreator={"El Café Cartel - Gen 1"}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="flex justify-center w-full py-3 mx-auto text-white bg-darkBase rounded-nearkits">
              <Pagination count={10} color="primary" shape="rounded" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
