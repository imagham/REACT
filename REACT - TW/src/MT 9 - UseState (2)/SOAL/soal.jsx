import { products } from "./Product (1)";
import { useState } from "react";

export default function ProductList() {
    const [jumlah, setJumlah] = useState(Array(products.length).fill(0));

    const updateJumlah = (index, value) => {
        setJumlah((prevJumlah) =>
            prevJumlah.map((jml, i) => (i === index ? jml + value : jml))
        );
    };

    return (
        <>
        <div className="grid grid-cols-3 gap-5">
            {products.map((product, index) => (
                <div
                    key={product.id}
                    className="bg-slate-100 rounded-lg shadow-2xl mx-10 mt-20"
                >
                    <img src={product.image} className="w-full rounded-t-lg" />
                    <h2 className="font-bold text-[24px] ml-5 mt-3">
                        {product.title}
                    </h2>
                    <p className="text-[17px] ml-5 font-semibold text-slate-500">
                        Harga : {product.price}
                    </p>
                    <div className="flex ml-5 mt-3 mb-3">
                        <button
                            onClick={() => updateJumlah(index, -1)}
                            className="py-2 px-4 bg-red-500 text-white rounded-lg mr-2"
                            disabled={jumlah[index] === 0}
                        >
                            Kurang
                        </button>
                        <p className="pr-2 text-[25px] font-semibold text-black">
                            {jumlah[index]}
                        </p>
                        <button
                            onClick={() => updateJumlah(index, 1)}
                            className="py-2 px-4 bg-green-500 text-white rounded-lg mr-2"
                        >
                            Tambah
                        </button>
                    </div>
                    <div className="ml-5 mb-5">
                        Total Harga : Rp{
                            jumlah[index] * product.price
                        }
                    </div>
                </div>
            ))}
        </div>
            <div className="mx-10 bg-slate-100 rounded-lg shadow-2xl mt-10 p-4 mb-20">
                <h1 className=" mt-3 font-bold text-[24px] ml-5 mb-2">
                    RINCIAN TOTAL HARGA :
                </h1>
                <div className="*:mb-2" >
                    <p className="ml-5 text-[18px]  text-slate-900">
                        Produk A x {jumlah[0]} : {jumlah[0] * products[0].price}
                    </p>
                    <p className="ml-5 text-[18px]  text-slate-900">
                        Produk B x {jumlah[1]} : {jumlah[1] * products[1].price}
                    </p>
                    <p className="ml-5 text-[18px]  text-slate-900">
                        Produk C x {jumlah[2]} : {jumlah[2] * products[2].price}
                    </p>
                </div>
                <div className="border-b-2 border-black mb-4 mt-5">

                </div>
                <div className="bg-slate-300 py-2 rounded-lg px-5 text-[18px] font-bold uppercase">
                    Total Keseluruhan: Rp {
                        jumlah[0] * products[0].price +
                        jumlah[1] * products[1].price +
                        jumlah[2] * products[2].price
                    }
                </div>
            </div>
        </>
    );
}
