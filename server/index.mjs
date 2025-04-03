import express from "express";
import cors from 'cors';
import "./loadEnvironment.mjs";
import "express-async-errors";
import posts from "./routes/posts.mjs";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/post", posts);

app.use((err, req, res, next) => {
  res.status(500).send("An unexpected error occured, please try again later.")
})
app.listen(PORT, () => {
  console.log(`The Wednesday App Server is running on //:localhost${PORT}`);
});