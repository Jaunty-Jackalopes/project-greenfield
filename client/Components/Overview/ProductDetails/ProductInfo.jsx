import React from "react";
import "./productDetails.css";

const ProductInfo = ({ productData = [], productDetails }) => {
  return (
    <div>
      <h1 className="Pname" id="ProductName">
        {productDetails[1]}
      </h1>
      <div className="Category">{productDetails[4]}</div>
      <div className="Price">
        {productData.sale_price === "0" ? (
          <div>
            <span> Price : ${productData.original_price} </span>
          </div>
        ) : (
          <div>
            <span>Price :</span>
            <span className="PriceStyling">${productData.original_price}</span>
            <span className="Sale">
              Sale: $
              {Number(productData.original_price - productData.sale_price)}{" "}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
