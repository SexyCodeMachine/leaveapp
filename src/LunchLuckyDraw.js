import {useState} from "react"
import axios from "axios";
import './App.css';
import './eat.json'

let lun = [];

axios.get('http://10.0.1.71:3002/').then((res)=>{
    return [...res.data.name];
}).then((res2)=>{
    lun = [...res2]
});
//new line 2
//let lun = require('./eat.json');

const Draw = () => {
    const lunch= [...lun];
    //const lunch = ["G04","Mcdonald","tamjai","丸龜","米線"];
    const [num,setNum] = useState(0);

    const draw = () => {
        setNum(Math.round(Math.random() * 4));
    }
    return (
        <>
        <div className="display"> { lunch[num] } </div>
        <div className="btn">
            <button onClick={draw}> random draw for lunch </button>
        </div>
        </>
    );
}
export default Draw;