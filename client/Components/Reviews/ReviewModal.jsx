import React from "react";
import { Modal, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Rating from "@material-ui/lab/Rating";
import ReviewCharacForm from "./ReviewCharacForm.jsx";
import "./reviews.css";
import axios from "axios";

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      reviewSummary: "",
      reviewBody: "",
      nickName: "",
      hover: 0,
      recommended: true,
      characteristics: {}
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStarHoverChange = this.handleStarHoverChange.bind(this);
    this.handleRecommend = this.handleRecommend.bind(this);
    this.handleSelectCharac = this.handleSelectCharac.bind(this);
    this.handleSummit = this.handleSummit.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }
  handleStarHoverChange(newHover) {
    this.setState({ hover: newHover });
  }
  handleRecommend(e) {
    this.setState({ recommended: e.target.value });
  }
  handleSelectCharac(e) {
    let new_charac = this.state.characteristics;
    const target = e.target;
    const value = target.value;
    const name = target.name;
    new_charac[name] = value;
    this.setState({ characteristics: new_charac });
  }
  handleSummit() {
    let characToAdd = {};
    for (let key in this.state.characteristics) {
      if (this.props.metadata.characteristics[key]) {
        let charId = this.props.metadata.characteristics[key]["id"];
        characToAdd[charId] = Number(this.state.characteristics[key]);
      }
    }
    let new_review = {
      rating: Number(this.state.hover),
      summary: this.state.reviewSummary,
      body: this.state.reviewBody,
      recommend: JSON.parse(this.state.recommended),
      name: this.state.nickName,
      email: this.state.email,
      characteristics: characToAdd,
      photos: [""]
    };
    console.log(new_review);
    axios
      .post(`http://18.223.1.30/reviews/${this.props.productid}`, new_review)
      .then(() => {
        this.props.onHide();
      });
  }
  render() {
    const labels = {
      1: "Poor",
      2: "Fair",
      3: "Average",
      4: "Good",
      5: "Great"
    };

    return (
      <Modal {...this.props} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Write your Review
            <Modal.Body className="review-modal-body">
              <Form className="review-form">
                <Form.Group className="review-choose-rating">
                  <Form.Label className="review-label">
                    Overall Rating*
                  </Form.Label>
                  <Rating
                    name="hover-side"
                    value={this.state.hover}
                    precision={1}
                    onChange={(event, newHover) => {
                      this.handleStarHoverChange(newHover);
                    }}
                  />
                  <p className="review-star-meaning">
                    {this.state.hover !== 0 ? labels[this.state.hover] : null}
                  </p>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="review-label">
                    Do you recommend this product? *
                  </Form.Label>
                  <Form.Check
                    className="review-radio-check"
                    inline
                    label="Yes"
                    value={true}
                    type="radio"
                    name="recommend"
                    onChange={this.handleRecommend}
                  />
                  <Form.Check
                    className="review-radio-check"
                    inline
                    label="No"
                    value={false}
                    type="radio"
                    name="recommend"
                    onChange={this.handleRecommend}
                  />
                </Form.Group>
                <Form.Label className="review-label">
                  Characteristics *
                </Form.Label>
                <ReviewCharacForm
                  handleSelectCharac={this.handleSelectCharac}
                />
                <Form.Group>
                  <Form.Label className="review-label">
                    Review Summary
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    onChange={this.handleInputChange}
                    value={this.state.reviewSummary}
                    type="text"
                    name="reviewSummary"
                    placeholder="Example: Best purchase ever"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="review-label">Review Body*</Form.Label>
                  <Form.Control
                    size="sm"
                    onChange={e => {
                      this.handleInputChange(e);
                    }}
                    value={this.state.reviewBody}
                    name="reviewBody"
                    type="textarea"
                    placeholder="Why did you like the product or not?"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="review-label">Nick Name*</Form.Label>
                  <Form.Control
                    size="sm"
                    onChange={e => {
                      this.handleInputChange(e);
                    }}
                    name="nickName"
                    value={this.state.nickName}
                    type="text"
                    placeholder="Example: jackson11!"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="review-label">
                    Email address
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    onChange={e => {
                      this.handleInputChange(e);
                    }}
                    name="email"
                    value={this.state.email}
                    type="email"
                    placeholder="Example: jackson11@gmail.com"
                  />
                  <Form.Text className="text-muted review-text">
                    For authentication reasons, you will not be emailed
                  </Form.Text>
                </Form.Group>
              </Form>
            </Modal.Body>
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button
            size="sm"
            variant="outline-dark"
            onClick={() => {
              this.handleSummit();
            }}
          >
            Summit
          </Button>
          <Button
            onClick={() => {
              this.props.onHide();
            }}
            size="sm"
            variant="outline-dark"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ReviewModal;
