import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import logoMini from "../assets/images/logo-mini-white.png";
import LogoMiniBlack from "../assets/images/logo-mini-black.png";
import nearKitsLogo from "../assets/images/logo-new-tp-white.png";
import nearKitsLogoBlack from "../assets/images/logo-new-tp-black.png";
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
  const [theme, setTheme] = useState(null);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("nearKitsDark", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("nearKitsDark", "false");
    }
  }, [theme]);

  function openSidebar() {
    setSidebar(!sidebar);
  }

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="container-wrapper">
      <nav
        id="sidebar"
        className={
          sidebar
            ? "sidebar sidebar-offcanvas sidebar-offcanvas-active"
            : "sidebar sidebar-offcanvas"
        }
      >
        <div className="container fixed justify-center hidden w-full p-3 mx-auto sidebar-brand-wrapper lg:flex">
          <Link to={`/`}>
            {theme === "dark" ? (
              <img
                src={nearKitsLogo}
                alt="main-logo"
                className="flex items-center justify-center mx-auto w-36"
              />
            ) : (
              <img
                src={nearKitsLogoBlack}
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
          <li className="nav-item">
            <NavLink
              to={`/`}
              className={(navData) =>
                navData.isActive
                  ? "nav-link active dark:bg-active bg-white relative rounded-r-full"
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
                  ? "nav-link active dark:bg-active bg-white relative  rounded-r-full"
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
                  ? "nav-link active dark:bg-active bg-white relative  rounded-r-full"
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
                  ? "nav-link active dark:bg-active bg-white relative  rounded-r-full"
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
                  ? "nav-link active dark:bg-active bg-white relative  rounded-r-full"
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
                  ? "nav-link active dark:bg-active bg-white relative  rounded-r-full"
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
              {theme === "dark" ? (
                <img
                  src={logoMini}
                  alt="responsive-logo"
                  className="w-[35px] h-[35px] flex justify-center items-center"
                />
              ) : (
                <img
                  src={LogoMiniBlack}
                  alt="responsive-logo"
                  className="w-[35px] h-[35px] flex justify-center items-center"
                />
              )}
            </Link>
          </div>
          <div className="flex items-stretch flex-grow w-full mx-auto shadow-xl navbar-menu-wrapper">
            <ul className="w-full navbar-nav"></ul>
            <ul className="container flex justify-end w-full space-x-2 navbar-nav navbar-nav-right">
              <li className="leading-4">
                <button className="px-1 py-2 text-sm text-white rounded-md outline-none bg-primaryBlue">
                  Connect Wallet
                </button>
              </li>
              <li>
                <div className={theme === "dark" ? "dark-mode" : "light-mode"}>
                  <div className="container flex items-center justify-center">
                    <span
                      style={{ color: theme === "dark" ? "white" : "grey" }}
                      className="text-2xl"
                    >
                      ☀︎
                    </span>
                    <div className="switch-checkbox">
                      <label className="switch">
                        <input type="checkbox" onChange={handleThemeSwitch} />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <span
                      style={{ color: theme === "dark" ? "#c96dfd" : "grey" }}
                      className="text-2xl"
                    >
                      ☽
                    </span>
                  </div>
                </div>
                {/* <button
                  type="button"
                  onClick={handleThemeSwitch}
                  className="transition-all duration-75 ease-in border border-black button-base bg-fadeWhite"
                >
                  {theme === "dark" ? "🌙" : "☀️"}
                </button> */}
              </li>
              <li className="lg:hidden">
                <button
                  className="py-1 pl-4 pr-3 dark:text-white"
                  onClick={openSidebar}
                >
                  <SortDescendingIcon className="w-5" />
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="main-panel">
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
