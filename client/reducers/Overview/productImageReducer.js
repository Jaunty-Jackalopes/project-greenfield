import Redux from "redux";

const productImageReducer = (
  state = [
    {
      name: "",
      original_price: "",
      photos: [{ thumbnail_url: "", url: "" }],
      sale_price: "",
      skus: {},
      style_id: 0
    }
  ],
  action
) => {
  switch (action.type) {
    case "CHANGE_PRODUCT_DATA":
      return action.productData;
    default:
      return state;
  }
};

export default productImageReducer;
