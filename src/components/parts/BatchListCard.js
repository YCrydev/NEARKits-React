import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const ShowNftCard = ({ imgSrc, isShow }) => {
  return (
    <Transition
      show={isShow}
      enter="transform transition duration-[400ms]"
      enterFrom="opacity-0 rotate-[-120deg] scale-50"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95"
    >
      <div className="flex flex-col w-32 rounded-nearkits bg-secondaryDark">
        <img
          src={imgSrc}
          alt={`metadata-of-${imgSrc}`}
          className="h-28 rounded-t-nearkits"
        />
        <span className="px-2 mt-2 mb-4 font-medium text-white">
          Extinct Heroes 45
        </span>
      </div>
    </Transition>
  );
};

const BatchListCard = ({ imgSrc, isListed }) => {
  const [isShow, setIsShow] = useState(false);

  function openNft() {
    setIsShow(!isShow);
  }

  if (isListed) {
    return (
      <div className="flex flex-col">
        <div className="flex flex-col space-y-5 md:space-x-5 md:flex-row md:space-y-0">
          <div className="flex items-center justify-center">
            <img
              src={imgSrc}
              alt={`metadata-of-${imgSrc}`}
              className="rounded-nearkits md:w-[124px] w-full"
            />
          </div>
          <div className="flex flex-col w-full space-y-2 text-white">
            <div className="flex items-start justify-start">
              <span className="font-bold">extinctheroes.tenk.near</span>
            </div>
            <div className="flex flex-row space-x-10 ">
              <div className="flex flex-col w-full px-3 text-white bg-secondaryDark rounded-nearkits">
                <span>Nfts:</span>
                <span>2</span>
              </div>
              <div className="flex flex-col w-full px-3 text-white bg-secondaryDark rounded-nearkits">
                <span>Nfts:</span>
                <span>2</span>
              </div>
              <div className="flex flex-col w-full px-3 text-white bg-secondaryDark rounded-nearkits">
                <span>Nfts:</span>
                <span>2</span>
              </div>
              <div className="flex w-full mx-auto">
                <button className="button-base" onClick={openNft}>
                  Show Nft
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container w-full mx-auto">
          <div className={isShow ? "block" : "hidden"}>
            <div className="flex flex-row py-5 space-x-5">
              <ShowNftCard imgSrc={imgSrc} isShow={isShow} />
              <ShowNftCard imgSrc={imgSrc} isShow={isShow} />
              <ShowNftCard imgSrc={imgSrc} isShow={isShow} />
            </div>
            <div className="w-full p-3 mx-auto">
              <h1 className="flex justify-start font-medium text-white">
                Action:
              </h1>
              <div className="flex flex-row space-x-2">
                <button className="button-base">Reset</button>
                <button className="button-base">List</button>
                <button className="bg-red-500 button-base">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col space-y-5 md:space-x-5 md:flex-row md:space-y-0">
        <div className="flex items-center justify-center">
          <img
            src={imgSrc}
            alt={`metadata-of-${imgSrc}`}
            className="rounded-nearkits md:w-[124px] w-full"
          />
        </div>
        <div className="flex flex-col w-full space-y-2 text-white">
          <div className="flex items-start justify-start">
            <span className="font-bold">extinctheroes.tenk.near</span>
          </div>
          <div className="flex flex-row space-x-10 ">
            <div className="flex flex-col w-full px-3 text-white bg-secondaryDark rounded-nearkits">
              <span>Nfts:</span>
              <span>2</span>
            </div>
            <div className="flex flex-col w-full px-3 text-white bg-secondaryDark rounded-nearkits">
              <span>Nfts:</span>
              <span>2</span>
            </div>
            <div className="flex flex-col w-full px-3 text-white bg-secondaryDark rounded-nearkits">
              <span>Nfts:</span>
              <span>2</span>
            </div>
            <div className="flex w-full mx-auto">
              <button className="button-base" onClick={openNft}>
                Show Nft
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-full mx-auto">
        <div className={isShow ? "block" : "hidden"}>
          <div className="flex flex-row py-5 space-x-5">
            <ShowNftCard imgSrc={imgSrc} isShow={isShow} />
            <ShowNftCard imgSrc={imgSrc} isShow={isShow} />
            <ShowNftCard imgSrc={imgSrc} isShow={isShow} />
          </div>
          <div className="w-full p-3 mx-auto">
            <h1 className="flex justify-start font-medium text-white">
              Action:
            </h1>
            <div className="flex flex-row space-x-2">
              <button className="button-base">Reset</button>
              <button className="button-base">List</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchListCard;
