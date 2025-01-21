import React, { useState } from "react";

 function useTheme(initialTheme) {
  const [isDarkMode, setIsDarkMode] = useState(initialTheme === "dark");

  const handleDarkMode = () => {
    console.log("Tema yg aktif saat ini adalah: Dark");
    setIsDarkMode(true);
  };

  const handleLightMode = () => {
    console.log("Tema yg aktif saat ini adalah: Light");
    setIsDarkMode(false);
  };

  return { isDarkMode, handleDarkMode, handleLightMode };
}

 function Display() {
  const { isDarkMode, handleDarkMode, handleLightMode } = useTheme("light");

  return (
    <>
      <div className="flex justify-center mt-20">
      <button
        onClick={handleDarkMode}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase mr-2"
      >
        Dark
      </button>
      <button
        onClick={handleLightMode}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase"
      >
        Light
      </button>
      </div>
    </>
  );
}
// -----------------------------


 function useTugas() {
    const [isTaskCompleted, setIsTaskCompleted] = useState(false);

    const ToggleTask = () => {
        setIsTaskCompleted((prev) => !prev); 
    };

    return { isTaskCompleted, ToggleTask };
}

function Tugas() {
    const { isTaskCompleted, ToggleTask } = useTugas(); 

    return (
        <>
            <div className="flex justify-center mt-20">
                <button
                    onClick={ToggleTask}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase mr-2"
                >
                    {isTaskCompleted ? "Tugas selesai" : "Tugas belum selesai"} 
                </button>           
            </div>                
        </>
    );
}

export default Tugas;
