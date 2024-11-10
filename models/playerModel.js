import "dotenv/config";
import format from "pg-format";
import { pool } from "../db/connection.js";

const getPlayers = async (teamID) => {
  const values = [teamID];
  const consulta =
    "SELECT j.name, j.position FROM jugadores j INNER JOIN equipos e ON j.id_equipo = e.id WHERE e.id = $1;";
  const { rows: players } = await pool.query(consulta, values);
  return players;
};

const addPlayer = async ({ jugador, teamID }) => {
  const { name, position } = jugador;
  const id_equipo = teamID;
  const values = [id_equipo, name, position];
  const consulta =
    "INSERT INTO jugadores VALUES (DEFAULT, $1, $2, $3) RETURNING *;";
  const { rows } = await pool.query(consulta, values);
  return rows[0];
};

export const playerModel = { getPlayers, addPlayer };
