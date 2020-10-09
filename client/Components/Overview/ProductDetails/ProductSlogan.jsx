import React from "react";

const ProductSlogan = ({ slogan, description }) => {
  return (
    <div className="ProductSlogan">
      <div className="slogan"> "{slogan}" </div>
      <div className="description">{description}</div>
    </div>
  );
};

export default ProductSlogan;
