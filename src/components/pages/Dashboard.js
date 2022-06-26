import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import DashboardCard from "../DashboardCard";
import NFTCard from "../NFTCard";
import nft1 from "../../assets/images/NFT-data/300.png";
import { Pagination } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <div className="container w-full mx-auto">
        <div className="flex flex-col p-1">
          {/* Search Bar  */}
          <div className="container flex justify-center w-full">
            <form action="" className="relative inline-flex w-full">
              <div className="relative flex flex-row items-stretch w-full">
                <input
                  type={"text"}
                  className="w-full p-2 text-sm text-white bg-white border border-black outline-none rounded-tl-nearkits rounded-bl-nearkits dark:bg-secondaryDark"
                  placeholder="Search Nft collection"
                />
                <button className="px-3 py-2 bg-white border border-black dark:bg-primaryDark rounded-tr-nearkits rounded-br-nearkits">
                  <SearchIcon className="w-6 text-darkText" />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Value Information */}
        <div className="w-full py-2 mx-auto">
          <div className="flex flex-col justify-center w-full space-y-2 xl:flex-row xl:space-y-0">
            <div className="flex flex-col w-full space-y-2 md:flex-row md:space-y-0">
              {Array(2)
                .fill()
                .map((i, x) => {
                  return <DashboardCard key={x} />;
                })}
            </div>
            <div className="flex flex-col w-full space-y-2 md:flex-row md:space-y-0">
              {Array(2)
                .fill()
                .map((i, x) => {
                  return <DashboardCard key={x} />;
                })}
            </div>
          </div>
        </div>
        {/* showing nfts */}
        <div className="w-full py-2 mx-auto ">
          <div className="flex flex-col">
            <h1 className="py-2 text-sm font-semibold text-black dark:text-white ">
              Displaying $props out of $props nft
            </h1>
            <div className="flex flex-row justify-between space-x-5">
              <form className="dashboard-value-wrapper">
                <label className="text-sm font-semibold text-black dark:text-white">
                  Display No:
                </label>
                <select
                  name="displayNo"
                  id="xxx"
                  className="px-2 py-2 text-black bg-white border border-black outline-none dark:text-white dark:bg-darkBase rounded-nearkits"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
              </form>
              <form action="" className="dashboard-value-wrapper">
                <label className="text-sm font-semibold dark:text-white">
                  Display No:
                </label>
                <select
                  name="displayNo"
                  id="xxx"
                  className="px-2 py-2 text-black bg-white border border-black outline-none dark:text-white dark:bg-darkBase rounded-nearkits overflow-clip"
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
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-3">
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
            <div className="flex justify-center w-full py-3 mx-auto text-white bg-white dark:bg-darkBase rounded-nearkits">
              <Pagination count={10} color="primary" shape="rounded" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
