import React from "react";
import axios from "axios";

const submitQ = async () => {
  await axios.post("http://18.223.1.30/qa/14", {
    body: "does it smell?",
    name: "danny",
    email: "danny@kim.com"
  });
};

const QuestionModal = ({ toggleModal, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1>Ask Your Question</h1>
        <h2>{`About the ${
          document.getElementById("ProductName")
            ? document.getElementById("ProductName").innerText
            : null
        }`}</h2>
        <input
          className="close-modal"
          type="button"
          value="x"
          onClick={toggleModal}
        />
        <form className="modal-form">
          <label>
            <p>Your Question (mandatory)</p>
            {/* TODO: large text window allowing up to 1000 chars */}
            <input type="text" />
          </label>
          <label>
            <p>What is your nickname (mandatory)</p>
            {/* TODO: large text window allowing up to 60 cars for the user's display name */}
            <input type="text" />
            <p>
              For privacy reasons, do not use your full name or email address
            </p>
          </label>
          <label>
            <p>Your email (mandatory)</p>
            {/* TODO: validate email format */}
            <input
              type="email"
              placeholder="Why did you like the product or not?"
            />
            <p>For authenication reasons, you will not be emailed</p>
          </label>
          <input type="button" value="Submit" onClick={submitQ} />
        </form>
      </section>
    </div>
  );
};

export default QuestionModal;
