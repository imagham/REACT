// soal 1
import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex justify-center gap-1 mt-20 ">
        <button
          onClick={() => setCount(count + 1)}
          className=" bg-slate-300 text-[30px] px-4 text-center pb-1  "
        >
          +
        </button>
        <p className="bg-slate-200 text-[20px] text-center pt-2 px-4">
          {count}
        </p>
        <button
          onClick={() => setCount(count - 1)}
          className=" bg-slate-300 text-[30px] px-4 text-center pb-1 "
        >
          -
        </button>
        <button
          onClick={() => setCount(0)}
          className=" bg-slate-300 text-[30px] px-4 text-center pb-1 "
        >
          reset
        </button>
      </div>
    </>
  );
}
// soal 2
function LoginStatus() {
  const [status, setStatus] = useState("Logged Out");

  return (
    <>
      <div className="bg-slate-400 p-4  text-center *:m-2">
        <p>{status}</p>
        <button
          onClick={() => setStatus("Logged In")}
          className=" bg-slate-300 text-[30px] px-4 text-center pb-1"
        >
          Login
        </button>
        <button
          onClick={() => setStatus("Logged Out")}
          className=" bg-slate-300 text-[30px] px-4 text-center pb-1"
        >
          Logout
        </button>
      </div>
    </>
  );
}
// soal 3


function SimpleCalculator() {
  const [calculator1, setCalculator1] = useState();
  const [calculator2, setCalculator2] = useState(); 
  const [result, setResult] = useState();

  return (
    <>
      <div className="bg-slate-400 p-5 text-center mx-[500px] mt-20 rounded-lg shadow-2xl">
        <h1 className="text-[25px] font-bold mt-10">Kalkulator Sederhana</h1>
        <div className="flex justify-center gap-4 mt-7">
        <div>
          <input
            type="text"
            value={calculator1}
            className="size-10 text-center"
            onChange={(e) => setCalculator1(Number(e.target.value))} // 
          />
        </div>

        <div>
          <input
            type="text"
            className="size-10 text-center "
            value={calculator2}
            onChange={(e) => setCalculator2(Number(e.target.value))} 
          />
        </div>
        <p className="mt-2 text-[20px] font-bold">=</p>
        <div>
          <h4 className="size-10 text-center bg-white flex items-center justify-center"> {result}</h4>
        </div>
        </div>
        <div className=" grid grid-cols-2 mx-[180px] justify-center gap-4 mt-10">
          <button onClick={() => setResult(calculator1 + calculator2)} className="size-16  bg-slate-300 rounded-sm text-[20px] font-bold">+</button>
          <button onClick={() => setResult(calculator1 - calculator2)} className="size-16  bg-slate-300 rounded-sm text-[20px] font-bold">-</button>
          <button onClick={() => setResult(calculator1 * calculator2)} className="size-16  bg-slate-300 rounded-sm text-[20px] font-bold">x</button>
          <button onClick={() => setResult(calculator1 / calculator2)} className="size-16  bg-slate-300 rounded-sm text-[20px] font-bold">/</button>
        </div>
          <button onClick={() => setCalculator1()} className="size-16  bg-red-600 rounded-sm text-[20px] mt-4">C</button>
        
      </div>
    </>
  );
}

export default LoginStatus;
