import "reflect-metadata";
import express from "express";
import cors from "cors";
import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";
import { __prod__ } from "./constants";

async function main() {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();
  const post: Post = orm.em.create(Post, { title: "my first post" });
  await orm.em.persistAndFlush(post);
  const posts = await orm.em.find(Post, {});
  console.log(posts);
  const app = express();
  app.use(cors());
  app.listen(4000, () => console.log("success"));
}

main().catch((e) => console.log(e));
