import { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";

export default function Calculator() {
  const [calc, setCalc] = useState({
    firstNumber: "",
    operation: "",
    secondNumber: "",
    result: "",
  });

  const calculate = (buttonPressed) => {
    if (buttonPressed === "=") {
      if (calc.operation === "+") {
        setCalc({ ...calc, result: +calc.firstNumber + +calc.secondNumber });
      } else if (calc.operation === "-") {
        setCalc({ ...calc, result: +calc.firstNumber - +calc.secondNumber });
      } else if (calc.operation === "*") {
        setCalc({ ...calc, result: +calc.firstNumber * +calc.secondNumber });
      } else if (calc.operation === "/") {
        setCalc({ ...calc, result: +calc.firstNumber / +calc.secondNumber });
      }
    } else if (buttonPressed === "c") {
      setCalc({
        firstNumber: "",
        operation: "",
        secondNumber: "",
        result: "",
      });
    } else if (
      buttonPressed === "+" ||
      buttonPressed === "-" ||
      buttonPressed === "/" ||
      buttonPressed === "*"
    ) {
      setCalc({ ...calc, operation: buttonPressed });
    } else if (calc.operation === "") {
      setCalc({ ...calc, firstNumber: calc.firstNumber + buttonPressed });
    } else if (calc.operation !== "") {
      setCalc({ ...calc, secondNumber: calc.secondNumber + buttonPressed });
    }
  };

  return (
    <>
      <Display
        firstNumber={calc.firstNumber}
        operation={calc.operation}
        secondNumber={calc.secondNumber}
        result={calc.result}
      />
      <Buttons calc={calc} setCalc={setCalc} calculate={calculate} />
    </>
  );
}
