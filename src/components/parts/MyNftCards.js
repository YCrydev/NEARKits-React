import React, { useState } from "react";

const MyNftCards = ({ imgSrc, nftTitle }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <div className="flex flex-col">
        <div
          className={
            isActive
              ? "border-2 border-blue-400 rounded-nearkits  bg-secondaryDark w-[274px] h-auto  md:w-auto md:mx-auto mx-auto"
              : "w-[274px] h-auto bg-secondaryDark md:w-auto md:mx-auto mx-auto"
          }
          onClick={handleClick}
        >
          <div className="flex items-center justify-center">
            <img
              src={imgSrc}
              alt={`metadata-of-${imgSrc}`}
              className="w-full h-[220px] rounded-t-nearkits"
            />
          </div>
          <div className="flex items-start justify-start px-4 py-2">
            <span className="text-lg font-medium text-white">{nftTitle}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyNftCards;
