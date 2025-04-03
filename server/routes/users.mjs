import express from "express";
import { ObjectId } from "mongodb";
import path from "path";

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  res.render("users", {
    title: "The Wednesday App",
    layout: "./layouts/full-page",
  });
});

export default usersRouter;