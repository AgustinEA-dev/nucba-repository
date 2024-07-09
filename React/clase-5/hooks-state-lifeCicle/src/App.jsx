import { useState } from "react";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
