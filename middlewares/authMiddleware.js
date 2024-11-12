import jwt from "jsonwebtoken";
import { secretKey } from "../utils.js";

export const checkAuth = (req, res, next) => {
  const token = req.headers["authorization"];
  
  if (!token) return res.status(401).json({ message: "Token not provided" });

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });

    req.user = decoded;
    next();
  });
};
