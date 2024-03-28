import React from "react";

const DateModal = ({ toggleDateModal }) => {
  return (
    <div className={`filter-modal ${toggleDateModal && "active"}`}>
      DateModal
    </div>
  );
};

export default DateModal;
