import React from "react";
import Item from "./Item";
const Box=(props)=>{
    const items = props.data.map(
       
        (singleData,index) => {
            return<Item removeTodo={props.removeTodo} key={index} id={index}
             item={singleData.item} time={singleData.time}/>
        }
    )
    return(
      <>
        {items}
        </>
       
    )
}
export default Box