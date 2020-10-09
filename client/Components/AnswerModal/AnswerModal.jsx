import React from "react";

const AnswerModal = ({ toggleModal, show, question }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1>Submit Your Answer</h1>
        <h2>{`${document.getElementById("ProductName").innerText}: ${
          question.question_body
        }`}</h2>
        <input
          className="close-modal"
          type="button"
          value="x"
          onClick={toggleModal}
        />
        <form className="modal-form">
          <label>
            <p>Your Answer (mandatory)</p>
            {/* TODO: large text window allowing up to 1000 chars */}
            <input type="text" />
          </label>
          <label>
            <p>What is your nickname (mandatory)</p>
            {/* TODO: large text window allowing up to 60 cars for the user's display name */}
            <input type="text" placeholder="Example: jack543!" />
            <p>
              For privacy reasons, do not use your full name or email address
            </p>
          </label>
          <label>
            <p>Your email (mandatory)</p>
            {/* TODO: validate email format */}
            <input type="email" placeholder="Example: jack@email.com" />
            <p>For authenication reasons, you will not be emailed</p>
          </label>
          <input type="button" value="Upload your photos" />
          <input type="button" value="Submit" />
        </form>
      </section>
    </div>
  );
};

export default AnswerModal;
