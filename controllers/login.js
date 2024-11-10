import jwt from "jsonwebtoken";
import { secretKey } from "../utils.js";

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "1234") {
    const token = jwt.sign({ username }, secretKey);
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
