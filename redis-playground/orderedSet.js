import client from "./client.js";

async function orderedSetRedis() {
  // const zaddResult = await client.zadd(
  //   "leaderboard",
  //   100,
  //   "Alice",
  //   200,
  //   "Bob",
  //   150,
  //   "Charlie",
  // );
  // console.log("ZADD result:", zaddResult);
  // const zrangeResult = await client.zrange("leaderboard", 0, -1);
  // console.log("ZRANGE result:", zrangeResult);
  // const zreverseRangeResult = await client.zrevrange("leaderboard", 0, -1);
  // console.log("ZREVRANGE result:", zreverseRangeResult);
  // const zScoreResult = await client.zscore("leaderboard", "Alice");
  // console.log("ZScore result for Bob:", zScoreResult);
  // const zRankResult = await client.zrank("leaderboard", "Charlie");
  // console.log("ZRank result for Charlie:", zRankResult);
  // const zRemoveResult = await client.zrem("leaderboard", "Bob");
  // console.log("ZREM result for Bob:", zRemoveResult);
  // const zRangeByScoreResult = await client.zrangebyscore(
  //   "leaderboard",
  //   100,
  //   200,
  // );
  // console.log(
  //   "ZRANGEBYSCORE result for scores between 100 and 200:",
  //   zRangeByScoreResult,
  // );
  // const zPopMaxResult = await client.zpopmax("leaderboard", 1);
  // console.log("ZPOPMAX result:", zPopMaxResult);
  // const zPopMinResult = await client.zpopmin("leaderboard", 1);
  // console.log("ZPOPMIN result:", zPopMinResult);
}

orderedSetRedis();
