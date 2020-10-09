import React from "react";
import Grid from "@material-ui/core/Grid";
import StarReviews from "./StarReviews.jsx";
import RatingBreakdown from "./RatingBreakdown.jsx";
import ReviewFactor from "./reviewFactor.jsx";

const ReviewMeta = ({
  avg_rating,
  metaData,
  handleClickRating,
  handleClearFilter,
  filterArray
}) => {
  let totalRecommended = Object.values(metaData.recommended).reduce(
    (partial_sum, a) => partial_sum + a,
    0
  );
  return (
    <div className="review-meta">
      <div className="review-overview">
        <div className="review-avg-rating-number">{avg_rating}</div>
        <div className="review-avg-rating-star">
          <StarReviews avg_rating={avg_rating} />
        </div>
      </div>
      <div className="review-rating-breakdown">
        <RatingBreakdown
          metaData={metaData}
          handleClearFilter={handleClearFilter}
          handleClickRating={handleClickRating}
          filterArray={filterArray}
        />
      </div>
      <div className="review-recommended">
        <p>
          {parseInt((metaData.recommended[1] / totalRecommended) * 100)}% of
          reviews recommended this product
        </p>
      </div>
      <div className="review-rating-factor">
        <ReviewFactor characteristics={metaData.characteristics} />
      </div>
    </div>
  );
};

export default ReviewMeta;
