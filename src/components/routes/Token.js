import React from "react";
import TokenComponent from "../token-component/TokenComponent.component";

const Token = () => {
  return (
    <div className="flex flex-row w-full px-6 mx-auto space-x-2 bg-white py-7 dark:bg-primaryDark rounded-nearkits">
      <div className="flex flex-col justify-center p-4 space-y-5 md:flex-row md:justify-between md:space-x-10 w-full">
        <div className="flex flex-row justify-between w-full text-black dark:text-white">
          <div className="w-full flex-col items-center space-y-2">
            {Array(5)
              .fill()
              .map((index) => (
                <TokenComponent
                  key={index}
                  tokenName={"LandtoEmpire.com game GOLD!"}
                  tokenInNear={"NaN"}
                  tokenInUsd={"NaN"}
                  tokenAmmount={1000.0}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
