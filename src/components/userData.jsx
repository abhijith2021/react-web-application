import { useState } from "react";

function Userdata(){
    const [value,setValue]= useState({name:'achu',age:25,sex:'male'})
    return(
        <div>
            {value.name}
            {value.sex}
        </div>
    )
};
export default Userdata;