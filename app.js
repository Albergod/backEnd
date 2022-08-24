import express from "express";
import cors from "cors";
import { routes } from "./routes/links.routes.js";
import connection from "./config/database.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", routes);

app.listen(process.env.PORT || 5000, () => {
  console.log("escuchando");
});

connection
  .connect()
  .then(() => {
    console.log("conected to database");
  })
  .catch((err) => {
    console.log("error:", err);
  });
