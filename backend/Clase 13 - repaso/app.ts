import express from "express";
import connectDB from "./database/connection";

import todoRoutes from "./routes/todoRoutes";

const app = express();

connectDB();

const PORT = 8080;

app.use(express.json());

app.use("/todo", todoRoutes);

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto", PORT);
});
