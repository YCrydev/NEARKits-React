import { useContext } from "react";
import { SidebarContext } from "../Context/sidebar.context";
import { SortDescendingIcon } from "@heroicons/react/solid";

const Sidebar = ({ theme, handleThemeSwitch, isDark }) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  function openSidebar() {
    setIsOpen(!isOpen);
  }

  return (
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
                  <input
                    type="checkbox"
                    checked={isDark}
                    onChange={handleThemeSwitch}
                  />
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
  );
};

export default Sidebar;
