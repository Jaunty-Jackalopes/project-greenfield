import React from "react";

import QuestionAnswerCard from "../QuestionAnswerCard/QuestionAnswerCard.jsx";

const QuestionAnswerList = () => {
  return (
    <div className="QuestionAnswerList-container">
      Question Answer List
      <QuestionAnswerCard />
      <input type="button" value="MORE ANSWER QUESTIONS" />
      <input type="button" value="ADD A QUESTION + " />
    </div>
  );
};

export default QuestionAnswerList;
