import "dotenv/config";
import format from "pg-format";
import { pool } from "../db/connection.js";

const getTeams = async () => {
  const query = "SELECT * FROM equipos;";
  const { rows: teams } = await pool.query(query);
  return teams;
};

const addTeam = async (equipo) => {
  const { name } = equipo;
  const values = [name];
  const consulta = "INSERT INTO equipos VALUES (DEFAULT, $1) RETURNING *;";
  const { rows } = await pool.query(consulta, values);
  return rows[0];
};

export const teamModel = { getTeams, addTeam };
