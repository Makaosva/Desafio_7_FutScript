import express from "express";
const app = express();

app.listen(3000, console.log("SERVER ON"));
app.use(express.json());

import { jugadoresController } from "./controllers/jugadores.js";
import { equiposController } from "./controllers/equipos.js";

app.get("/equipos", equiposController.obtenerEquipos);
app.post("/equipos", equiposController.agregarEquipo);

app.get("/equipos/:teamID/jugadores", jugadoresController.obtenerJugadores);
app.post("/equipos/:teamID/jugadores", jugadoresController.registrarJugador);
