export default function Event(params) {
  const handleDivClick = () => {
    alert("Div clicked!");
  };
  const handleButtonClick = (event) => {
    alert("Button clicked!");
    event.stopPropagation();
  }

  return (
    <div onClick={handleDivClick} className="text-center p-40 bg-slate-200  mx-auto mt-20 w-1/3 rounded-lg shadow-2xl text-[15px] font-semibold">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleButtonClick}
    >
      Click me
    </button>

    </div>
  );
}
