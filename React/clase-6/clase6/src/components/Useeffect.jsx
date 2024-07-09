import { useState, useEffect } from "react";

function EjemploUseEffect() {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);

  const clickHandler = () => {
    setClick(!click);
  };
  const click2Handler = () => {
    setClick2(!click2);
  };

  useEffect(() => {
    console.log("fase de montaje");
  }, []);

  useEffect(() => {
    console.log("El estado del click cambió.");
  }, [click]);

  useEffect(() => {
    console.log("El estado del click2 cambió.");
  }, [click2]);

  return (
    <>
      <div>
        <span>{click ? "true" : "false"}</span>
        <button onClick={clickHandler}>Hazle click!!!</button>
        <span>{click2 ? "true" : "false"}</span>
        <button onClick={click2Handler}>Hazle click!!!</button>
      </div>
    </>
  );
}

export default EjemploUseEffect;
