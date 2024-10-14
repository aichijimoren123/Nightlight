import { Hono } from "hono";
import { logger } from "hono/logger";
import { users } from "./controllers/user.ts";
import { customLogger } from "./middleware/logger.ts";
const app = new Hono();
app.use(logger(customLogger));
app.get("/", (c: any) => {
  return c.text("Hello Hono!");
});

app.route("/users", users);

app.get("/hello", (c: any) => {
  return c.text("Hello World!");
});

Deno.serve(app.fetch);
