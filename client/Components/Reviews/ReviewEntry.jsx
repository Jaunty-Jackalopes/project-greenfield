import React from "react";
import Grid from "@material-ui/core/Grid";
import StarReviews from "./StarReviews.jsx";
import "./reviews.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import axios from "axios";
import { Row, Container, Col } from "react-bootstrap";

class ReviewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulClicked: false,
      helpful: 0,
      reportClicked: false
    };
    this.handleClickHelpful = this.handleClickHelpful.bind(this);
    this.handleClickReport = this.handleClickReport.bind(this);
  }
  handleClickHelpful() {
    if (!this.state.helpfulClicked) {
      axios.put(
        `http://18.223.1.30/reviews/helpful/${this.props.review.review_id}`
      );
      this.setState({ helpful: this.props.review.helpfulness + 1 }, () => {
        console.log(this.state.helpful);
      });
    }
    this.setState({
      helpfulClicked: true
    });
  }
  handleClickReport() {
    if (!this.state.reportClicked) {
      axios.put(
        `http://18.223.1.30/reviews/report/${this.props.review.review_id}`
      );
    }
    this.setState({
      reportClicked: true
    });
  }
  render() {
    return (
      <Container className="review-entry">
        <Row className="mt-3">
          <Col className="review-username">
            <AccountCircleIcon /> {this.props.review.reviewer_name}
          </Col>
        </Row>
        <Row className="mt-1">
          <Col sm={3} lg={2}>
            <StarReviews avg_rating={this.props.review.rating} />
          </Col>
          <Col sm={6} lg={8}>
            <div className="review-summary">{this.props.review.summary}</div>
          </Col>
        </Row>
        <Row>
          <Col className="review-entry-date">
            {new Date(this.props.review.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric"
            })}
          </Col>
        </Row>
        <Row className="review-body">
          <Col>{this.props.review.body}</Col>
        </Row>
        <Row>
          {this.props.review.photos.map(photo => {
            return (
              <Col>
                <img className="review-entry-photo" src={photo.url} alt="" />
              </Col>
            );
          })}
        </Row>
        <Row className="mt-3">
          {this.props.review.recommend ? (
            <Col className="review-entry-recommend">
              I recommend this product
            </Col>
          ) : null}
        </Row>
        {/* <Row>{this.props.review.response ? <div>Response:</div> : null}</Row> */}
        <Row className="mt-3">
          <Col xs={2}>
            <div className="review-helpful">
              Helpful?{" "}
              <span
                className="review-helpful-yes"
                onClick={() => {
                  this.handleClickHelpful();
                }}
              >
                Yes
              </span>
              <span className="review-helpful-count">
                {this.state.helpfulClicked
                  ? `(${this.state.helpful})`
                  : `(${this.props.review.helpfulness})`}
              </span>
            </div>
          </Col>
          <Col xs={2}>
            <div
              className="review-report"
              onClick={() => {
                this.handleClickReport();
              }}
            >
              {this.state.reportClicked ? "Reported" : "Report"}
            </div>
          </Col>
          <Col xs={6}></Col>
        </Row>
      </Container>
    );
  }
}

export default ReviewEntry;
