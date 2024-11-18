function Greeting({time}) {
    if (time == 5 || time == 6 || time == 7 || time == 8 || time == 9 || time == 10 || time == 11 ) {
        return <h1>Good Morning</h1>;
    } else if (time == 12 || time == 13 || time == 14 || time == 15 || time == 16 || time == 17) {
        return <h1>Good Afternoon</h1>;
    } else if (time == 18 || time == 19 || time == 20 || time == 21 || time == 22 || time == 23) {
        return <h1>Good Evening</h1>;
    } else if (time == 24 || time == 1 || time == 2 || time == 3 || time == 4) {
        return <h1>Good Night</h1>;
    }
}
export default function Soal4() {
    return (
        <div className="w-1/3 bg-gray-200 px-10 py-20 mt-20 mx-auto rounded-lg shadow-2xl mb-20">
            <h1 className="text-[30px]  font-bold text-slate-700 text-center mb-10">
                Soal 4
            </h1>
            <p className="text-center text-[20px] font-bold text-white  py-3 rounded-lg shadow-lg
             bg-slate-500">
                <Greeting time={12} />
            </p>
        </div>
    );
}