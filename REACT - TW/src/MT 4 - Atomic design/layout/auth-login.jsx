import Button from "../componet/button";
import { Footer } from "../Fragments/footer";
import Form from "../Fragments/Form";
import Header from "../Fragments/header";

export default function Auth() {
    return (
        <>
        <div className=" w-1/3 bg-gray-200 px-10 py-20 mt-20 mx-auto rounded-lg shadow-2xl">
         <Header/>

         <div className="mt-14">
        <Form label="Username" input="Fill The Username"   />
         </div>
        
        <Form label="Password" input="Fill The Password"/>
        <Button/>
        <Footer/>
        </div>
       

        </>
    )
}