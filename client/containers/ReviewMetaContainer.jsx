import { connect } from "react-redux";
import ReviewMeta from "../Components/Reviews/ReviewMeta";

let mapStatetoProps = store => {
  return {
    avg_rating: store.avg_rating,
    metaData: store.metaData
  };
};

const ReviewMetaContainer = connect(
  mapStatetoProps,
  null
)(ReviewMeta);

export default ReviewMetaContainer;
