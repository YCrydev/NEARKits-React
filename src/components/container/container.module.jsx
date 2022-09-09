import { useContext } from "react";
import { SidebarContext } from "./../Context/sidebar.context";
import { Link } from "react-router-dom";
import NavigationBar from "../navigation-bar/NavigationBar";
import logoMini from "../../assets/images/logo-mini-white.png";
import LogoMiniBlack from "../../assets/images/logo-mini-black.png";
import Sidebar from "../modules/Sidebar";
import MainPanel from "./../main-panel/main-panel.component";
import { useDarkMode } from "./../utils/useDarkMode";

const Container = ({ children }) => {
  const [theme, setTheme] = useDarkMode();

  const { isOpen } = useContext(SidebarContext);

  const handleThemeSwitch = (e) => {
    setTheme(e.target.checked);
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
              {theme ? (
                <img
                  src={LogoMiniBlack}
                  alt="responsive-logo"
                  className="w-[35px] h-[35px] flex justify-center items-center"
                />
              ) : (
                <img
                  src={logoMini}
                  alt="responsive-logo"
                  className="w-[35px] h-[35px] flex justify-center items-center"
                />
              )}
            </Link>
          </div>
          <Sidebar
            theme={theme}
            handleThemeSwitch={handleThemeSwitch}
            isDark={theme}
          />
        </nav>
        <MainPanel children={children} />
      </div>
    </>
  );
};

export default Container;
