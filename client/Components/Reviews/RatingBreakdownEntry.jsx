import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./reviews.css";

const RatingBreakdownEntry = ({
  rating,
  percentage,
  numOfRating,
  handleClickRating
}) => (
  <div
    className="row rating-breakdown-entry mt-3"
    onClick={() => {
      handleClickRating(rating);
    }}
  >
    <div className="rating-star col-2">{rating} stars</div>
    <div className="review-rating-prograss-bar col-6">
      <ProgressBar now={parseInt(percentage * 100)} variant="success" />
    </div>
    <div className="rating-amount col-4">{numOfRating}</div>
  </div>
);

export default RatingBreakdownEntry;
