import { useReducer } from "react";

function UseReducerEffect() {
  const initialState = "steelblue";

  const reducer = (state, action) => {
    switch (action.type) {
      case "crimson":
        return "crimson";
      case "verde":
        return "green";
      case "azul":
        return "blue";
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2 style={{ color: state }}>Soy un título que cambia de color!</h2>
      <button onClick={() => dispatch({ type: "crimson" })}>Crimson</button>
      <button onClick={() => dispatch({ type: "verde" })}>Verde</button>
      <button onClick={() => dispatch({ type: "azul" })}>Azul</button>
    </>
  );
}

export default UseReducerEffect;
