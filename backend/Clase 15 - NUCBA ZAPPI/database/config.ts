import mongoose from "mongoose";

export const dbConnection = async (): Promise<void> => {
  try {
    const dbUrl = process.env.DB_URL;
    if (!dbUrl) {
      throw new Error("La Url no está correctamente definida en los .env");
    }
    await mongoose.connect(dbUrl);
    console.log("Base de datos online");
  } catch (err) {
    console.log(err);
    throw new Error("Error a la hora de iniciar la base de datos");
  }
};
