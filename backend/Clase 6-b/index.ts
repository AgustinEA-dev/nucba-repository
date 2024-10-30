interface Empleado {
  id: number;
  nombre: string;
  apellido: string;
  cargo: string;
  sueldo: number;
}

class ClaseEmpleado implements Empleado {
  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public cargo: string,
    public sueldo: number
  ) {}
}

class ClaseDirector extends ClaseEmpleado {
  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public cargo: string,
    public sueldo: number,
    public area: string
  ) {
    super(id, nombre, apellido, cargo, sueldo);
  }
  contratar(nuevoEmpleado: Empleado) {
    console.log(
      `Contratando nuevo empleado ${nuevoEmpleado.nombre} para el area ${this.area}`
    );
  }
  despedir(nuevoEmpleado: Empleado) {
    console.log(
      `Despidiendo nuevo empleado ${nuevoEmpleado.nombre} del area ${this.area}`
    );
  }
}

const empleado1: Empleado = new ClaseEmpleado(
  1,
  "Agustin",
  "Alvarez",
  "programador",
  1000
);
const empleado2: Empleado = new ClaseEmpleado(
  2,
  "Hector",
  "Ramirez",
  "programador",
  1000
);

const director1: ClaseDirector = new ClaseDirector(
  1,
  "Diego",
  "Lopez",
  "Director",
  2000,
  "Desarrollo"
);

director1.contratar(empleado1);
director1.contratar(empleado2);
director1.despedir(empleado2);

console.log(director1);

console.table(empleado1);
console.table(empleado2);
