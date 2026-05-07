import client from "./client.js";

async function listRedis() {
  // // Pushing items to a list from the left side of the list
  // const leftPushedList = await client.lpush(
  //   "mylist",
  //   "item1",
  //   "item2",
  //   "item3",
  // );
  // console.log("List length after LPUSH:", leftPushedList);
  // // Pushing items to a list from the right side of the list
  // const rightPushedList = await client.rpush("mylist", "item4");
  // console.log("List length after RPUSH:", rightPushedList);
  // // Getting the length of the list
  // const listItems = await client.lrange("mylist", 0, -1);
  // console.log("List items:", listItems);
  // // Popping an item from the left side of the list
  // const poppedLeftItem = await client.lpop("mylist");
  // console.log("Popped left item:", poppedLeftItem);
  // // Popping an item from the right side of the list
  // const poppedRightItem = await client.rpop("mylist");
  // console.log("Popped right item:", poppedRightItem);
  // // getting the length of the list after popping items
  // const listLengthAfterPops = await client.llen("mylist");
  // console.log("List length after pops:", listLengthAfterPops);
}

listRedis();
