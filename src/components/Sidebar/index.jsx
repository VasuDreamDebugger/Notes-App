import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const getStyles = ({ isActive }) => {

    const activeClassStyles =
      "block py-2 px-4 text-gray-700 hover:bg-blue-400 hover:rounded-tr-full hover:text-white  flex items-center  gap-2  font-semibold";

    return isActive ?`${activeClassStyles} bg-blue-400 rounded-tr text-white`: activeClassStyles;
    };

  return (
    
      <div className="sidebar flex flex-col gap-4 bg-gray-100 h-screen p-4 w-48">
        <NavLink
          to="/"
          //   className={` ${"block py-2 px-4 text-gray-700 hover:bg-blue-400 hover:rounded-tr-full   flex items-center  gap-2"}`}
          className={getStyles}
        >
          <span class="material-symbols-outlined">home_app_logo</span>{" "}
          <span>Home</span>
        </NavLink>

        <NavLink to="/archive" className={getStyles}>
          <span class="material-symbols-outlined">archive</span>
          <span> Archive</span>
        </NavLink>

        <NavLink to="/important" className={getStyles}>
          <span class="material-symbols-outlined">priority_high</span>
          <span>Important</span>
        </NavLink>
        <NavLink to="/bin" className={getStyles}>
          <span class="material-symbols-outlined">restore_from_trash</span>
          <span>Bin</span>
        </NavLink>
      </div>
    
  );
};

export default Sidebar;
