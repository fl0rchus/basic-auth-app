import { Request, Response } from "express";
import jwt from "jsonwebtoken";

//Función para manejar la lógica del login
export const loginHandler = (req: Request, res: Response) => {
  /*
        1) Procesar el req.body
        2) Validar los datos (email, password) - express-validator, joi, zod
        3) Almacenar los valores en la db 
        4) Generar un token <-- 

    */

  const token = jwt.sign(
    {
      test: "test",
    },
    "secret",
    {
      expiresIn: 60 * 60 * 24,
    }
  );

  return res.json({ token });
};

//Ruta del perfil que va a estar protegida
export const profileHandler = (req: Request, res: Response) => {
  return res.json({
    message: "profile",
  });
};
