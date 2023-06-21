const axios = require("axios");

const API_ENDPOINT = "https://leetcode.com/graphql";

module.exports = async (req, res) => {
  try {
    const response = await axios.post(API_ENDPOINT, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
