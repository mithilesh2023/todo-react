import './App.css';
import React, { useState } from 'react';
import Footer from "./components/Footer";
import Input from "./components/Input";
import Box from './components/Box';
function App() {
  const[todo,setTodo]=useState([]);

const removeAdd=(id)=>{
    const newData = todo.filter(
      (id,index)=>{
        if (index !==id){
          return true;
        }else{
          return false;
        }
    })
    setTodo(newData)
}
 const addtodo = (item)=>{
    // console.log(item);
    setTodo([
      ...todo,
      {
        item,time:new Date().toLocaleTimeString()
      }
    ])
  }
  console.log(todo);
  return (
    <div className='App'>
    <div className="bg-gray-600 border-2 w-2/5 border-gray-700 rounded mt-2 border-solid mx-auto">
        <h1 className="text-white text-4xl p-3">Todo List</h1>
        <Input add={addtodo}/>
        <Box data={todo} removeTodo={removeAdd}/>
        <Footer/>
   </div>
    </div>
  );
}

export default App;
