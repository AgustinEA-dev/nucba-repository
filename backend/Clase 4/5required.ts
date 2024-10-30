interface Auto {
  marca?: string;
  modelo?: string;
  puertas?: number;
}

function crearAuto(auto: Required<Auto>): void {
  console.log(auto);
}

const auto: Required<Auto> = {
  marca: "Ford",
  modelo: "Mustang",
  puertas: 2,
};

const auto1: Required<Auto> = {
  marca: "Chevrolet",
  modelo: "Chery",
  puertas: 4,
};

crearAuto(auto);
crearAuto(auto1);
