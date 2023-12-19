import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  const buttonStyle = "bg-gray-500 text-white text-lg p-4";

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-800">
      <form className="flex justify-center w-full p-5">
        <input
          type="text"
          value={result}
          className="w-60 p-2 bg-white border-none rounded-lg text-right text-xl font-bold"
        />
      </form>

      <div className="grid grid-cols-4 gap-4">
        <button
          name="clear"
          onClick={clear}
          className="col-span-2 bg-red-500 text-white text-lg p-4"
        >
          Clear
        </button>
        <button name="(" onClick={handleClick} className={buttonStyle}>
          (
        </button>
        <button name="/" onClick={handleClick} className={buttonStyle}>
          ÷
        </button>
        <button name="7" onClick={handleClick} className={buttonStyle}>
          7
        </button>
        <button name="8" onClick={handleClick} className={buttonStyle}>
          8
        </button>
        <button name="9" onClick={handleClick} className={buttonStyle}>
          9
        </button>
        <button name="*" onClick={handleClick} className={buttonStyle}>
          ×
        </button>
        <button name="4" onClick={handleClick} className={buttonStyle}>
          4
        </button>
        <button name="5" onClick={handleClick} className={buttonStyle}>
          5
        </button>
        <button name="6" onClick={handleClick} className={buttonStyle}>
          6
        </button>
        <button name="-" onClick={handleClick} className={buttonStyle}>
          -
        </button>
        <button name="1" onClick={handleClick} className={buttonStyle}>
          1
        </button>
        <button name="2" onClick={handleClick} className={buttonStyle}>
          2
        </button>
        <button name="3" onClick={handleClick} className={buttonStyle}>
          3
        </button>
        <button name="+" onClick={handleClick} className={buttonStyle}>
          +
        </button>
        <button name="0" onClick={handleClick} className={buttonStyle}>
          0
        </button>
        <button name="." onClick={handleClick} className={buttonStyle}>
          .
        </button>
        <button id="result" onClick={calculate} className={buttonStyle}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
