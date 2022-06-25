import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/outline";

const TransferModal = ({ children }) => {
  let [isTransfer, setIsTransfer] = useState(false);

  function closeTransfer() {
    setIsTransfer(false);
  }

  function openTransfer() {
    setIsTransfer(true);
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button type="button" onClick={openTransfer}>
          {children}
        </button>
      </div>

      <Transition appear show={isTransfer} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeTransfer}>
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
                <Dialog.Panel className="w-full max-w-xl overflow-hidden text-left align-middle transition-all transform bg-black border shadow-xl border-alternateDark rounded-2xl">
                  <div className="flex flex-row justify-between p-6 text-white ">
                    <div
                      className="inline-flex space-x-2 cursor-pointer"
                      onClick={closeTransfer}
                    >
                      <ArrowLeftIcon className="w-4 font-bold text-white" />
                      Back
                    </div>
                    <div className="flex justify-end font-bold">
                      Transfer Nft
                    </div>
                  </div>

                  <div className="container w-full p-6 mx-auto ">
                    <form action="" className="flex flex-col justify-center">
                      <label htmlFor="transfer_address"></label>
                      <input
                        type={"text"}
                        className="w-full px-2 py-2 border border-black rounded-sm outline-none text-darkText bg-darkBase focus:border-green-500 focus:border"
                        placeholder="Enter Address"
                      />
                      <label htmlFor="" className=" text-darkText">
                        Make sure the receiver has enough near for storage!
                      </label>
                    </form>
                  </div>
                  <div className="flex flex-row justify-end w-full px-3 py-4 mx-auto space-x-2 border-t border-t-alternateDark">
                    <div
                      className="flex items-center justify-center px-3 py-2 text-sm font-bold text-black bg-white rounded-md cursor-pointer"
                      onClick={closeTransfer}
                    >
                      Close
                    </div>
                    <div className="px-3 py-2 text-sm font-bold text-white bg-black cursor-pointer">
                      Transfer
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
};

export default TransferModal;
