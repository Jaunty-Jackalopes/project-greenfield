import axios from "axios";
import changeRating from "./changeRating.js";

const getRating = product_id => {
  return function thunk(dispatch) {
    axios
      .get(`http://18.223.1.30/reviews/${product_id}/meta`)
      .then(({ data }) => {
        let ratings = Object.values(data.ratings);
        console.log(ratings);
        let rating =
          ratings.reduce((partial_sum, a) => partial_sum + a, 0) /
          ratings.length;
        let avg_rating = Math.round(rating * 10) / 10;
        console.log(avg_rating);
        dispatch(changeRating(avg_rating));
      });
  };
};

export default getRating;
