import { NavLink } from "react-router-dom";
const LinkComponent = ({ path, children, isDropdown }) => {
  if (isDropdown) {
    return (
      <li className="nav-item">
        {" "}
        <NavLink
          className={(navData) =>
            navData.isActive
              ? "nav-link-dropdown active dark:bg-active bg-white relative  rounded-r-full w-full"
              : "nav-link-dropdown "
          }
          to={path}
        >
          {children}
        </NavLink>
      </li>
    );
  }

  return (
    <li className="nav-item">
      {" "}
      <NavLink
        className={(navData) =>
          navData.isActive
            ? "nav-link active dark:bg-active bg-white relative  rounded-r-full"
            : "nav-link"
        }
        to={path}
      >
        <div className="inline-flex items-center">{children}</div>
      </NavLink>
    </li>
  );
};

export default LinkComponent;
