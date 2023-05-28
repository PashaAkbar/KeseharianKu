import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
function Todo() {
    const [value, setValue] = useState('')
    const [toDo, setTodo] = useState([])
    // const obj = [{
    //     id:uuidv4(), task:value, completed:false, isEditing:false
    // }]



    const handleSubmit = ((e)=>{
        e.preventDefault()
        // console.log(value)
        setTodo([...toDo,{id:uuidv4(), task:value, completed:false, isEditing:false}])
        console.log(toDo)

    })
    const handleValue = ((e)=>{
        setValue(e.target.value)
        
    })

    const deleteToDo = (id) => {
        setTodo(toDo.filter(todo => todo.id !== id))
    }

    const completeTodo = (id) => {
        setTodo(toDo.map(todo => todo.id === id ?{
            ...todo, completed: !todo.completed}:todo))
    }



  return (
    <div className='container justify-center font-nunito pt-4 mx-auto '>
        <div className="w-1/2 mx-auto rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
            <h1 className='text-lg py-2 font-semibold  md:text-4xl text-white/80'>KeseharianKu</h1>
            <h2 className='text-base py-2 font-medium  md:text-2xl text-white/80'>A Simple To Do List Website</h2>
            <form action="" className='flex flex-wrap justify-center mb-3' onSubmit={handleSubmit}>
                <input type="text" onChange={handleValue} className=' border-solid border-2 border-sky-500 rounded-md  backdrop-opacity-0 px-4' placeholder='Masukkan task anda hari ini' />
                <button type='submit' className=' ml-2 bg-gradient-to-r from-sky-500 to-sky-400 rounded-md px-4 hover:from-sky-600 hover:to-sky-500 text-white/80' >Tambah</button>
            </form>
            <div className='flex flex-col w-3/4 mx-auto pb-4'>
                {
                    toDo.map((todo,index)=>(
                        <div className='flex flex-row justify-between items-center my-1 bg-gradient-to-r from-sky-500 to-sky-400 w-full rounded-md text-white/80'>
                            <p className={`cursor-pointer text-left p-4 text-2xl ${todo.completed ? 'line-through' : 'no-underline'}`} onClick={()=>completeTodo(todo.id)}>{todo.task}</p>
                            <div className='icon '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 self-center pr-3" onClick={()=>deleteToDo(todo.id)}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
  
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Todo