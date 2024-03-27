// import React from "react";
import Logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link, Outlet } from "react-router-dom";

const Header = ({ handleOpenSearch }) => {
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
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Authors</a>
            </li>
            <li>
              <a href="#">Date</a>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
