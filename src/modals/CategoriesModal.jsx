import React from "react";

const CategoriesModal = ({ toggleCategoriesModal }) => {
  return (
    <div className={`filter-modal ${toggleCategoriesModal && "active"}`}>
      <div className="main-filter">
        <div className="filter-item">
          <p>Technology</p>
        </div>
        <div className="filter-item">
          <p>Technology</p>
        </div>
        <div className="filter-item">
          <p>Technology</p>
        </div>
        <div className="filter-item">
          <p>Technology</p>
        </div>
        <div className="filter-item">
          <p>Technology</p>
        </div>
        <div className="filter-item">
          <p>Technology</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesModal;
