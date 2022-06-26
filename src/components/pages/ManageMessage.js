import React from "react";
import loadingGif from "../../assets/images/loading_circle.svg";

const ManageMessage = () => {
  return (
    <div className="flex items-center justify-center w-full mx-auto">
      <img
        src={loadingGif}
        alt="loading-gif"
        className="flex justify-center  max-w-[140px] mx-auto max-h-[140px] w-1/2"
      />
    </div>
  );
};

export default ManageMessage;
