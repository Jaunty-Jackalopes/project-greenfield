import React from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import "./reviews.css";

const marks = [
  {
    value: 0
  },
  {
    value: 1.25
  },
  {
    value: 2.5
  },
  {
    value: 3.75
  },
  {
    value: 5
  }
];

const FactorSlider = withStyles({
  root: {
    color: "#3880ff",
    height: 8,
    padding: "15px 0"
  },
  thumb: {
    width: 0,
    height: 0,
    borderLeft: "7px solid transparent",
    borderRight: "7px solid transparent",
    borderTop: "15px solid green",
    marginLeft: -14,
    backgroundColor: "transparent",
    borderRadius: "0%"
  },

  track: {
    height: 8,
    color: "grey"
  },
  rail: {
    height: 8,
    backgroundColor: "grey"
  },
  mark: {
    backgroundColor: "white",
    height: 8,
    width: 5,
    marginleft: 3
  },
  markActive: {
    opacity: 1
  }
})(Slider);

const ReviewFactorEntry = ({ factor, factor_name }) => {
  return (
    <div className="review-factor">
      <div>{factor_name}</div>
      <div>
        <FactorSlider
          value={Number(factor.value)}
          max={5}
          step={0.1}
          marks={marks}
          valueLabelDisplay="off"
          track={false}
        />
      </div>
    </div>
  );
};

export default ReviewFactorEntry;
