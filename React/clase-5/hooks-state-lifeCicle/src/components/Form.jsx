import { useState } from "react";

function Form() {
  const [nombre, setNombre] = useState("");

  const onchangeHandler = (e) => {
    setNombre(e.target.value);
  };

  return (
    <>
      <h2>Formularios</h2>
      <form action="">
        <label htmlFor="nombre">Nombre</label>
        <input
          onChange={onchangeHandler}
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
        />
      </form>
    </>
  );
}

export default Form;
