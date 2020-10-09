const axios = require("axios");

const getInitialReviewsMeta = product_id => {
  return axios
    .get(`http://3.134.102.30/reviews/${product_id}/meta`)
    .then(({ data }) => {
      return data;
    })
    .catch(e => {
      return {};
    });
};

const getInitialReviewsList = product_id => {
  return axios
    .get(`http://3.134.102.30/reviews/${product_id}/list`, {
      params: { count: 100000, sort: "relevant" }
    })
    .then(({ data }) => {
      return data.results;
    })
    .catch(e => {
      console.log(e);
      return [];
    });
};

module.exports = { getInitialReviewsMeta, getInitialReviewsList };
