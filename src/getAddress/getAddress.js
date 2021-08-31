const axios = require("axios");

const getAddress = async function (postalCode, enpointKey, state) {
  const api = {
    VIACEP: `http://viacep.com.br/ws/${postalCode}/json`,
    APICEP: `https://ws.apicep.com/cep/${postalCode}.json`,
  };
  try {
    const { data } = await axios.get(api[enpointKey]);
    if (state === data.uf || state === data.state) {
      return data;
    }
    throw new Error("Failed to match given state with response");
  } catch (err) {
    return { errorMessage: err.message };
  }
};

module.exports = getAddress;
