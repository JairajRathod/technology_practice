import client from "./client.js";

async function stringRedis() {
  // // setting the kay value pair in redis
  // const settedValue = await client.set("user:1", "John Hoe");
  // console.log("Setted value:", settedValue);
  // // getting the value from redis using the key
  // const value = await client.get("user:1");
  // console.log("Got value:", value);
  // // deleting the key value pair from redis
  // const deletedValue = await client.del("user:1");
  // console.log("Deleted value:", deletedValue);
  // // trying to get the value again after deletion
  // const valueAfterDeletion = await client.get("user:1");
  // console.log("Value after deletion:", valueAfterDeletion);
  // // setting a key value pair with expiration time of 10 seconds
  // const settedValueWithExpiration = await client.set(
  //   "user:2",
  //   "Jane Doe",
  //   "EX",
  //   10,
  // );
  // console.log("Setted value with expiration:", settedValueWithExpiration);
  // // getting the value before expiration
  // const valueBeforeExpiration = await client.get("user:2");
  // console.log("Value before expiration:", valueBeforeExpiration);
  // // waiting for 11 seconds to let the key expire
  // await new Promise((resolve) => setTimeout(resolve, 11000));
  // // trying to get the value after expiration
  // const valueAfterExpiration = await client.get("user:2");
  // console.log("Value after expiration:", valueAfterExpiration);
}

stringRedis();
