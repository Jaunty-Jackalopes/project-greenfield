import Redux from "redux";

const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_QUESTION":
      return action.questions;
    default:
      return state;
  }
};

export default questionsReducer;
