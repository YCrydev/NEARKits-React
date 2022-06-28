import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import TransferModal from "./parts/TransferModal";

const TraitsCard = ({ traitsName, traitsCategory }) => {
  return (
    <div className="container w-full p-2 dark:bg-secondaryDark bg-secondaryWhite rounded-nearkits">
      <div className="flex flex-col items-start justify-start text-black dark:text-white">
        <span className="font-bold">{traitsCategory}</span>
        <span>{traitsName}</span>
      </div>
    </div>
  );
};

function NftModal({ children, title, price, rarity, imageSrc, traits }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button type="button" onClick={openModal}>
          {children}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-5xl overflow-hidden text-left align-middle transition-all transform bg-white border shadow-xl dark:bg-black border-alternateDark rounded-2xl">
                  <div
                    className="flex justify-start p-3 text-black cursor-pointer dark:text-white"
                    onClick={closeModal}
                  >
                    <div className="inline-flex space-x-2">
                      <ArrowLeftIcon className="w-4 font-bold text-black dark:text-white" />
                      Back
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full mx-auto ">
                    <div className="grid w-full grid-cols-2 p-3">
                      <div className="flex items-center justify-center">
                        <img
                          src={imageSrc}
                          alt={`metadata-of-${imageSrc}`}
                          className="w-[300px] h-[300px]"
                        />
                      </div>
                      <div className="container w-full p-2 mx-auto text-black dark:text-white">
                        <div className="flex flex-col">
                          <div className="flex flex-col justify-start p-2 space-y-2">
                            <h1 className="font-bold">{title}</h1>
                            <span className="text-sm font-medium">{price}</span>
                            <span className="text-sm font-medium">
                              estimate $props
                            </span>
                            <span className="text-sm font-medium">
                              Rarity: {rarity}
                            </span>
                          </div>
                          <div className="container flex flex-col w-full space-y-3">
                            <div className="container flex flex-row justify-between w-full mx-auto space-x-10">
                              <TraitsCard
                                traitsCategory={"Background"}
                                traitsName={"Goldy"}
                              />
                              <TraitsCard
                                traitsCategory={"Skin"}
                                traitsName={"Robot"}
                              />
                            </div>
                            <div className="container flex flex-row justify-between w-full mx-auto space-x-10">
                              <TraitsCard
                                traitsCategory={"Body"}
                                traitsName={"Naked"}
                              />
                              <TraitsCard
                                traitsCategory={"Mouth"}
                                traitsName={"Ice Cream"}
                              />
                            </div>
                            <div className="container flex flex-row justify-between w-full mx-auto space-x-10">
                              <TraitsCard
                                traitsCategory={"Eyes"}
                                traitsName={"Sad Eyes"}
                              />
                              <TraitsCard
                                traitsCategory={"Head"}
                                traitsName={"Halo"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full mx-auto border-t border-t-alternateDark">
                      <div className="flex items-center justify-center p-5">
                        <div className="cursor-pointer dark:text-white">
                          <TransferModal>Transfer</TransferModal>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

const NFTCard = ({ title, price, rarity, nftCreator, imageSrc }) => {
  return (
    <>
      <NftModal title={title} price={price} rarity={rarity} imageSrc={imageSrc}>
        <div className="card-wrapper">
          {/* Card Body */}
          <div className="flex flex-col space-y-3 text-black dark:text-white">
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
              <div className="flex justify-start text-xs">
                Rarity : {rarity}
              </div>
              <div className="flex justify-start font-bold underline">
                {nftCreator}
              </div>
            </div>
          </div>
        </div>
      </NftModal>
    </>
  );
};

export default NFTCard;
