import React from "react";

import QuestionAnswerSearchForm from "../QuestionAnswerSearchForm/QuestionAnswerSearchForm.jsx";
import QuestionAnswerList from "../QuestionAnswerList/QuestionAnswerList.jsx";

import "./QuestionAnswer.css";

const QuestionAnswer = ({ questions }) => {
  const updateList = () => {
    const all = document.getElementsByClassName("QuestionAnswerCard-container");
    for (let i = 1; i < all.length; i++) {
      all[i].remove();
    }
  };
  return (
    <div className="QuestionAnswer-container">
      <QuestionAnswerSearchForm updateList={updateList} />
      <QuestionAnswerList questions={questions} />
    </div>
  );
};

export default QuestionAnswer;
