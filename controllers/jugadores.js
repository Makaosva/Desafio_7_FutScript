import { playerModel } from "../models/playerModel.js";

const obtenerJugadores = async (req, res) => {
  const { teamID } = req.params;
  const jugadores = await playerModel.getPlayers(teamID);
  res.json(jugadores);
};

const registrarJugador = async (req, res) => {
  const { teamID } = req.params;
  const jugador = req.body;
  await playerModel.addPlayer({ jugador, teamID });
  res.json({ message: "Jugador agregado con éxito" });
};

export const jugadoresController = { obtenerJugadores, registrarJugador };
