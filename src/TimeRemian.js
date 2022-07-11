import { useEffect, useState } from "react";
 
function TimeRemain() {
 const [ttl, setTTL] = useState("loading...");
 useEffect(()=>{
   setInterval(() => {
     var time = new Date('July '+new Date().getDate().toString()+', 2022, 17:45:00 UTC+8') - new Date();
     var msec = time;
     var hh = Math.floor(msec / 1000 / 60 / 60);
     msec -= hh * 1000 * 60 * 60;
     var mm = Math.floor(msec / 1000 / 60);
     msec -= mm * 1000 * 60;
     var ss = Math.floor(msec / 1000);
     msec -= ss * 1000;
     var diff = hh.toString()+" hours "+mm.toString()+" minutes "+ss.toString() + " seconds.";
     if(hh<0) 
      setTTL("收工了, 請勿OT");
     else 
      setTTL(diff);
   }, 1000);
 });
 
 return (
     <h1>
        收工 time remain:
       <div className="time">{ttl}</div>
     </h1>
 );
}

export default TimeRemain;