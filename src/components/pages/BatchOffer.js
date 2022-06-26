import { SearchIcon } from "@heroicons/react/outline";
import { Tab } from "@headlessui/react";
import React from "react";

const BatchOffer = () => {
  return (
    <Tab.Group>
      <div className="w-full mx-auto space-y-5">
        <div className="flex flex-row w-full max-w-4xl px-6 space-x-2 bg-white border border-black py-7 dark:bg-primaryDark rounded-nearkits">
          <Tab.List className="space-x-5">
            <Tab>
              {({ selected }) => (
                <div className="button-placebids">
                  <button
                    className={
                      selected
                        ? "button-base "
                        : "button-base dark:bg-primaryDark bg-white text-black border border-black dark:text-white "
                    }
                  >
                    Place Bids
                  </button>
                </div>
              )}
            </Tab>
            <Tab>
              {({ selected }) => (
                <div className="button-myOffers">
                  <button
                    className={
                      selected
                        ? "button-base "
                        : "button-base dark:bg-primaryDark bg-white text-black border border-black dark:text-white "
                    }
                  >
                    My Offers
                  </button>
                </div>
              )}
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels>
          <Tab.Panel className="space-y-5">
            <div className="flex flex-col w-full max-w-4xl px-6 space-y-2 bg-white border border-black py-7 dark:bg-primaryDark rounded-nearkits">
              <form action="" className="relative inline-flex">
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
              <div className="button-transfer">
                <button className="px-4 py-2 font-medium text-white transition duration-150 ease-in-out bg-secondaryDark rounded-nearkits hover:bg-opacity-70">
                  Bid
                </button>
              </div>
            </div>
            <div className="w-full mx-auto">
              <div className="flex items-start justify-start">
                <h1 className="font-bold dark:text-white">Search Now!</h1>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="space-y-5">
            <div className="flex flex-col w-full max-w-4xl px-6 space-y-2 bg-white border border-black py-7 dark:bg-primaryDark rounded-nearkits">
              <div className="flex items-start flex-start">
                <h1 className="font-bold dark:text-white">
                  You're using 0.05154 Ⓝ to store
                </h1>
              </div>
              <div className="button-transfer">
                <button className="px-4 py-2 font-medium text-white transition duration-150 ease-in-out bg-red-500 rounded-nearkits hover:bg-opacity-70">
                  Close
                </button>
              </div>
            </div>
            <div className="w-full mx-auto">
              <div className="flex items-start justify-start">
                <h1 className="font-bold dark:text-white">
                  No offers made yet!
                </h1>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default BatchOffer;
