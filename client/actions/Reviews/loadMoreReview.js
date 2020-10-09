import axios from "axios";
import changeReviewList from "./changeReviewList.js";

const loadMoreReview = (product_id, pageNum = 3) => {
  return function thunk(dispatch) {
    console.log(pageNum);
    return axios
      .get(`http://18.223.1.30/reviews/${product_id}/list`, {
        params: { page: pageNum, count: 2, sort: "relevant" }
      })
      .then(({ data }) => {
        console.log("on page click");
        dispatch(changeReviewList(data));
      });
  };
};

export default loadMoreReview;
