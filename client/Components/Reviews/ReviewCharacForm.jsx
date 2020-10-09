import React from "react";
import { Form } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";
import "./reviews.css";

const characLabels = {
  Size: {
    1: "A size too small",
    2: "1/2 a size too small",
    3: "perfect",
    4: "1/2 a size too big",
    5: "a size too wide"
  },
  Width: {
    1: "Too narrow",
    2: "Slightly narrow",
    3: "Perfect",
    4: "Slightly wide",
    5: "Too wide"
  },
  Comfort: {
    1: "Uncomfortable",
    2: "Slightly uncomfortable",
    3: "OK",
    4: "Comfortable",
    5: "Perfect"
  },
  Quality: {
    1: "Poor",
    2: "Below average",
    3: "What I expected",
    4: "Pretty great",
    5: "Perfect"
  },
  Length: {
    1: "Run Short",
    2: "Runs slightly short",
    3: "Perfect",
    4: "Runs slightly long",
    5: "Run Long"
  },
  Fit: {
    1: "Run tight",
    2: "Run slightly tight",
    3: "Perfect",
    4: "Runs slightly long",
    5: "Runslong"
  }
};

const ReviewCharacForm = ({ handleSelectCharac }) => {
  return Object.keys(characLabels).map(charac => {
    return (
      <Row className="charac-form">
        <Col>
          <div className="review-text review-label">{charac}</div>
        </Col>
        {[1, 2, 3, 4, 5].map(value => {
          return (
            <Col>
              <label className="review-text">
                {characLabels[charac][value]}
                <input
                  className="review-radio-check"
                  value={value}
                  type="radio"
                  name={charac}
                  onChange={e => {
                    handleSelectCharac(e);
                  }}
                />
              </label>
            </Col>
          );
        })}
      </Row>
    );
  });
};
export default ReviewCharacForm;
