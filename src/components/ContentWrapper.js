import React, { useState } from "react";
import propTypes from "prop-types";
import logoMini from "../assets/images/logo-mini-white.png";
import nearKitsLogo from "../assets/images/logo-new-tp-white.png";
import Footer from "./Footer";
import {
  TemplateIcon,
  ViewGridIcon,
  ChatAltIcon,
  ChatAlt2Icon,
  CollectionIcon,
  ViewListIcon,
} from "@heroicons/react/solid";
import { SortDescendingIcon } from "@heroicons/react/outline";
import { Link, NavLink } from "react-router-dom";

const ContentWrapper = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  function openSidebar() {
    setSidebar(!sidebar);
  }

  console.log(sidebar);

  // className="sidebar sidebar-offcanvas"

  return (
    <div className="container-wrapper">
      <nav
        id="sidebar"
        className={sidebar ? "sidebar sidebar-offcanvas" : "sidebar"}
      >
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
                <TemplateIcon className="w-5 m-3 text-primaryGreen" />
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
                <CollectionIcon className="w-5 m-3 text-purpleBase" />
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
                <ViewGridIcon className="w-5 m-3 text-primaryYellow" />
                Batch Offer
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
              to={`/batchList`}
            >
              <div className="inline-flex items-center">
                <ViewListIcon className="w-5 m-3 text-primaryRed" />
                Batch List
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
                <ChatAltIcon className="w-5 m-3 text-primaryBlue" />
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
                <ChatAlt2Icon className="w-5 m-3 text-primaryGreen" />
                Manage Message
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col container-fluid page-body-wrapper">
        <nav className="flex flex-row p-0 navbar fixed-top">
          <div className="flex items-center justify-center navbar-brand-wrapper lg:hidden">
            <Link to={"/"} className="navbar-brand">
              <img
                src={logoMini}
                alt="responsive-logo"
                className="w-[35px] h-[35px] flex justify-center items-center"
              />
            </Link>
          </div>
          <div className="flex items-stretch flex-grow w-full mx-auto navbar-menu-wrapper">
            <ul className="w-full navbar-nav"></ul>
            <ul className="container flex justify-end w-full navbar-nav navbar-nav-right">
              <li className="leading-4">
                <button className="px-2 py-3 text-white rounded-sm outline-none bg-primaryBlue">
                  Connect Wallet
                </button>
              </li>
              <li className="lg:hidden">
                <button
                  className="py-1 pl-4 pr-3 text-white"
                  onClick={openSidebar}
                >
                  <SortDescendingIcon className="w-5" />
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="bg-black main-panel">
          <div className="content-wrapper">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

ContentWrapper.propTypes = {
  children: propTypes.node.isRequired,
};

export default ContentWrapper;
