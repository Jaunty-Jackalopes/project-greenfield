import React from "react";
import Grid from "@material-ui/core/Grid";
import StyleSelectorItem from "./StyleSelectorItem.jsx";
import "./productDetails.css";
import "../../../index.css";

const StyleSelector = ({
  productData,
  handleStyleChange,
  styleId,
  checkMarker
}) => {
  return (
    <div>
      <div className="StyleSelector">
        <span className="Style"> STYLE > </span>
        <span>{productData[styleId].name}</span>
      </div>
      <Grid container spacing={6}>
        <Grid item xs={6} sm={3}>
          {productData[styleId].photos.length === 0 ||
          productData[styleId].photos[0].thumbnail_url === null ? (
            <div className="noImages">No Images Found</div>
          ) : (
            <div className="style-bubbles-container">
              {productData.map((image, index) => {
                return (
                  <StyleSelectorItem
                    key={`a${index}`}
                    styleId={styleId}
                    index={index}
                    imageThumbnail={image.photos[0].thumbnail_url}
                    handleStyleChange={handleStyleChange}
                    checkMarker={checkMarker}
                  />
                );
              })}
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default StyleSelector;
