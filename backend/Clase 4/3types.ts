type Coordenadas = {
  x: number;
  y: number;
};

type Color = "rojo" | "verde" | "azul";

type Punto = Coordenadas & {
  color: Color;
};

const color: Color = "azul";

const punto: Punto = {
  x: 3,
  y: 15,
  color: "azul",
};

console.log(typeof punto);
console.log(typeof color);
console.log(punto);
