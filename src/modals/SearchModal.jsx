import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchModal = ({ openSearchModal, handleCloseSearch }) => {
  return (
    <div className={`searchModal ${openSearchModal && "active"}`}>
      <div className="search-header">
        <div className="input-area">
          <SearchIcon className="modal-searchicon" />
          <input
            type="text"
            placeholder="Search for topics, locations & sources"
          />
        </div>

        <ArrowForwardIcon
          className="backArrow"
          onClick={() => handleCloseSearch()}
        />
      </div>

      <div className="modal-title">
        <h2>Recent Searches</h2>
      </div>

      <div className="recent-searches">
        <div className="search-log">
          <div className="search-text">
            <p>Words</p>
          </div>
          <div className="delete-search">
            <CloseIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
