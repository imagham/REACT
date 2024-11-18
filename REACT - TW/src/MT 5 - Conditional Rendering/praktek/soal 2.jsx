function DeliveryStatus({status }) {
    if (status === "processing") {
        return <h1 >Your order is being processed</h1>;
    } else if (status === "shipped") {
        return <h1>Your order has been shipped</h1>;
    } else if (status === "delivered") {
        return <h1>Your order has been delivered</h1>;
    } else {
        return <h1>Invalid status</h1>;
    }
}

export default function Soal2() {
    return (
        <div className="w-1/3 bg-gray-200 px-10 py-20 mt-20 mx-auto rounded-lg shadow-2xl mb-20"> 
             <h1 className="text-[30px]  font-bold text-slate-700 text-center mb-10">
                Soal 2
            </h1>
           <p className="text-center text-[20px] font-bold text-white  py-3 rounded-lg shadow-lg bg-slate-500">
            <DeliveryStatus   status="delivered" />
           </p>
        </div>
    )
}