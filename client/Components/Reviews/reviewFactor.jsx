import React from "react";
import ReviewFactorEntry from "./ReviewFactorEntry";

const ReviewFactor = ({ characteristics }) => (
  <div>
    {Object.keys(characteristics).map((factor, i) => {
      return (
        <ReviewFactorEntry
          factor={characteristics[factor]}
          factor_name={factor}
          key={i}
        />
      );
    })}
  </div>
);

export default ReviewFactor;
