import React from "react";

const SourceModal = ({ toggleSourcesModal }) => {
  return (
    <div className={`filter-modal ${toggleSourcesModal && "active"}`}>
      <div className="main-filter">
        <div className="filter-item">
          <p>Source</p>
        </div>
        <div className="filter-item">
          <p>Source</p>
        </div>
        <div className="filter-item">
          <p>Source</p>
        </div>
        <div className="filter-item">
          <p>Source</p>
        </div>
        <div className="filter-item">
          <p>Source</p>
        </div>
        <div className="filter-item">
          <p>Source</p>
        </div>
      </div>
    </div>
  );
};

export default SourceModal;
