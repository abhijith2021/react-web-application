import { useState } from "react";

function ReductionMech(){
    const [color,setColor] = useState("red")
function showColor(){
    setColor("blue")
    console.log(color)
}
    return(
        <div>
            <button onClick={showColor}></button>
        </div>
    )

};
export default ReductionMech;