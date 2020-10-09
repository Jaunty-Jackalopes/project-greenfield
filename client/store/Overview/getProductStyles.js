const axios = require("axios");

const getProductStyles = (product_id = 1) => {
  return axios
    .get(`http://3.134.102.30/products/${product_id}/styles`)
    .then(({ data }) => {
      let products = Object.values(data.results);
      return products;
    })
    .catch(err => console.log(err, "ProductStyles endpoint Error"));
};

module.exports = getProductStyles;
