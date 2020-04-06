import React from "react";
import ImageList from "./ImageList";
import Container from "@material-ui/core/Container";
import notFound from "../logos/notFound.svg";
import ImageGalleryCarousel from "./ImageGalleryCarousel";
import "./ImageGallery.css";

const ImageGallery = ({
  productData,
  handleClick,
  id,
  styleId,
  showModal,
  leaveExpand
}) => {
  //OnClick showModal(from the state in parent Component) will switch between true/false,
  //which returns a string, that is put into the div's className that expands the photo clicked on thumbnail
  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className="Image">
      <Container maxWidth="sm">
        {productData[styleId].photos.length === 0 ||
        productData[styleId].photos[id].thumbnail_url === null ? (
          <img src={notFound} />
        ) : (
          <div className="shrink">
            {showModal ? (
              <div className={showHideClassName}>
                <img
                  className="modal-main2"
                  src={productData[styleId].photos[id].url}
                  onClick={leaveExpand}
                />
              </div>
            ) : null}
            <div>
              <ImageList
                productData={productData[styleId].photos}
                handleClick={handleClick}
                styleId={styleId}
              />

              {productData[styleId].photos[id].url === null ? null : (
                <ImageGalleryCarousel
                  productData={productData[styleId].photos}
                />
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ImageGallery;
