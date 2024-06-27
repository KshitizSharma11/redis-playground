const client = require("./client");

async function init() {
  await client.lpush("users", "amit");
  await client.lpush("users", "akash");
  const dev= await client.rpop("users");
  console.log("he is our developer "+dev);
  const read = await client.lrange("users",0,-1);
  console.log(read);
}

init();
