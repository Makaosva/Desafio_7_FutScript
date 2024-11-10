import { teamModel } from "../models/teamModel.js";

const obtenerEquipos = async (req, res) => {
  const equipos = await teamModel.getTeams();
  res.json(equipos);
};

const agregarEquipo = async (req, res) => {
  const equipo = req.body;
  await teamModel.addTeam(equipo);
  res.send({ message: "Equipo agregado con éxito" });
};

export const equiposController = { obtenerEquipos, agregarEquipo };
