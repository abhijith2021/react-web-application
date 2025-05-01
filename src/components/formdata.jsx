import { useState } from "react";

function ShowData(){
    const[data, setData]= useState({username:'',email:'',address:''});
    const changeValue = (e)=>{
        setData(e.target.value)
        console.log(data)
    }
    return(
        <div>
            <form action="">
                <input type="text"  name="username" value={data?.username} onChange={changeValue}/>
                <input type="text" name="email" id="" />
                {/* <button onClick={}></button> */}
            </form>
        </div>
        )
}

export default ShowData;