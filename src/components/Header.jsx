// import React from "react";
import Logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link, Outlet } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = ({
  handleOpenSearch,
  handleToggleCategoriesModal,
  toggleCategoriesModal,
  handleToggleSourcesModal,
  toggleSourcesModal,
  handleToggleDateModal,
  toggleDateModal,
}) => {
  return (
    <>
      <header>
        <div className="main__header">
          <div className="logo">
            <img src={Logo} alt="NewsHub logo" />
            <p>NewsHub</p>
          </div>

          <div className="searchBar">
            <SearchIcon
              className="searchIcon"
              onClick={() => handleOpenSearch()}
            />
          </div>
        </div>

        <div className="route__navs">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/foryou"}>For You</Link>
            </li>
          </ul>
        </div>
        <div className="filters">
          <ul>
            <li onClick={() => handleToggleCategoriesModal()}>
              <p>Categories</p>
              <ArrowDropDownIcon
                className={`dropdown-arrow ${
                  toggleCategoriesModal && "active"
                }`}
              />
            </li>
            <li onClick={() => handleToggleSourcesModal()}>
              <p>Sources</p>
              <ArrowDropDownIcon
                className={`dropdown-arrow ${toggleSourcesModal && "active"}`}
              />
            </li>
            <li onClick={() => handleToggleDateModal()}>
              <p>Date</p>
              <ArrowDropDownIcon
                className={`dropdown-arrow ${toggleDateModal && "active"}`}
              />
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
