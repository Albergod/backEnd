import { pool } from "../config/database.js";

export const getAllContracts = async (req, res) => {
  const [response] = await pool.query("SELECT * FROM contracts");

  res.json(response);
};

export const createContract = async (req, res) => {
  try {
    const { nombre, formato, ficha, year } = req.body;
    const [response] = await pool.query(
      "INSERT INTO contracts (nombre, formato, ficha, year) VALUES (?,?,?,?)",
      [nombre, formato, ficha, year]
    );
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getAContract = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM contracts WHERE id = ? ", [
      req.params.id,
    ]);
    res.json(result[0]);
  } catch (error) {
    console.log(error);
  }
};

export const deleteContract = async (req, res) => {
  try {
    await pool.query("DELETE FROM contracts WHERE id = ?", [req.params.id]);
    res.json("Documento eliminado");
  } catch (error) {
    console.log(error);
  }
};

export const UpdateContract = async (req, res) => {
  try {
    const [result] = await pool.query("UPDATE contracts SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);

    res.json("documento actualizado");
    if (result.affectedRows === 0) {
      res.status(401).json({ message: "No se pudo actualizar el documento" });
    }
  } catch (error) {
    console.log(error);
  }
};
