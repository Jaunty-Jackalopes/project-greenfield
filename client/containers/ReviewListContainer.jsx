import { connect } from "react-redux";
import ReviewList from "../Components/Reviews/ReviewList";

let mapStatetoProps = (store, ownProps) => {
  return {
    reviewList: store.reviewList,
    metaData: store.metaData,
    productId: store.productId
  };
};

const ReviewListContainer = connect(mapStatetoProps)(ReviewList);

export default ReviewListContainer;
