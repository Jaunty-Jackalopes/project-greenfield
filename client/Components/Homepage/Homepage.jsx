import React from "react";
import Reviews from "../Reviews/Reviews.jsx";
import OverView from "../Overview/Overview.jsx";
import QuestionsAnswersContainer from "../../containers/QuestionsAnswersContainer.jsx";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "10px 0",
          backgroundColor: "black",
          alignItems: "center",
          color: "white"
        }}
      >
        <p>YOU GOT THIS FASHION</p>
      </header>
      <OverView />
      <QuestionsAnswersContainer />
      <Reviews />
    </div>
  );
};

export default Homepage;
