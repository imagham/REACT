// no 1
function Greating({name,maessage}) {
    return (
        <>
            <h1>{name}</h1>
            <p>{maessage}</p>   
        </>
    );
}
export default function Aplikasi() {
    return (
        <>
        <Test>
        <Greating name="Alice" maessage="Welcome to React!"/>
        </Test>
        <App>
            
        </App>
        </>
    )
}
// no 2
function UserProfile({username="jhondoe",age=25,location="New York",...props}) {
    return (
        <>
        <h1>{username}</h1>
        <p>{age}</p>
        <p style={{fontSize:"20px"}}>{location}</p>
        </>
    )
}
function App() {
    return (
        <>
        <UserProfile username="John" age="25" location="New York"/>
        <UserProfile username="jhon" age="25" location="New York"/>
        </>
    )
}
function Test({children}) {
    return (
        <>
        {children}
        </>
    )
    
}