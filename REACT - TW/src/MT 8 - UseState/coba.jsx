// Pengunaan useState menggunakan tipe data number
import React,{useState} from "react";
function Couter() {
    const [count, setCount] = useState(0);
    return (
        <>
        <div className="flex justify-center gap-1 mt-20 ">
        <button onClick={() => setCount(count + 1)} className=" bg-slate-300 text-[30px] px-4 text-center pb-1  ">+</button>
        <p className="bg-slate-200 text-[20px] text-center pt-2 px-4">{count}</p>
        <button onClick={() => setCount(count - 1)} className=" bg-slate-300 text-[30px] px-4 text-center pb-1 ">-</button>
        <button onClick={() => setCount(0)} className=" bg-slate-300 text-[30px] px-4 text-center pb-1 ">reset</button>
        </div>
        </>
    )
}


// Pengunaan useState menggunakan tipe data string

function StringComponent() {
  const [nama, setNama] = useState("Fadgham"); 

  return (
    <>
      <div className="bg-slate-400 p-4  text-center *:m-2">
        <p>Nama: {nama}</p> 
        <button onClick={() => setNama("Khairul")} className=" bg-slate-300 text-[30px] px-4 text-center pb-1">Click</button> 
        <button onClick={() => setNama("Fadgham")} className=" bg-slate-300 text-[30px] px-4 text-center pb-1">Reset</button> 
      </div>
    </>
  );
}

export default StringComponent;

