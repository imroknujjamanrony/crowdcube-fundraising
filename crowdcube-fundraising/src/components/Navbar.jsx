import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useTheme } from "../provider/ThemeProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addnewcampaign">Add New Campaign</NavLink>
      </li>
      <li>
        <NavLink to="/campaigns">All Campaign</NavLink>
      </li>
      <li>
        <NavLink to="/myDonations">My Donations</NavLink>
      </li>
      <li>
        <NavLink to="/mycampaign">My Campaign</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 bg-[#1A685B]/80 backdrop-blur-sm shadow-md z-50">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img className="w-10" src={logo} alt="Logo" />
          CrowdCube
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal bg-[#FFC0CB] text-black text-base font-medium rounded-xl px-1">
          {links}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center">
        <button onClick={toggleTheme} className="btn btn-primary mr-4">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
        {user && user.email ? (
          <div className="relative group">
            <img
              src={user.photoURL || "https://via.placeholder.com/50"}
              alt={user.displayName || "User"}
              className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
            />
            <div className="absolute right-0 mt-2 hidden group-hover:block bg-white text-black p-3 rounded shadow-lg">
              <p className="text-sm font-semibold">
                {user.displayName || "Anonymous"}
              </p>
              <button
                onClick={handleLogout}
                className="btn btn-sm mt-2 text-black font-normal bg-[#FFC0CB] hover:bg-[#e89aa6]"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <>
            <NavLink
              to="/auth/login"
              className="btn mr-2 text-lg text-black font-normal btn-success"
            >
              Login
            </NavLink>
            <NavLink
              to="/auth/register"
              className="btn text-lg text-black font-normal btn-success"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
