import React from "react";
import { Button } from "react-bootstrap";

import QuestionAnswerCard from "../QuestionAnswerCard/QuestionAnswerCard.jsx";
import QuestionModal from "../QuestionModal/QuestionModal.jsx";

export default class QuestionAnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionLimit: 4,
      modal: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleClick() {
    this.setState({ questionLimit: this.state.questionLimit + 2 });
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <div className="QuestionAnswerList-container">
        <QuestionModal show={this.state.modal} toggleModal={this.toggleModal} />
        {this.props.questions
          .sort((a, b) => b.question_helpfulness - a.question_helpfulness)
          .map((question, index) => {
            if (
              index < this.state.questionLimit &&
              Object.keys(question.answers).length > 0
            ) {
              return (
                <QuestionAnswerCard
                  question={question}
                  key={question.question_id}
                />
              );
            }
          })}
        {this.props.questions.length > this.state.questionLimit ? (
          <Button size="sm" variant="outline-dark" onClick={this.handleClick}>
            MORE ANSWERED QUESTIONS
          </Button>
        ) : null}
        <Button size="sm" variant="outline-dark" onClick={this.toggleModal}>
          ADD A QUESTION +
        </Button>
      </div>
    );
  }
}
