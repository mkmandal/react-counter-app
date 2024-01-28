import { useState } from "react";


 const BgChangerApp=()=>{

    const [color,setColor]=useState("olive");

   // const colorObj={background:color,height:'100vh'}

    return(

        <div className="w-full h-screen duration-200 height my-5" style={{background:color}}>
            <div className="bg-white">
                <button className="bg-orange-500 mx-1 text-white" onClick={()=>{
                    setColor("orange") 
                 }}>Orange</button>
                 <button className="bg-red-700 mx-1 text-white" onClick={()=>{
                    setColor("red") 
                 }}>Red</button>
                 <button className="bg-green-700 mx-1 text-white" onClick={()=>{
                    setColor("green") 
                 }}>Green</button>
                 <button className="bg-indigo-950 mx-1 text-white" onClick={()=>{
                    setColor("indigo") 
                 }}>Indigo</button>
                 <button className="mx-1 text-white" style={{background:'#0c4a6e'}} onClick={()=>{
                    setColor("olive") 
                 }}>Olive</button>
            </div>
        </div>
       )




}


export default BgChangerApp;