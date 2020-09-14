import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from "path";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
export default {
  dbName: "akhtem",
  entities: [Post],
  debug: !__prod__,
  type: "sqlite",
  driver: PostgreSqlDriver,
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
} as Parameters<typeof MikroORM.init>[0];
