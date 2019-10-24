import Redux from "redux";
import { CardActions } from "@material-ui/core";

const avgRatingReducer = (state = null, action) => {
  switch (action.type) {
    case "CHANGE_RATING":
      return action.avg_rating;
    default:
      return state;
  }
};

export default avgRatingReducer;
