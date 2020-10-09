import React from "react";
import ReviewEntry from "./ReviewEntry.jsx";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import "./reviews.css";
import ReviewModal from "./ReviewModal.jsx";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
      sortBy: "relevant",
      reviewList: [],
      modalShow: false
    };
    this.fetchReviews = this.fetchReviews.bind(this);
    this.handleSortBy = this.handleSortBy.bind(this);
  }
  componentDidMount() {
    this.fetchReviews();
  }
  fetchReviews() {
    axios
      .get(`http://18.223.1.30/reviews/${this.props.productId}/list`, {
        params: { count: 100000, sort: this.state.sortBy }
      })
      .then(({ data }) => {
        this.setState({ reviewList: data.results });
      })
      .catch(e => {
        console.log(e);
      });
  }

  handleSortBy(e) {
    this.setState({ pageNum: 1, sortBy: e.target.value }, () => {
      this.fetchReviews();
    });
  }

  render() {
    console.log("pageNum", this.state.pageNum, this.props.filterArray);
    let allReviews = this.state.reviewList.slice();
    let filterReviewList = [];
    for (let i = 0; i < this.props.filterArray.length; i++) {
      let filterR = allReviews.filter(review => {
        return review.rating + "" === this.props.filterArray[i];
      });
      filterReviewList = [...filterReviewList, ...filterR];
    }
    return (
      <div className="review-list">
        <Row className="review-sortBy">
          <Col>
            <p>{this.state.reviewList.length} Reviews, sorted by</p>
            <select
              value={this.state.sortBy}
              onChange={this.handleSortBy}
              className="sortBy-select"
            >
              <option value="relevant">Relevant</option>
              <option value="helpful">Helpful</option>
              <option value="newest">Newest</option>
            </select>
          </Col>
        </Row>
        <Row className="review-reviewList">
          {this.props.filterArray.length === 0
            ? this.state.reviewList
                .slice(0, this.state.pageNum * 2)
                .map((review, i) => {
                  return <ReviewEntry review={review} key={i} />;
                })
            : filterReviewList.map((review, i) => {
                return <ReviewEntry review={review} key={i} />;
              })}
        </Row>
        <Row className="review-buttons mt-5">
          <Col xs={3}>
            {this.props.filterArray.length > 0 ||
            this.state.reviewList.length <= 2 * this.state.pageNum ? null : (
              <Button
                size="md"
                variant="outline-dark"
                onClick={() => {
                  let newPageNum = this.state.pageNum + 1;
                  this.setState({ pageNum: newPageNum });
                }}
              >
                More Reviews
              </Button>
            )}
          </Col>
          <Col xs={3}>
            <ButtonToolbar>
              <Button
                size="md"
                variant="outline-dark"
                onClick={() => {
                  this.setState({ modalShow: true });
                }}
              >
                Add a Reviews
              </Button>
              <ReviewModal
                productid={this.props.productId}
                metadata={this.props.metaData}
                show={this.state.modalShow}
                onHide={() => {
                  this.setState({ modalShow: false });
                }}
              />
            </ButtonToolbar>
          </Col>
        </Row>
      </div>
    );
  }
}
export default ReviewList;
