import React from "react";
import AnswerModal from "../AnswerModal/AnswerModal.jsx";

import Cookies from "js-cookie";
import axios from "axios";
import { Button } from "react-bootstrap";
// import { question, answer } from "./dummydata";

import "./QuestionAnswerCard.css";

export default class QuestionAnswerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      modal: false
    };
    this.convertDate = this.convertDate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.displayButton = this.displayButton.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.updateQHelpful = this.updateQHelpful.bind(this);
  }

  convertDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString("default", {
      month: "long",
      year: "numeric",
      day: "numeric"
    });
  }

  handleClick(e) {
    // e.preventDefault();
    this.setState({ isClicked: !this.state.isClicked });
  }

  displayButton() {
    if (
      !this.state.isClicked &&
      Object.keys(this.props.question.answers).length > 2
    ) {
      return (
        // <input
        //   type="button"
        //   value="Load More Answers"
        //   onClick={this.handleClick}
        // />
        <Button size="sm" variant="outline-dark" onClick={this.handleClick}>
          Load More Answers
        </Button>
      );
    } else if (this.state.isClicked) {
      return (
        // <input
        //   type="button"
        //   value="Collaspe Answers"
        //   onClick={this.handleClick}
        // />
        <Button size="sm" variant="outline-dark" onClick={this.handleClick}>
          Collapse Answers
        </Button>
      );
    }
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  async updateQHelpful(id, count) {
    try {
      if (!Cookies.get(`question_${id}_helpfulness`)) {
        throw new Error();
      }
    } catch (e) {
      await axios.put(`http://18.223.1.30/qa/question/${id}/helpful`);
      this.setState({ helpfulness: count + 1 });
      Cookies.set(`question_${id}_helpfulness`, "true");
    }
  }

  async updateAHelpful(id, count) {
    try {
      if (!Cookies.get(`answer_${id}_helpfulness`)) {
        throw new Error();
      }
    } catch (e) {
      await axios.put(`http://18.223.1.30/qa/answer/${id}/helpful`);
      this.setState({ [`answer${id}`]: count + 1 });
      Cookies.set(`answer_${id}_helpfulness`, "true");
    }
  }

  async reportAnswer(id) {
    try {
      await axios.put(`http://18.223.1.30/qa/answer/${id}/report`);
      const answer = document.getElementById(`answer${id}`);
      answer.remove();
    } catch (e) {
      console.error(e.message);
    }
  }

  render() {
    const { question } = this.props;

    return question ? (
      <div className="QuestionAnswerCard-container">
        <AnswerModal
          show={this.state.modal}
          toggleModal={this.toggleModal}
          question={question}
        />
        <div className="QACard-question">
          <p className="text-left">
            <strong>Q: {question.question_body}</strong>
          </p>
          <p className="qacard-helpful text-right">
            Helpful ?{" "}
            <input
              className="input-helpfulness"
              type="button"
              defaultValue="Yes"
              onClick={() => {
                this.updateQHelpful(
                  question.question_id,
                  question.question_helpfulness
                );
              }}
            />
            ({this.state.helpfulness || question.question_helpfulness}) |{" "}
            <input
              className="add_answer"
              type="button"
              defaultValue="Add Answer"
              onClick={this.toggleModal}
            />
          </p>
        </div>
        <div className="QACard-answer_outer">
          {Object.keys(question.answers)
            .sort(
              (a, b) =>
                question.answers[b].helpfulness -
                question.answers[a].helpfulness
            )
            .map((answer, index) => {
              if (this.state.isClicked) {
                return (
                  <div key={answer} className="QACard-answer_inner">
                    <p>
                      {index === 0 ? <strong>A: </strong> : null}
                      {question.answers[answer].body}
                    </p>
                    {question.answers[answer].photos.length > 0 ? (
                      <div className="answer-photo-container">
                        {question.answers[answer].photos.map((pic, index) => (
                          <div className="answer-photo">
                            <img
                              src={pic}
                              key={`question-answer-photo${index}`}
                            />
                          </div>
                        ))}
                      </div>
                    ) : null}
                    <p>
                      by {question.answers[answer].answerer_name}{" "}
                      {this.convertDate(question.answers[answer].date)} |
                      Helpful ?{" "}
                      <input
                        className="input-helpfulness"
                        type="button"
                        defaultValue="Yes"
                        onClick={() => {
                          this.updateAHelpful(
                            answer,
                            question.answers[answer].helpfulness
                          );
                        }}
                      />{" "}
                      (
                      {this.state[`answer${answer}`] ||
                        question.answers[answer].helpfulness}
                      ) | <a> Report </a>
                    </p>
                  </div>
                );
              } else if (index < 2) {
                return (
                  <div
                    key={answer}
                    className="QACard-answer_inner"
                    id={`answer${answer}`}
                  >
                    <p>
                      {index === 0 ? <strong>A: </strong> : null}
                      {question.answers[answer].body}
                    </p>
                    {question.answers[answer].photos.length > 0 ? (
                      <div className="answer-photo-container">
                        {question.answers[answer].photos.map((pic, index) => (
                          <div
                            className="answer-photo"
                            key={`answer-photo${index}`}
                          >
                            <img
                              src={pic}
                              key={`question-answer-photo${index}`}
                            />
                          </div>
                        ))}
                      </div>
                    ) : null}
                    <p>
                      by {question.answers[answer].answerer_name}{" "}
                      {this.convertDate(question.answers[answer].date)} |
                      Helpful ?{" "}
                      <input
                        className="input-helpfulness"
                        type="button"
                        defaultValue="Yes"
                        onClick={() => {
                          this.updateAHelpful(
                            answer,
                            question.answers[answer].helpfulness
                          );
                        }}
                      />{" "}
                      (
                      {this.state[`answer${answer}`] ||
                        question.answers[answer].helpfulness}
                      ) |{" "}
                      <input
                        className="report_answer"
                        type="button"
                        defaultValue="Report"
                        onClick={() => {
                          this.reportAnswer(answer);
                        }}
                      />
                    </p>
                  </div>
                );
              }
            })}
          {this.displayButton()}
        </div>
      </div>
    ) : null;
  }
}

// export default QuestionAnswerCard;
