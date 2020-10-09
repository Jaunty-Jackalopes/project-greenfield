import Redux from "redux";

const avgRatingReducer = (state = null, action) => {
  switch (action.type) {
    case "CHANGE_RATING":
      return action.avg_rating;
    default:
      return state;
  }
};

export default avgRatingReducer;
