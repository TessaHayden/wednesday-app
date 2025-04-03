import express from "express";
import { ObjectId } from "mongodb";
import path from "path";

const productsRouter = express.Router();

productsRouter.get("/", (req, res) => {
  res.render("products", {
    title: "The Wednesday App",
    layout: "./layouts/prodpage",
  });
});

export default productsRouter;