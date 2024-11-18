function Logical({nama,benar,isChecklist}) {
    if (benar) {
        return <li>{nama} true</li>
       }else if (isChecklist) {
        return <li>{nama}✅</li>
       }else
        return <li>{nama} false</li>
   
}

export default function And() {
    return (
        <ul>
            <Logical nama="satu" benar={true} isChecklist={true}/>
            <Logical nama="dua" benar={false} isChecklist={true}/>
            <Logical nama="tiga" benar={true} isChecklist={false}/>
        </ul>
    )
}
