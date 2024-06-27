const express = require("express");
const axios = require("axios").default;
const client = require("./client");
const app = express();
app.get("/", async (req, res) => {
  try {
    const cache = await client.get("todos");
    if (cache) {
      return res.json(JSON.parse(cache));
    }
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    await client.set("todos", JSON.stringify(data));
    await client.expire("todos", 30);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});
app.listen(4000, () => {
  console.log("listening on 4000");
});
