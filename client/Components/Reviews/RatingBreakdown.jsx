import React from "react";
import RatingBreakdownEntry from "./RatingBreakdownEntry.jsx";

const RatingBreakdown = ({
  metaData,
  handleClickRating,
  handleClearFilter,
  filterArray
}) => {
  let totalRatings = Object.values(metaData.ratings).reduce(
    (partial_sum, a) => partial_sum + a,
    0
  );

  return (
    <div>
      <p>Rating Breakdown</p>
      {filterArray.length > 0 ? (
        <div className="review-filter">
          Filters have been applied{" "}
          <span
            className="remove-rating-filter"
            onClick={() => {
              handleClearFilter();
            }}
          >
            remove all filters
          </span>
        </div>
      ) : null}
      {Object.keys(metaData.ratings).map(rating => {
        return (
          <RatingBreakdownEntry
            rating={rating}
            percentage={metaData.ratings[rating] / totalRatings}
            numOfRating={metaData.ratings[rating]}
            key={rating}
            handleClickRating={handleClickRating}
          />
        );
      })}
    </div>
  );
};

export default RatingBreakdown;
