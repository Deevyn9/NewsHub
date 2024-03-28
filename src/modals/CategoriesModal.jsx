import React from "react";

const CategoriesModal = ({ toggleCategoriesModal }) => {
  return (
    <div className={`filter-modal ${toggleCategoriesModal && "active"}`}>
      CateoriesModal
    </div>
  );
};

export default CategoriesModal;
