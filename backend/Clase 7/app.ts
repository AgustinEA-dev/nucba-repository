import express, { Application } from "express";
import { getController, postController } from "./controllers/controllers";

const app: Application = express();

// Estableciendo el middleware para poder leer JSON.

// Parsea peticiones de JSON.
app.use(express.json());

// Creamos las rutas.

app.post("/set", postController);
app.get("/obtener", getController);

// Ponemos el servidor a escuchar

app.listen(3000, () => {
  console.log("El servidor está escuchando en el puerto 3000");
});
