const axios = require("axios");

const fetchQuestions = product_id => {
  return axios
    .get(`http://3.134.102.30/qa/${product_id}`)
    .then(({ data }) => {
      // console.log(data);
      return data.results;
    })
    .catch(err => console.log(err, "QA endpoint Error"));
};

module.exports = fetchQuestions;
