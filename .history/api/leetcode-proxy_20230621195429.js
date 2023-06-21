const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const { query } = req.query;

  try {
    const response = await fetch(
      `https://leetcode.com/graphql?query=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
