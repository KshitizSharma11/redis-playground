const client = require("./client");

async function init() {
  await client.set("msg:1", "you are awesome");

  const result2 = await client.get("msg:1");
  console.log("message " + result2);
}
init();
