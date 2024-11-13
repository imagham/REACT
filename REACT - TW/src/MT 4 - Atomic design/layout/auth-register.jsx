import H1 from "../componet/h1";
import H3 from "../componet/h3";
import Form from "../Fragments/Form";
import Button from "../componet/button";
import {Footer} from "../Fragments/footer";



export default function Register() {
    return (
        <div className=" w-1/3 bg-gray-200 px-10 py-20 mt-20 mx-auto rounded-lg shadow-2xl mb-20">
            <H1 params="Register"/>
            <H3 params="Silahkan Registrasi Terlebih Dahulu"/>
            <div className="mt-14"> 
                <Form  label="First Name" input="Fill The First Name"   />
                <Form  label="Last Name" input="Fill The Last Name"   />
                <Form  label="Email" input="Fill The Email"   />
                <Form  label="Username" input="Fill The Username"   />
                <Form  label="Password" input="Fill The Password"   />
                <Button />
                <Footer />
            </div>
        </div>
    )
}