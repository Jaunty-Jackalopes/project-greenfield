import Redux from "redux";

const productIdReducer = (state = 1, action) => {
  switch (action.type) {
    case "CHANGE_PRODUCT_ID":
      return action.productID;
    default:
      return state;
  }
};
export default productIdReducer;
