import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Reviews from "../Reviews/Reviews.jsx";
import OverView from "../Overview/Overview.jsx";
import Homepage from "../Homepage/Homepage.jsx";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer.jsx";
import store from "../../store/store.js";

import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Switch>
        <Route path="/test/reviews" exact component={Reviews} />
        <Route path="/test/overview" exact component={OverView} />
        <Route path="/test/questionanswer" exact component={QuestionAnswer} />
        {/* THIS '/' PATH HAS TO BE THE LAST COMPONENT */}
        <Route
          path="/:product_id"
          exact
          component={Homepage}
          onEnter={({ params }) => {
            console.log("dispatch url");
            store.dispatch({
              type: "CHANGE_PRODUCT_ID",
              productId: params.product_id
            });
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
