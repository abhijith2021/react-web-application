import { useState } from "react";

function Counter(){
    const[age,setAge] = useState(0);
    const[name,setName] = useState(['achu','abhi','razeen']);
    const[details,setDetails] = useState({address:'karamana',place:'tvm'});
    return(
        <div>
            {age},
            {details.place},
            {name}
            <button onClick={showAge}>
            click</button></div>
    )
    
}

function showAge(){
    setAge(age+1);
    
};
export default Counter;