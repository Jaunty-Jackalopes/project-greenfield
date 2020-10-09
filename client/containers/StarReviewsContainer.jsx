import { connect } from "react-redux";
import StarReviews from "../Components/Reviews/StarReviews";

let mapStatetoProps = store => {
  return {
    avg_rating: store.avg_rating
  };
};

const StarReviewsContainer = connect(
  mapStatetoProps,
  null
)(StarReviews);

export default StarReviewsContainer;
