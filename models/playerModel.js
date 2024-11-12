import "dotenv/config";
import format from "pg-format";
import { pool } from "../db/connection.js";

const getPlayers = async (teamID) => {
  const values = [teamID];
  const consulta =
    "SELECT j.name as jugador, p.name as posicion FROM jugadores j INNER JOIN posiciones p ON j.position = p.id WHERE j.id_equipo = $1;";
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
