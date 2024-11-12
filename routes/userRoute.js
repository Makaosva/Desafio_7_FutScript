import { Router } from "express";
import { jugadoresController } from "../controllers/jugadores.js";
import { equiposController } from "../controllers/equipos.js";
import { login } from "../controllers/login.js";
import { checkAuth } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/login", login);

router.get("/equipos", equiposController.obtenerEquipos);
router.post("/equipos", checkAuth, equiposController.agregarEquipo);

router.get("/equipos/:teamID/jugadores", jugadoresController.obtenerJugadores);
router.post(
  "/equipos/:teamID/jugadores",
  checkAuth,
  jugadoresController.registrarJugador
);

router.get("*", (req, res) => {
  res.status(404).send("Esta ruta no existe");
});

export default router;
