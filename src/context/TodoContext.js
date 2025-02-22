import { createContext,useContext } from "react";
export  const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"messenge",
            completed:false
        }
    ],
    addTodo:(todo)=>  {},
    updateTodo:(id,todo)=>  {},
    deleteTodo:(id)=>  {},
    togglecomple:(id)=>{}


});


export const TodoProvider=TodoContext.Provider

export  const useTodo=()=>
{
return useContext(TodoContext)
}