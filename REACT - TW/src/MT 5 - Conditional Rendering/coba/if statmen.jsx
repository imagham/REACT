function Coba({nama,benar,...props}) {
   if (benar) {
    return <li>{nama} true</li>
   }else{
    return <li>{nama} false</li>
   }
}

export default function Conditional() {
    return (
        <ul>
            <Coba nama="satu" benar={true}/>
            <Coba nama="dua" benar={false}/>
            <Coba nama="tiga" benar={true}/>
        </ul>
    )
}