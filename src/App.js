import { useState } from 'react';
import './App.css';
import Box from './components/Box';
import uuid from 'react-uuid'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const[toggleBtn,setToggleBtn]=useState(false)
  const[itemId,setItemId]=useState()

  const changeHandler = (e) => {
    setItem(e.target.value)
  }
  const addItem = () => {
    if(toggleBtn){
      const newList=itemList.map((todo)=>{
        if(todo.id===itemId){
          return {...todo,itemName:item}
        }
        return todo;
      })
       setItemList(newList)
       setToggleBtn(false)
       setItem("")
       setItemId()
      toast.info("Item updated successfully");

    }else{
      const itemObj = { id: uuid(), itemName: item }
      setItemList((prevItem) => [...prevItem, itemObj])
      setItem("");
      toast.success("Item added successfully");
    }
  }
  const deleteItem=(id)=>{
    // console.log(e)
    const filterItem=itemList.filter((value)=>{
      return value.id !== id
    })
    setItemList(filterItem)
    toast.error("Item deleted successfully");

  }
  const deleteAll=()=>{
    setItemList([])
    toast.error("All items deleted");

  }
  const editBtn=(id)=>{
    const addTodo=itemList.find((todo)=>{
      return todo.id===id;
    })
    // console.log('id',id)
    setItem(addTodo.itemName)
    setToggleBtn(true)
    setItemId(id)
    // setItem("")
  }
  return (
    <div className='bg-slate-700 h-screen'>

      <div className=' w-[55%] py-1  mx-auto rounded-lg bg-black'>
        <div className='flex gap-2 py-3 px-2 w-full mx-auto'>
          <input className='w-[90%] border px-2 rounded shadow-lg text-2xl' type="text" placeholder='Add Todo...' value={item} onChange={changeHandler}></input>

          <button className=' rounded-lg py-2 px-3 w-[20%]   bg-green-500 shadow-lg text-xl  text-white justify-center items-center' onClick={addItem} disabled={item.length <=2 ? true : false} 
           >{toggleBtn?"update":"add item"}<ToastContainer theme="colored"/></button>

          <button className='w-[20%] rounded-lg py-3 px-2 bg-red-500 shadow-lg text-xl text-white items-center' onClick={()=>deleteAll()}>Del All</button>

        </div>
        <div>
        <Box itemList={itemList} deleteItem={deleteItem} editBtn={editBtn} />
      </div>
      </div>
     
    </div>
  );
}

export default App;
