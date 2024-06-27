const client = require("./client");
async function init() {
  const hashSet = await client.hset("hset", {
    model: "bs6",
    enginer: "v8",
    manufacturer: "hyundai",
    country: "india",
  });
  console.log(hashSet);
  const model = await client.hget("hset", "model");
  console.log(model);
}
init();
