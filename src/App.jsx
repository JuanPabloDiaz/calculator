import { useState } from "react";
import {
  Fa0,
  Fa1,
  Fa2,
  Fa3,
  Fa4,
  Fa5,
  Fa6,
  Fa7,
  Fa8,
  Fa9,
  FaPlus,
  FaMinus,
} from "react-icons/fa6";

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

  const buttonStyle =
    "flex justify-center items-center bg-gray-500 text-white text-lg p-4 rounded-lg";

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-800">
        <form className="flex justify-center w-full p-5">
          <input
            type="text"
            value={result}
            readOnly
            className="w-68 p-2 bg-black text-white border-none rounded-lg text-right text-xl font-bold"
          />
        </form>

        <div className="grid grid-cols-4 gap-2 border shadow-md shadow-gray-400 p-6 rounded-xl bg-black">
          <button
            name="clear"
            onClick={clear}
            className="col-span-1 bg-red-500 text-white text-lg p-4 rounded-lg"
          >
            AC
          </button>
          <button
            name="toggleSign"
            onClick={toggleSign}
            className={buttonStyle}
          >
            +/-
          </button>
          <button name="%" onClick={handleClick} className={buttonStyle}>
            %
          </button>
          <button name="/" onClick={handleClick} className={buttonStyle}>
            /
          </button>
          <button name="7" onClick={handleClick} className={buttonStyle}>
            7{/* <Fa7 /> */}
          </button>
          <button name="8" onClick={handleClick} className={buttonStyle}>
            8{/* <Fa8 /> */}
          </button>
          <button name="9" onClick={handleClick} className={buttonStyle}>
            9{/* <Fa9 /> */}
          </button>
          <button name="*" onClick={handleClick} className={buttonStyle}>
            ×
          </button>
          <button name="4" onClick={handleClick} className={buttonStyle}>
            4{/* <Fa4 /> */}
          </button>
          <button name="5" onClick={handleClick} className={buttonStyle}>
            5{/* <Fa5 /> */}
          </button>
          <button name="6" onClick={handleClick} className={buttonStyle}>
            6{/* <Fa6 /> */}
          </button>
          <button
            name="-"
            onClick={handleClick}
            className={`${buttonStyle} bg-[#F89B10]`}
          >
            -{/* <FaMinus /> */}
          </button>
          <button name="1" onClick={handleClick} className={buttonStyle}>
            1{/* <Fa1 /> */}
          </button>
          <button name="2" onClick={handleClick} className={buttonStyle}>
            2{/* <Fa2 /> */}
          </button>
          <button name="3" onClick={handleClick} className={buttonStyle}>
            3{/* <Fa3 /> */}
          </button>
          <button name="+" onClick={handleClick} className={buttonStyle}>
            +{/* <FaPlus /> */}
          </button>
          <button name="0" onClick={handleClick} className={buttonStyle}>
            0{/* <Fa0 /> */}
          </button>
          <button name="." onClick={handleClick} className={buttonStyle}>
            .
          </button>
          {/* <button id="result" onClick={calculate} className={buttonStyle}>
          =
        </button> */}
          <button
            id="result"
            onClick={calculate}
            className={`${buttonStyle} col-span-2 bg-green-500`}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
