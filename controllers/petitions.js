import { pool } from "../config/database.js";

export const getAllContracts = async (req, res) => {
  const [response] = await pool.query("SELECT * FROM contracts");

  res.json(response);
};

export const createContract = async (req, res) => {
  try {
    const { nombre, formato, ficha, año } = req.body;
    const [response] = await pool.query(
      "INSERT INTO contracts (nombre, formato, ficha, año) VALUES (?,?,?,?)",
      [nombre, formato, ficha, año]
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
    res.send("Documento eliminado");
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

    res.send("documento actualizado");
    if (result.affectedRows === 0) {
      res.status(401).json({ message: "No se pudo actualizar el documento" });
    }
  } catch (error) {
    console.log(error);
  }
};
