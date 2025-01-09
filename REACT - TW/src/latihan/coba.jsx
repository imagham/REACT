function Message(props) {
    if (props.age < 18) {
        return <h1>You are a minor{props.name}!</h1>;
    } else {
        if (props.age >= 18 && props.age <= 65) {   
            return <h1> You are an adult!</h1>;
        } else {    
            return <h1>You are an senior</h1>;
            
        }
    }
}
function App(params) {
    const person = 25;
    return  <Message  age={person}/>
    
}