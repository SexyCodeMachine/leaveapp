import React from "react";
import { useState } from "react";


const Leave = (Props) => {
    const [Mentor,setMentor] = useState("Cartus");

    let change = (event)=>{
        setMentor(event.target.value);
    }
    return(
        <div>
            Mentor's Name: <input type="text" onChange={change} placeholder="something"/>
            <p></p>
            <div className="leave msg">Hi {Mentor}, i'm not feeling wel. Can i take leave today?</div>
        </div>
    );
}

export default Leave;