import React from 'react'
import { useDispatch } from "react-redux"
import { addTodo } from '../slices/TodoSlice';
import {useForm} from "react-hook-form"


const Todoform = function(){

    const {register, handleSubmit} = useForm();
    
    
    const dispatch = useDispatch();
    const onSubmit = (data) => {dispatch(addTodo(data.todo))};
    const onError = (err) =>{
        console.log(err)
    }

    return (
        <div className="">
           
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <input 
                {...register("todo", {required : true})}
                
                className='inputt'
                 placeholder='Enter something'></input>
                <button >Add</button>
                
                   
                    
                
                
               
            </form>
            
        </div>
      
    )
  
}


export default Todoform

