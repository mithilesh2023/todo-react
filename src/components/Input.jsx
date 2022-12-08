import { AiOutlinePlus } from "react-icons/ai";
import React, { useRef } from "react";
const Input=(props)=>{
    const inputBox=useRef();
    return(
        <>
        <div className="bg-slate-300 w-full justify-between p-3 flex">
    <input className="text-xl border-gray-400 border-2 p-4 w-full flex" placeholder="Enter your items..." ref={inputBox}/>
    <button className="w-20 rounded-full hover:bg-green-700 text-3xl ml-2 flex justify-center items-center text-white bg-rose-400 "
     onClick={()=>
        {
        props.add(inputBox.current.value);
        inputBox.current.value="";
        }}><AiOutlinePlus/></button>

    </div>
        </>
    )
}
export default Input;