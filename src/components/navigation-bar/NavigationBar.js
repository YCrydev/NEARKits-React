import nearKitsLogo from "../../assets/images/logo-new-tp-white.png";
import nearKitsLogoBlack from "../../assets/images/logo-new-tp-black.png";

import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

import LinkAdress from "../link-address/link-adress.component";

const NavigationBar = ({ theme }) => {
  return (
    <>
      <div className="container fixed justify-center hidden w-full p-3 mx-auto sidebar-brand-wrapper lg:flex">
        <Link to={`/`}>
          {theme ? (
            <img
              src={nearKitsLogoBlack}
              alt="main-logo"
              className="flex items-center justify-center mx-auto w-36"
            />
          ) : (
            <img
              src={nearKitsLogo}
              alt="main-logo"
              className="flex items-center justify-center mx-auto w-36"
            />
          )}
        </Link>
      </div>

      <ul className="flex flex-col mb-16 overflow-hidden flex-nowrap nav">
        <li className="px-5 py-5">
          <span className="pl-0 text-sm font-medium text-darkText">
            Navigation
          </span>
        </li>
        <div className="px-2">
          <div className="relative flex flex-row items-stretch w-full mb-2">
            <input
              type="text"
              className="w-full px-2 py-1 text-black border dark:text-white bg-fadeWhite border-secondaryDark dark:bg-secondaryDark rounded-tl-nearkits rounded-bl-nearkits"
              value="https://nearkits.io/gallery/burncr.near"
              readOnly
            />
            <div className="w-auto border-none text-alternateDark">
              <button className="px-2 py-2 border border-secondaryDark bg-none rounded-tr-nearkits rounded-br-nearkits">
                <DocumentDuplicateIcon className="w-5" />
              </button>
            </div>
          </div>
        </div>

        <LinkAdress />
      </ul>
    </>
  );
};

export default NavigationBar;
