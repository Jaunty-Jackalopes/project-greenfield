const axios = require("axios");

const getProductDetails = product_id => {
  return axios
    .get(`http://3.134.102.30/products/${product_id}/`)
    .then(data => {
      let details = Object.values(data.data);
      return details;
    })
    .catch(err => console.log(err, "ProductDetails endpoint Error"));
};

module.exports = getProductDetails;
