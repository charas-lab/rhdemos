const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const { url } = req.query;
  try {
    const response = await fetch(url);
    const html = await response.text();

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send("Error fetching the source code. Please try again.");
  }
};