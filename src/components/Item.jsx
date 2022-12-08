import React, { useState } from "react";
import {BiTrash} from "react-icons/bi";
const Item=(props)=>{
    const[done,setDone]=useState(false);
    return(
        
    <div className="bg-slate-400  w-full">
         <ul>
        <li className="w-full  p-4 cursor-pointer  border-teal-100  border-2 hover:bg-rose-300 flex justify-between  items-center">
           <div onClick={()=>setDone(!done)}>
                <span className="text-sm mr-5">{props.time}</span>
                <span className={`${done===true ? 'line-through':''} text-2xl text-blue-900`}>
                     {props.item}</span>
           </div>
           <div onClick={()=> props.removeTodo(props.id)} className="text-red-900 text-2xl"><BiTrash/></div>
        </li>
        </ul>
        </div>
       
    )
}
export default Item