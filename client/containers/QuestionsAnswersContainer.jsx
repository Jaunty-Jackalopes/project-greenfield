import { connect } from "react-redux";
import QuestionAnswer from "../Components/QuestionAnswer/QuestionAnswer.jsx";

let mapStatetoProps = store => {
  return {
    questions: store.questions
  };
};

const QuestionsAnswersContainer = connect(
  mapStatetoProps,
  null
)(QuestionAnswer);

export default QuestionsAnswersContainer;
