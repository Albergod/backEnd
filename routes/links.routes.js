import express from "express";
import {
  createContract,
  deleteContract,
  getAContract,
  getAllContracts,
  UpdateContract,
} from "../controllers/petitions.js";

export const routes = express.Router();

//obtener todos
routes.get("/contracts", getAllContracts);

//crear nuevo
routes.post("/contracts", createContract);

//obtener uno
routes.get("/contracts/:id", getAContract);

//eliminar
routes.delete("/contracts/:id", deleteContract);

//actualizar
routes.put("/contracts/:id", UpdateContract);
