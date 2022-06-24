import React from "react";
import propTypes from "prop-types";
import nearKitsLogo from "../assets/images/logo-new-tp-white.png";
import { Link, NavLink } from "react-router-dom";
import {
  TemplateIcon,
  ViewGridIcon,
  ChatAltIcon,
  ChatAlt2Icon,
  CollectionIcon,
} from "@heroicons/react/outline";

const ContentWrapper = ({ children }) => {
  return (
    <div className="container-wrapper">
      <nav id="sidebar" className="sidebar">
        <div className="container fixed flex justify-center w-full p-3 mx-auto sidebar-brand-wrapper">
          <Link to={`/`}>
            <img
              src={nearKitsLogo}
              alt="main-logo"
              className="flex items-center justify-center mx-auto w-36"
            />
          </Link>
        </div>
        <ul className="flex flex-col mb-16 overflow-hidden flex-nowrap nav">
          <li className="px-5 py-5">
            <span className="pl-0 text-base font-medium text-darkText">
              Navigation
            </span>
          </li>
          <li className="nav-item">
            <NavLink
              to={`/`}
              className={(navData) =>
                navData.isActive
                  ? "nav-link active bg-active relative rounded-r-full"
                  : "nav-link"
              }
            >
              <div className="inline-flex items-center">
                <TemplateIcon className="m-3 w-7 text-primaryGreen" />
                Dashboard
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            {" "}
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "nav-link active bg-active relative  rounded-r-full"
                  : "nav-link"
              }
              to={`/myNfts`}
            >
              <div className="inline-flex items-center">
                <CollectionIcon className="m-3 w-7 text-purpleBase" />
                My NFTs
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            {" "}
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "nav-link active bg-active relative  rounded-r-full"
                  : "nav-link"
              }
              to={`/batchOffer`}
            >
              <div className="inline-flex items-center">
                <ViewGridIcon className="m-3 w-7 text-primaryYellow" />
                Batch Offer
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "nav-link active bg-active relative  rounded-r-full"
                  : "nav-link"
              }
              to={`/sendMessage`}
            >
              <div className="inline-flex items-center">
                <ChatAltIcon className="m-3 w-7 text-primaryRed" />
                Send Message
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            {" "}
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "nav-link active bg-active relative  rounded-r-full"
                  : "nav-link"
              }
              to={`/manageMessage`}
            >
              <div className="inline-flex items-center">
                <ChatAlt2Icon className="m-3 w-7 text-primaryBlue" />
                Manage Message
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col container-fluid page-body-wrapper">
        <nav className="container w-full mx-auto navbar">
          <div className="container flex items-stretch flex-grow w-full mx-auto navbar-menu-wrapper">
            <ul className="container w-full navbar-nav"></ul>
            <ul className="container flex justify-end navbar-nav navbar-nav-right">
              <li className="leading-4">
                <button className="px-2 py-3 text-white rounded-sm outline-none bg-primaryBlue">
                  Connect Wallet
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="bg-black main-panel">{children}</div>
      </div>
    </div>
  );
};

ContentWrapper.propTypes = {
  children: propTypes.node.isRequired,
};

export default ContentWrapper;
