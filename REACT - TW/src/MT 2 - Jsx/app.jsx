export default
 function App() {
    const title = "coba JSX{}"; 
    const paragraf = "lorem ipsum dolor sit amet";
    const tema ={
        paragraf:{
            backgroundColor:"red",
            color:"white"
        }
    } 
    return (
        <>
            <h1 style={{color: "red"}}>{title}</h1>
            <p className="testing" style={tema.paragraf}>
                {paragraf}
            </p>
        </>
    )
}
