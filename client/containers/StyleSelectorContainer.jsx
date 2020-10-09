import { connect } from "react-redux";
import StyleSelector from "../Components/Overview/ProductDetails/StyleSelector";

let mapStatetoProps = store => {
  return {
    productData: store.productData
  };
};

const StyleSelectorContainer = connect(
  mapStatetoProps,
  null
)(StyleSelector);

export default StyleSelectorContainer;
