import React from "react";

const DateModal = ({ toggleDateModal }) => {
  return (
    <div className={`filter-modal ${toggleDateModal && "active"}`}>
      <div className="main-filter">
        <div className="filter-item">
          <p>Past Hour</p>
        </div>
        <div className="filter-item">
          <p>Past Day</p>
        </div>
        <div className="filter-item">
          <p>Past Week</p>
        </div>
        <div className="filter-item">
          <p>Past Month</p>
        </div>
        <div className="filter-item">
          <p>Past Year</p>
        </div>
      </div>
    </div>
  );
};

export default DateModal;
