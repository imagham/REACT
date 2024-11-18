function Notivation({priorty}) {
    if (priorty == "low") {
        return <h1>No immediate action required</h1>;
    }else if(priorty == "medium") {
        return <h1>Please address this issu soon</h1>;
    }else if(priorty == "high") {
        return <h1>Immedate action required</h1>;
    }else {
        return <h1>Invalid priority</h1>;
    }
}
export default function Soal3() {
    return (
        <div className="w-1/3 bg-gray-200 px-10 py-20 mt-20 mx-auto rounded-lg shadow-2xl mb-20">
            <h1 className="text-[30px]  font-bold text-slate-700 text-center mb-10">
                Soal 3
            </h1>
            <p className="text-center text-[20px]  font-bold text-white  py-3 rounded-lg shadow-lg
             bg-slate-500">
            <Notivation priorty="medium" />
            </p>
        </div>
    );
}