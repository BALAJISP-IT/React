import { useState } from "react";
import './switch.css'
export default function Switch()
{
    let [count,setCount]=useState(0);
   return(
    <>
        <h1 style={{textAlign:"center"}}>Counter</h1>
        <hr/>
        <h1 style={{textAlign:"center"}}>{count}</h1>
        <div style={{marginLeft:"45%"}}>
        <button onClick={()=>{
            setCount(++count);
        }}>Increase</button>
        <button onClick={()=>{
            setCount(--count);
        }}>Decrease</button>
        </div>
    </>
   )
}