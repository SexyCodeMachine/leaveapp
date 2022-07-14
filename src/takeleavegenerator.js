import React from "react";
import { useState } from "react";
import axios from "axios";

let exc = "";

const getExcuse = () =>{
    axios.get('https://excuser.herokuapp.com/v1/excuse').then((res)=>{
        return res.data[0].excuse;
    }).then((res2)=>{
        exc = res2;
    });
}

const Leave = (Props) => {
    const [Mentor,setMentor] = useState("");
    const [excuse,setExcuses] = useState(getExcuse());

    let change = (event)=>{
        setMentor(event.target.value);
    }

    const onClick = () => {
        getExcuse();
        setExcuses(exc);
    };

    return(
        <div>
            Mentor's Name: <input type="text" onChange={change} placeholder="something"/>
            <h3>take a Sick leave</h3>
            <div className="leave msg">Hi {Mentor}, i'm not feeling well. Can i take leave today?</div>
            <h3>take a leave (random reason)</h3>
            <button onClick={onClick}>Generate</button>
            <div className="leave msg">Hi {Mentor}, i need to take leave today because {excuse}</div>
        </div>
    );
}

export default Leave;