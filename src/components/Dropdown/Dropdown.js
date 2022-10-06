import { ViewGridIcon } from "@heroicons/react/outline";
import { ArrowDropDown } from "@mui/icons-material";
import React, { useState, Fragment } from "react";
import LinkComponent from "../link-component/link.component";
import { Transition } from "@headlessui/react";

const Dropdown = () => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <li className="nav-item cursor-pointer" onClick={handleClick}>
      <div className="inline-flex items-center nav-link">
        <ViewGridIcon className="w-5 m-3 text-primaryRed" />
        Batch Utilities
        <ArrowDropDown className="w-5 m-3 text-darkText" />
      </div>

      <Transition
        show={display}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95"
      >
        {display ? (
          <ul
            className="flex flex-col sub-menu"
            style={{
              padding: "0 0 0 2.25rem",
            }}
          >
            <LinkComponent path={"/batchOffer"} isDropdown>
              {/* <ViewGridIcon className="w-5 m-3 text-primaryRed" /> */}
              Batch Offer
            </LinkComponent>
            <LinkComponent path={"/batchList"} isDropdown>
              {/* <ViewListIcon className="w-5 m-3 text-primaryBlue" /> */}
              Batch List
            </LinkComponent>
            <LinkComponent path={"/batchBuy"} isDropdown>
              {/* <ViewListIcon className="w-5 m-3 text-primaryBlue" /> */}
              Batch Buy
            </LinkComponent>
          </ul>
        ) : null}
      </Transition>
    </li>
  );
};

export default Dropdown;
