import React from "react";
import Logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div>
      <header>
        <div className="main__header">
          <div className="logo">
            <img src={Logo} alt="NewsHub logo" />
            <p>NewsHub</p>
          </div>

          <div className="searchBar">
            <SearchIcon className="searchIcon" />
          </div>
        </div>

        <div className="route__navs">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">For You</a>
            </li>
          </ul>
        </div>
        <div className="filters">
          <ul>
            <li>
              <a href="#">Filter</a>
            </li>
            <li>
              <a href="#">Filter</a>
            </li>
            <li>
              <a href="#">Filter</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
