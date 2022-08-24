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
routes.get("api/contracts", getAllContracts);

//crear nuevo
routes.post("api/contracts", createContract);

//obtener uno
routes.get("api/contracts/:id", getAContract);

//eliminar
routes.delete("api/contracts/:id", deleteContract);

//actualizar
routes.put("api/contracts/:id", UpdateContract);
