import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./../reducers/main.js";

//ACTIONS GO HERE
import changeRating from "../actions/Reviews/changeRating.js";
import changeMetaData from "../actions/Reviews/changeMetaData.js";
import changeReviewList from "../actions/Reviews/changeReviewList.js";
import questionsAction from "../actions/QA/questionsAction";
import getProductData from "../actions/Overview/getProductData.js";
import ProductDetails from "../actions/Overview/ProductDetails.js";

//EXTERNAL FUNCTIONS
const fetchQuestions = require("./QuestionsAnswers/QuestionsAnswers.js");
const {
  getInitialReviewsMeta,
  getInitialReviewsList
} = require("./Reviews/getInitialReviews.js");
const getProductStyles = require("./Overview/getProductStyles.js");
const getProductDetails = require("./Overview/getProductDetails.js");

//START BELOW, CREATE STORE

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//getting the product id from window
let productId = window.location.href.split("/").pop();

//intialize data
store.dispatch({
  type: "CHANGE_PRODUCT_ID",
  productId: productId
});

getInitialReviewsMeta(productId).then(
  ({ characteristics, ratings, recommended }) => {
    let totalS = 0;
    let totalD = 0;
    for (let key in ratings) {
      totalS += Number(key) * ratings[key];
      totalD += ratings[key];
    }
    let avg_rating = (Math.round((totalS / totalD) * 10) / 10).toFixed(1);
    store.dispatch(changeRating(avg_rating));
    store.dispatch(changeMetaData({ characteristics, ratings, recommended }));
  }
);

fetchQuestions(productId).then(data => {
  store.dispatch(questionsAction(data));
});

getInitialReviewsList(productId).then(reviewList => {
  store.dispatch(changeReviewList(reviewList));
});

getProductStyles(productId).then(productData => {
  store.dispatch(getProductData(productData));
});

getProductDetails(productId).then(productDetails => {
  store.dispatch(ProductDetails(productDetails));
});

export default store;
