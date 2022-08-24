import express from "express";
import cors from "cors";
import { routes } from "./routes/links.routes.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.get("/", (req, res) => {
  res.send("Succefuly");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("escuchando");
});
