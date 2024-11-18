 export default function Conternery({benar,nama}) {
     return (
         <ul>
         { benar ? nama+" true" :nama=="Fadgham" ? "My name is " + nama : nama+" false"}
         </ul>
     )
 }