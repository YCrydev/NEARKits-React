import { useContext } from "react";
import { useState } from "react";
import { SidebarContext } from "./../Context/sidebar.context";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../navigation-bar/NavigationBar";
import logoMini from "../../assets/images/logo-mini-white.png";
import LogoMiniBlack from "../../assets/images/logo-mini-black.png";
import Sidebar from "../modules/Sidebar";
import MainPanel from "./../main-panel/main-panel.component";

const Container = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const { isOpen } = useContext(SidebarContext);

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

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <nav
        id="sidebar"
        className={
          isOpen
            ? "sidebar sidebar-offcanvas sidebar-offcanvas-active"
            : "sidebar sidebar-offcanvas"
        }
      >
        <NavigationBar theme={theme} />
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
          <Sidebar theme={theme} handleThemeSwitch={handleThemeSwitch} />
        </nav>
        <MainPanel children={children} />
      </div>
    </>
  );
};

export default Container;
