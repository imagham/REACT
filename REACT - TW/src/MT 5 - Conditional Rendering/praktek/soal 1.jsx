//  no 1
function WelcomeMessage({pesan,isLoggedIn,...props}) {
    if (isLoggedIn) {
        return <h1>Welcome back, user!</h1>
    }else if(!isLoggedIn){
        return <h1>Please log in to Continue</h1>
    }
}
export default function Soal1(params) {
    return(
        <div className="text-center p-40 bg-slate-200  mx-auto mt-20 w-1/3 rounded-lg shadow-2xl text-[15px] font-semibold">
             <h1 className="text-[30px]  font-bold text-slate-700  text-center mb-10">
                Soal 1
            </h1>
            <p className="text-center text-[15px]  text-white  py-3 rounded-lg shadow-lg bg-slate-500">
            <WelcomeMessage isLoggedIn={true} />
            </p>
        </div>
        )
}