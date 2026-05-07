import client from "./client.js";

async function setRedis() {
  // const addToSet = await client.sadd("myset", "item1", "item2", "item3");
  // console.log(addToSet);
  // const addToSet2 = await client.sadd(
  //   "myset2",
  //   "item1",
  //   "item2",
  //   "item3",
  //   "item4",
  // );
  // console.log(addToSet2);
  // const isMember = await client.sismember("myset", "item1");
  // const isNotMember = await client.sismember("myset", "item4");
  // console.log("Is item1 a member of myset?", isMember);
  // console.log("Is item4 a member of myset?", isNotMember);
  // const setInter = await client.sinter("myset", "myset2");
  // console.log("Intersection of myset and myset2:", setInter);
  // const setUnion = await client.sunion("myset", "myset2");
  // console.log("Union of myset and myset2:", setUnion);
  // const setDiff = await client.sdiff("myset2", "myset");
  // console.log("Difference of myset and myset2:", setDiff);
  // const setRemove = await client.srem("myset", "item1");
  // console.log("Number of items removed from myset:", setRemove);
  // const setPop = await client.spop("myset");
  // console.log("Popped item from myset:", setPop);
  // const setMembers = await client.smembers("myset");
  // console.log(setMembers);
}

setRedis();
