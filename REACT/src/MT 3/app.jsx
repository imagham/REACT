 function ChildComponent({title ='ini judul',description ='ini deskripsi',age=0, ...props}) {
    return(
        <>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{age}</p>
        </>
    )
}
export default function ParentComponent() {
    return(
        <>
        <ChildComponent title="JUDUL" description="ini deskripsi" age='29'/>
        <ChildComponent title="JUDUL" description="ini deskripsi" age='29'/>
        <ChildComponent title="JUDUL" description="ini deskripsi" age='29'/>
        <ChildComponent title="JUDUL" description="ini deskripsi" age='29'/>
        </>
    )   
}
