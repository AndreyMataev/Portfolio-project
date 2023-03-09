import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {removeTodo, toggleTodo} from "../slices/TodoSlice"
import { useEffect } from "react"
import { fetchTodo } from "../slices/TodoSlice"


const Todo = function(){


  const dispatch = useDispatch();
  const todos  = useSelector(state => state.todo.todos)
  useEffect(()=>{
    dispatch(fetchTodo());
    
  
  },[dispatch])
    
  return(

    <div>
    {
      todos.map((todo)=>{
        let id = todo.id
        return(
          <li 
          key={todo.id}
          className="todo"
              
              style={ todo.completed ? {
                border: "2px solid green",
                boxShadow: "0px 0px 10px green",
                backgroundColor:   "rgba(21, 255, 0, 0.236)"
              }:
              {
                border: "1px solid red",
                boxShadow: "2px 2px 3px red"
              }
              }
                type="text"
             >
              <div className="cont"
              onClick={() => {
                dispatch(toggleTodo({id}))
                
                
              }}
              >{todo.title}</div>
             <button
             onClick={() => 
              {
                
                dispatch(removeTodo({id}))
                
            }}
             >X</button>
             </li>
      )
        
      })
    }
       
           </div>
  )
}

export default Todo















