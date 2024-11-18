function Jsx({nama, pesan}) {
  let kalimat = nama;
  if (pesan) {
    kalimat = nama + "✅";
  }else if(!pesan){
    kalimat = nama + "❌";
  }
  return (
    <li className="item">
    {kalimat}
    </li>
  );
}
export default function KotakPesan(params) {
    return(
    <section className="w-1/3 bg-gray-200 px-10 py-20 mt-20 mx-auto rounded-lg shadow-2xl mb-20">
        <h1 className="text-[30px]  font-bold text-slate-700 text-center  py-4  bg-slate-300 rounded-lg uppercase " >
            Kotak Pesan Umum
        </h1>
        <ul className="mt-10 text-[20px] text-center">
           <Jsx
           pesan={true}
           nama="Jangan lupa bersyukur"
        />
         <Jsx
           pesan={false}
           nama="Ingatlah Allah"
        />
         <Jsx
           pesan={true}
           nama="Jadilah lebih baik dari hari ini"
        />
        </ul>
    </section>

    )
}