import React from "react";

const TokenComponent = ({
  tokenName,
  tokenInNear,
  tokenAmmount,
  tokenInUsd,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <div className="w-full">{tokenName}</div>
        <div className="w-full items-start justify-start text-right">
          {tokenInNear} Ⓝ
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-full text-darkText">{tokenAmmount}</div>
        <div className="w-full items-start justify-start text-right text-darkText">
          $ {tokenInUsd}
        </div>
      </div>
    </div>
  );
};

export default TokenComponent;
