interface Persona {
  nombre: string;
  edad: number;
  direccion: string;
}

function actualizarPersona(
  persona: Persona,
  cambios: Partial<Persona>
): Persona {
  return { ...persona, ...cambios };
}

const alumno: Persona = {
  nombre: "Alberto",
  edad: 25,
  direccion: "Calle Loca 123",
};

console.log(alumno);

const cambios: Partial<Persona> = {
  edad: 33,
};

const estudianteActualizado = actualizarPersona(alumno, cambios);

console.log(estudianteActualizado);
