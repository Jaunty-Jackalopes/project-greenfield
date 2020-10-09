import React from "react";

import "./QuestionAnswerSearchForm.css";

const QuestionAnswerSearchForm = ({ updateList }) => {
  return (
    <div className="QASearch-container">
      <form
        className="QASearch-form"
        onSubmit={e => {
          e.preventDefault();
          updateList();
        }}
      >
        <div className="QASearch-form_inner">
          <span className="fa fa-search"></span>
          <input
            type="text"
            className="QA-form_input"
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          />
        </div>
      </form>
    </div>
  );
};

export default QuestionAnswerSearchForm;
