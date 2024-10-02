export default function Buttons({ calc, setCalc, calculate }) {
  return (
    <>
      <div>
        <button onClick={() => calculate("7")}>7</button>
        <button onClick={() => calculate("8")}>8</button>
        <button onClick={() => calculate("9")}>9</button>
      </div>
      <div>
        <button onClick={() => calculate("6")}>6</button>
        <button onClick={() => calculate("5")}>5</button>
        <button onClick={() => calculate("4")}>4</button>
      </div>
      <div>
        <button onClick={() => calculate("3")}>3</button>
        <button onClick={() => calculate("2")}>2</button>
        <button onClick={() => calculate("1")}>1</button>
      </div>
      <div>
        <button onClick={() => calculate("c")}>C</button>
        <button onClick={() => calculate("0")}>0</button>
        <button onClick={() => calculate("=")}>=</button>
      </div>
      <div>
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>*</button>
        <button onClick={() => calculate("/")}>/</button>
      </div>
    </>
  );
}
