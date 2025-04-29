import { useState } from "react";

function Formdata(){
    const[formData, setFormData]= useState({username:'',email:'',address:''})
    return(
        <div>
        console.log(formData.name);
        </div>
    )
};
export default Formdata;