import { useState } from 'react'

import './App.css'
import { TodoProvider } from './context'
import { useEffect } from 'react'
import TodoForm from './components/TodoForm'
import Todoitem from './components/Todoitem'
function App() {
  const [todos, settodos] = useState([])
  
//add todo---------------------
const addTodo=(todo)=>
{
settodos((prev)=>[{id:Date.now(),...todo},...prev])
}
//update todo---------------------
const updateTodo=(id,todo)=>
  {
  settodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id?todo:prevtodo)))
  }
  //delete todo---------------------
const deleteTodo=(id)=>
  {
  settodos((prev)=>prev.filter((todo)=> todo.id !== id))
  }
//complete todo---------------------
const togglecomple=(id,todo)=>
  {
  settodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id?{...prevtodo,completed: !prevtodo.completed}:prevtodo))
  }
//--------------------------clear all function------------------------

const clearalltodos=()=>
  { 
    if(window.confirm("do you whant to clear all data")) {
      localStorage.clear()

   
   window.location.reload();
  }

    
  }


useEffect(() => {
  
  let todos=JSON.parse(localStorage.getItem("todos"))
  

  if(todos&&  todos.length>0)
  {
   
settodos(todos)

  }
}, [])



useEffect(() => {

 localStorage.setItem("todos",JSON.stringify(todos))
}, [todos])






  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,togglecomple}}>

    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4"  >
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */ }
                      
                 {
                          
                        todos.map((todo)=>{
                      
                    
                       return(
                          <div  key={todo.id} className=' bg-black w-full'>
                           
                                <Todoitem todo={todo}/>   
                          </div>
                       )
                          })}
                    </div>
                </div>
                <button className='bg-[#f02626]  py-1    shadow-md rounded-lg px-3 ml-7  text-white' onClick={clearalltodos}>clear All</button>
  
             
               
            </div>
    </TodoProvider>
  )
}

export default App


