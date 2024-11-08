import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://agantro:RRtMB34kLN49VZQD@cluster0.8v32y.mongodb.net/"
    );
    console.log("La base de datos a sido conectada.");
  } catch (error) {
    console.log("Error de conexión:", error);
  }
};

export default connectDB;
