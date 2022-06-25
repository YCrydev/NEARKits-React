import React from "react";

const NFTCard = ({ title, price, rarity, nftCreator, imageSrc }) => {
  return (
    <div className="bg-primaryDark h-[384px] w-[274px] rounded-nearkits">
      {/* Card Body */}
      <div className="flex flex-col space-y-3 text-white">
        {/* Image */}
        <div className="h-auto max-w-full rounded-t-nearkits">
          <img
            src={imageSrc}
            alt={`index-of-${imageSrc}`}
            className="w-full rounded-t-nearkits h-52"
          />
        </div>
        {/* Metadata */}
        <div className="container flex flex-col w-full p-1 mx-auto space-y-3">
          <div className="flex justify-start font-bold">{title}</div>
          <div className="flex justify-start text-xs font-semibold">
            {price}
          </div>
          <div className="flex justify-start text-xs">
            {/* To be placed with props */}≈ $1.54
          </div>
          <div className="flex justify-start text-xs">Rarity : {rarity}</div>
          <div className="flex justify-start font-bold underline">
            {nftCreator}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
