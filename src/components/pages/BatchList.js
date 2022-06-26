import { Tab } from "@headlessui/react";
import React from "react";
import BatchListCard from "../parts/BatchListCard";
import extinct from "../../assets/images/NFT-data/45.png";

const BatchList = () => {
  return (
    <Tab.Group>
      <div className="w-full mx-auto space-y-5">
        <div className="flex flex-row w-full px-6 space-x-2 max-w-7xl py-7 bg-primaryDark rounded-nearkits">
          <Tab.List className="space-x-5">
            <Tab>
              {({ selected }) => (
                <div className="button-placebids">
                  <button
                    className={
                      selected
                        ? "button-base "
                        : "button-base bg-primaryDark border border-black"
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
                        ? "button-base "
                        : "button-base bg-primaryDark border border-black"
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
            <div className="flex flex-col w-full px-6 space-y-2 max-w-7xl py-7 bg-primaryDark rounded-nearkits">
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
            <div className="flex flex-col w-full px-6 space-y-2 max-w-7xl py-7 bg-primaryDark rounded-nearkits">
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
