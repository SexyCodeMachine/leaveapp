import React from "react";
import { useEffect, useRef } from "react";

function Clock() {
 const canv = useRef(null);
 
 useEffect(() => {
   timeset();
 });
 
 const timeset = () => {
   const check = (i, j, k) => {
     const takemins = (m) => {
       return (90 - m * 6);
     };
     const takeh = (m,n) => {
        return (90 - m * 30 )+(n/2) ;
      };
 
     var ctx = canv.current.getContext("2d");
     var hrs = takeh(i,j);
     var mins = takemins(j);
     var sec = takemins(k);
     ctx.clearRect(0, 0, 300, 300);
 
     ctx.beginPath();
     ctx.arc(150, 150, 3, 0, 2 * Math.PI);
     ctx.fill();
     ctx.moveTo(290, 150);
     ctx.arc(150, 150, 140, 0, 2 * Math.PI);
     ctx.stroke();
 
     ctx.beginPath();
     ctx.lineWidth = 3;
     ctx.moveTo(150, 150);
     ctx.lineTo(
       150 + 50 * Math.cos((hrs * Math.PI) / 180),
       150 - 50 * Math.sin((hrs * Math.PI) / 180)
     );
     ctx.stroke();
 
     ctx.beginPath();
     ctx.lineWidth = 2;
     ctx.moveTo(150, 150);
     ctx.lineTo(
       150 + 100 * Math.cos((mins * Math.PI) / 180),
       150 - 100 * Math.sin((mins * Math.PI) / 180)
     );
     ctx.stroke();
 
     ctx.beginPath();
     ctx.lineWidth = 1;
     ctx.moveTo(150, 150);
     ctx.lineTo(
       150 + 120 * Math.cos((sec * Math.PI) / 180),
       150 - 120 * Math.sin((sec * Math.PI) / 180)
     );
     ctx.stroke();
   };
 
   setInterval(() => {
     const time = new Date();
     check(
       parseInt(time.getHours().toString()),
       parseInt(time.getMinutes().toString()),
       parseInt(time.getSeconds().toString())
     );
   }, 1000);
 };
 
 return (
   <div className="App">
     <h1>Current Time</h1>
     <canvas ref={canv} id="myCanvas" width="300" height="300"></canvas>
   </div>
 );
}

 
export default Clock;