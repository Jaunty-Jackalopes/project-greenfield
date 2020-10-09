import { combineReducers } from "redux";
import avgRatingReducer from "./Reviews/avgRating.js";
import reviewListReducer from "./Reviews/reviewList.js";
import metaDataReducer from "./Reviews/metaData.js";
import productImageReducer from "./Overview/productImageReducer";
import productDetailsReducer from "./Overview/productDetailsReducer";
import questionsReducer from "./QA/questionsReducer.js";
import productIdReducer from "./productID.js";

const rootReducer = combineReducers({
  avg_rating: avgRatingReducer,
  reviewList: reviewListReducer,
  metaData: metaDataReducer,
  productData: productImageReducer,
  productDetails: productDetailsReducer,
  questions: questionsReducer,
  productId: productIdReducer
});
export default rootReducer;
