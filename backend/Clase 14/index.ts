import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

interface IObjectoAGuardar {
  id: number;
  username: string;
  isAdmin: boolean;
}

const objectoAGuardar: IObjectoAGuardar = {
  id: 1,
  username: "AgustínAlv",
  isAdmin: true,
};

const claveSecreta = "H3CT0RV0LV3";

// const tokenFirmado = jwt.sign(objectoAGuardar, claveSecreta);

// console.log(tokenFirmado);

const generarJWT = (dato: IObjectoAGuardar) => {
  return new Promise((resolve, reject) => {
    jwt.sign(dato, claveSecreta, { expiresIn: "50s" }, (err, token) => {
      if (err) {
        console.log(err);
        reject("Fallo la creación del token");
      } else {
        console.log("Está todo ok");
        resolve(token);
      }
    });
  });
};

(async () => {
  const respuesta = await generarJWT(objectoAGuardar);
  console.log(respuesta);
})();

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZ3VzdMOtbkFsdiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczMTMyOTU0OSwiZXhwIjoxNzMxMzI5NTk5fQ.qGbFqgQ-0PVoaNQEo8sC8gyFMQJ__3-mw21CaJDY-Tk";

// const infoVerificada = jwt.verify(token, claveSecreta);
// console.log(infoVerificada);

//BCRYPT

const claveAEncriptar = "claveloca";

const salt = bcrypt.genSaltSync(10);

const claveEncriptada = bcrypt.hashSync(claveAEncriptar, salt);

console.log("sal");
console.log(salt);
console.log(claveEncriptada);

const claveValida = bcrypt.compareSync(claveAEncriptar, claveEncriptada);

console.log(claveValida);
