import React from "react";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const StarReviews = ({ avg_rating }) => (
  <div className="review-starReview">
    <Rating
      name="customized-empty"
      value={Number(avg_rating)}
      precision={0.25}
      emptyIcon={<StarBorderIcon fontSize="inherit" />}
      readOnly
    />
  </div>
);

export default StarReviews;
