import React from "react";

const SourceModal = ({ toggleSourcesModal }) => {
  return (
    <div className={`filter-modal ${toggleSourcesModal && "active"}`}>
      SourceModal
    </div>
  );
};

export default SourceModal;
