import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import expressLayouts from "express-ejs-layouts";
import favicon from "serve-favicon";
import ejs from "ejs";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public/images/favicon.ico")));
app.use("/images", express.static(path.join(__dirname, "public", "images")));

app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/full-page");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

const mongoDBURL =
  process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/wednesdayapp";

mongoose
  .connect(mongoDBURL)
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.error("Connection Error:", err));

import indexRouter from "./routes/index.mjs";
import usersRouter from "./routes/users.mjs";
import productsRouter from "./routes/products.mjs";
import projectsRouter from "./routes/projects.mjs";
import meeRouter from "./routes/mee.mjs";

app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/projects", projectsRouter);
app.use("/users", usersRouter);
app.use("/mee", meeRouter);

app.listen(PORT, () => {
  console.log(`The Wednesday App server is started at port ${PORT}`);
});

export default app;
