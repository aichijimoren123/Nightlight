import { Hono } from "hono";

export const users = new Hono();

users.get("/", (c: any) => {
  return c.text("Get USers!");
});

users.get("/all", (c: any) => {
  return c.json({ users: [{ name: "John Doe" }, { name: "Jane Doe" }] });
});

users.get("/:id", (c: any) => {
  return c.json({ user: { name: "John Doe" } });
});
