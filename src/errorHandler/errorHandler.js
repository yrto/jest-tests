const axios = require("axios");

function errorHandler(err, res) {
  // if (true) {
  res.status(400).send("ok");
  axios.get("letscode.com.br");
  return;
  // }
  // res.status(500).send("not ok");
}

module.exports = { errorHandler };
