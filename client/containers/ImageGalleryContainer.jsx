import { connect } from "react-redux";
import ImageGallery from "../Components/Overview/ImageGallery/ImageGallery";

let mapStatetoProps = store => {
  return {
    productData: store.productData
  };
};

var mapDispatchToProps = dispatch => ({
  handleStyleClick: image => {
    dispatch(getProductData(image));
  }
});

const ImageGalleryContainer = connect(
  mapStatetoProps,
  mapDispatchToProps,
  null
)(ImageGallery);

export default ImageGalleryContainer;
