import express from "express";
import { ObjectId } from "mongodb";
import path from "path";
import bodyParser from "body-parser";

const productsRouter = express.Router();
productsRouter.use(bodyParser.json());

productsRouter.get("/", (req, res) => {
  res.render("products", {
    title: "The Wednesday App",
    layout: "./layouts/productlanding",
  });
});

productsRouter.route("/:productcat").get((req, res) => {
  res.render("prodpage", { title: "The Wednesday App", layout: "./layouts/prodpage" });
});

export default productsRouter;