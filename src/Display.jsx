export default function Display({
  firstNumber = "",
  operation = "",
  secondNumber = "",
  result = "",
}) {
  return (
    <div>
      {result === "" ? (
        <>
          {firstNumber !== "" && firstNumber} {operation !== "" && operation}
          {secondNumber !== "" && secondNumber}
        </>
      ) : (
        result
      )}
    </div>
  );
}
