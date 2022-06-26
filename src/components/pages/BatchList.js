import { Tab } from "@headlessui/react";
import React from "react";
import BatchListCard from "../parts/BatchListCard";
import extinct from "../../assets/images/NFT-data/45.png";

const BatchList = () => {
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
                        ? "button-base"
                        : "button-base dark:bg-primaryDark bg-white text-black border border-black dark:text-white "
                    }
                  >
                    Un-listed Nfts
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
                        ? "button-base"
                        : "button-base dark:bg-primaryDark bg-white text-black dark:text-white border border-black"
                    }
                  >
                    Listed Nfts
                  </button>
                </div>
              )}
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels>
          {/* Un-listed nfts */}
          <Tab.Panel className="space-y-5">
            <div className="flex flex-col w-full max-w-4xl px-6 space-y-2 bg-white border border-black py-7 dark:bg-primaryDark rounded-nearkits">
              <div className="flex flex-col space-y-5">
                <BatchListCard imgSrc={extinct} />
                <BatchListCard imgSrc={extinct} />
                <BatchListCard imgSrc={extinct} />
                <BatchListCard imgSrc={extinct} />
                <BatchListCard imgSrc={extinct} />
              </div>
            </div>
          </Tab.Panel>
          {/* Listed nfts */}
          <Tab.Panel className="space-y-5">
            <div className="flex flex-col w-full max-w-4xl px-6 space-y-2 bg-white border border-black py-7 dark:bg-primaryDark rounded-nearkits">
              <div className="flex flex-col space-y-5">
                <BatchListCard isListed imgSrc={extinct} />
                <BatchListCard imgSrc={extinct} isListed />
                <BatchListCard imgSrc={extinct} isListed />
                <BatchListCard imgSrc={extinct} isListed />
                <BatchListCard imgSrc={extinct} isListed />
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default BatchList;
