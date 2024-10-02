import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Jerba from "./Jerba";
import Calculator from "./Calculator";

function App() {
  //    estado  setter              valorInicial
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hola");
  }, [count]);

  return (
    <>
      {/* React Fragment o Fragment, es basicamente una etiqueta que sirve para "envolver" PERO no ocupa espacio en el DOM */}
      <Calculator />
    </>
  );
}

export default App;
