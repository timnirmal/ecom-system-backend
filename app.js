import "dotenv/config";
import express from "express";
import cors from "cors";
import { connect } from "./utils/dbConnect.js";
import apiRouter from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

connect();

app.set("views", "views");
app.set("view engine", "pug");
app.use(express.static("public"));

app.use("/api", apiRouter);

app.get("/", (req, res) => {
    res.render("index");
});

export default app;