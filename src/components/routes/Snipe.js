import React from "react";
import MyNftCards from "../mynfts-card/MyNftCards";
import elCartel from "../../assets/images/NFT-data/45.png";
import { Link } from "react-router-dom";
import SearchBar from "./../SearchBar/search-bar.component";

const Snipe = () => {
  const snipeSearch = true;
  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col w-full max-w-4xl px-6 space-y-2 bg-white py-7 dark:bg-primaryDark rounded-nearkits">
        <SearchBar />
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
