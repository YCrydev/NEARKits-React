import React from "react";
import SearchBar from "../SearchBar/search-bar.component";

const Data = ({ account, totalAmount }) => {
  return (
    <>
      <div className="flex flex-col p-1">
        <h2 className="text-base font-medium text-black dark:text-white">
          {account}
        </h2>
        <h2 className="text-base font-medium text-black dark:text-white">
          {totalAmount}Ⓝ
        </h2>
      </div>
    </>
  );
};

const WhaleTracker = () => {
  return (
    <div className="container flex flex-col w-full mx-auto lg:space-x-5 lg:flex-row">
      <div className="flex flex-col w-full h-24 max-w-6xl px-6 space-y-2 bg-white py-7 dark:bg-primaryDark rounded-nearkits">
        <SearchBar />
      </div>
      <div className="flex lg:flex-col flex-row max-w-4xl lg:w-[50%] xl:w-[25%] lg:space-y-5 w-full space-x-5 lg:space-x-0 py-5">
        <div className="w-full max-w-3xl">
          <div className="w-full bg-white px-7 py-7 dark:bg-primaryDark rounded-nearkits">
            <div className="flex flex-col" id="header">
              <h4 className="mb-5 text-lg text-black dark:text-white">
                Top Buyer 7 Days
              </h4>
              <div className="grid grid-cols-1 gap-5">
                <Data account={"nearnftz.near"} totalAmount={3555.4} />
                <Data account={"nearnftz.near"} totalAmount={3555.4} />
                <Data account={"nearnftz.near"} totalAmount={3555.4} />
                <Data account={"nearnftz.near"} totalAmount={3555.4} />
                <Data account={"nearnftz.near"} totalAmount={3555.4} />
              </div>
            </div>
          </div>
        </div>
        <div className="container w-full max-w-3xl mx-auto">
          <div className="bg-white py-7 px-7 dark:bg-primaryDark rounded-nearkits">
            <div className="flex flex-col" id="header">
              <h4 className="mb-5 text-lg text-black dark:text-white">
                Top Buyer 7 Days
              </h4>
              <div className="grid grid-cols-1 gap-5">
                <Data account={"nearnftz.near"} totalAmount={3555.4} />
                <Data account={"nearnftz.near"} totalAmount={3555.4} />
                <Data account={"nearnftz.near"} totalAmount={3555.4} />
                <Data account={"nearnftz.near"} totalAmount={3555.4} />
                <Data account={"nearnftz.near"} totalAmount={3555.4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhaleTracker;
