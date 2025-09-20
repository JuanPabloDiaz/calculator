import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const value = e.target.name;
    setResult(result.concat(value));
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

  const toggleSign = () => {
    setResult((prevResult) => {
      const num = parseFloat(prevResult);
      if (isNaN(num)) {
        return prevResult;
      }
      return String(num * -1);
    });
  };

  // Common button styles
  const buttonStyle =
    "bg-gray-600 text-white text-xl font-semibold p-4 rounded-xl shadow-md hover:bg-gray-500 active:scale-95 transition-all";
  const buttonTopStyle =
    "bg-[#A5A5A5] text-black font-bold text-xl rounded-xl h-16 shadow-md hover:bg-[#999] active:scale-95 transition-all";
  const buttonLeftStyle =
    "bg-[#F89B10] font-extrabold text-white rounded-xl shadow-md hover:bg-[#d98207] active:scale-95 transition-all";

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      {/* Display */}
      <form className="mb-4 flex w-full justify-center">
        <input
          type="text"
          value={result}
          readOnly
          className="w-full rounded-lg bg-black/50 p-4 text-right text-4xl font-bold text-white shadow-inner backdrop-blur-md sm:w-8/12 md:w-5/12 lg:w-3/12"
        />
      </form>

      {/* Calculator Buttons */}
      <div className="grid w-full grid-cols-4 gap-3 rounded-xl bg-black/70 p-6 shadow-2xl backdrop-blur-md sm:w-8/12 md:w-5/12 lg:w-3/12">
        <button onClick={clear} className={buttonTopStyle}>
          AC
        </button>
        <button onClick={toggleSign} className={buttonTopStyle}>
          +/-
        </button>
        <button name="%" onClick={handleClick} className={buttonTopStyle}>
          %
        </button>
        <button name="/" onClick={handleClick} className={buttonLeftStyle}>
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
        <button name="*" onClick={handleClick} className={buttonLeftStyle}>
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
        <button name="-" onClick={handleClick} className={buttonLeftStyle}>
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
        <button name="+" onClick={handleClick} className={buttonLeftStyle}>
          +
        </button>

        <button
          name="0"
          onClick={handleClick}
          className={`${buttonStyle} col-span-2`}
        >
          0
        </button>
        <button name="." onClick={handleClick} className={buttonStyle}>
          .
        </button>
        <button
          onClick={calculate}
          className="col-span-1 rounded-xl bg-[#F89B10] text-2xl font-extrabold text-white shadow-md transition-all hover:bg-[#d98207] active:scale-95"
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
