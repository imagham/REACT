function PreventDefaultExample(params) {
    const handleFormSubmit = (event) => {
       alert("Form submitted!");    
        event.preventDefault();
      }
      return (
        <form action="#" onSubmit={handleFormSubmit} className="text-center p-40 bg-slate-200  mx-auto mt-20 w-1/3 rounded-lg shadow-2xl">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
      );
}
// no 2
function EventPropagationExample() {
    const handleDivClick = () => {
      alert("Div clicked!");    
    }
    const handleButtonClick = (event) => {
      alert("Button clicked!");    
      event.stopPropagation();
    }
    return (
      <div onClick={handleDivClick} className="text-center p-40 bg-slate-200  mx-auto mt-20 w-1/3 rounded-lg shadow-2xl">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleButtonClick}
        >
          Click me
        </button>

      </div>
    );
}

// no 3

import React from "react";

function ShowAlert({ message }) {
  const handleButtonClick = () => {
    alert(message);
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20 "
      onClick={handleButtonClick}
    >
      Show Message
    </button>
  );
}

// Usage
 function App() {
  return (
    <div className="flex justify-center items-start">
      <ShowAlert message="Jangan lupa bersyukur !" />
    </div>
  );
}
// no 4

function SimpleClick(params) {
  const tombol = () => {
    console.log("Tombol diklik!");
  }
  return (
    <div  className="flex justify-center items-start">
      <button onClick={tombol} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20 ">Clik me</button>
    </div>
  )
}
export default SimpleClick