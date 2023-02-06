import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
const Box = ({ itemList, deleteItem, editBtn }) => {
    // const abc=""
    // const {itemList}=props;
    return (
        <div className=' w-[90%]  mx-auto  rounded-lg '>
            <div className=' p-0'>

                {itemList?.length ?
                    itemList.map((val) => {
                        return (
                            <>
                                <ul className='px-1 py-2 mb-1 flex gap-2 mx-3' key={val.id} >
                                    <li className='w-[79%] p-3 text-2xl border rounded shadow-lg text-white' >{val.itemName}</li>

                                    <button className='w-[9%] rounded-lg px-3 text-3xl bg-green-500 shadow-lg  text-white items-center justify-center' onClick={() => editBtn(val.id)} ><BiEdit /></button>

                                    <button className='w-[9%] rounded-lg px-3 text-3xl bg-red-500 shadow-lg  text-white items-center justify-center' onClick={() => deleteItem(val.id)}><AiFillDelete /></button>

                                </ul>

                            </>
                        )
                    }) : <div className='w-full p-3 text-3xl mb-2 bg-black text-white border rounded'><span>No item to display...</span></div>
                }
            </div>

        </div >
    )
}

export default Box