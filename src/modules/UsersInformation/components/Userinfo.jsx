import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

import { useState } from "react"
import { fetchUsersInfo } from "../Slices/UserInfoSlice"
const Userinfo = function({id}){

   
  const [active, setActive] = useState(0);

    
    
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchUsersInfo(id));
        
  },  [dispatch]);
      
    

      const albums = useSelector(state => state.userinfo.albums)
      const todos = useSelector(state => state.userinfo.todos)
      const posts = useSelector(state => state.userinfo.posts)
      const user = useSelector(state => state.userinfo.user)
      
      
    
    
    const activeInfo = (num) => {
        if(num == active){
            setActive(0)
        }else{
            setActive(num)
        }
        
    }

    



    return(
        <div className="contentt">
            <h1>{user.name}</h1>
            <div className="user__data">
            
            
            
                <div className="user-data"> 
                <FontAwesomeIcon icon={faEnvelope} />
                    <div className="info"> <span>Email:</span><br /> {user.email}</div>
               </div>
                <div className="user-data">
                <FontAwesomeIcon icon={faPhone} />
                <div className="info"><span>Phone number:</span> <br />{user.phone}</div>
                    </div>
                <div className="user-data">
                <FontAwesomeIcon icon={faLocationDot} />
                <div className="info"><span>Website:</span> <br /> {user.website}</div>
                     </div>

                     <div className="tab">
                        <div className="tab__nav">
                            <div style={ active === 1  ? {boxShadow: '1px 1px 10px rgba(42, 189, 26, 0.73)'} : {boxShadow: '1px 1px 10px rgba(6, 36, 233, 0.227)'}} className="nav__elem" onClick={()=>activeInfo(1)}>Album</div>
                            <div style={ active === 2 ? {boxShadow: '1px 1px 10px rgba(42, 189, 26, 0.73)'} : {boxShadow: '1px 1px 10px rgba(6, 36, 233, 0.227)'}} className="nav__elem" onClick={()=>activeInfo(2)}>Post</div>
                            <div style={ active === 3 ? {boxShadow: '1px 1px 10px rgba(42, 189, 26, 0.73)'} : {boxShadow: '1px 1px 10px rgba(6, 36, 233, 0.227)'}} className="nav__elem" onClick={()=>activeInfo(3)}>Todo</div>
                        </div>
                        <div className="users__container">
                            
                      
                                {
                                    
                                        albums.map((album) =>{
                                            return(

                                                <div className={active === 1 ? "containers__cell" : "containers__cell unabled"} key={album.title}>
                                                    <p>{album.title}</p> 
                                                </div>
                                            )
                                        })
                                        
                                        
                                }
                                {
                                        
                                        todos.map((todo) =>{
                                            return(
                                                <div
                                                 key={todo.title}
                                                 className={active === 3 ? "containers__cell" : "containers__cell unabled"} 
                                                style={ todo.completed ? {
                                                    
                                                    boxShadow: "0px 0px 10px green",
                                                    
                                                    textDecoration: "line-through"
                                                  }:
                                                  {
                                                    
                                                    boxShadow: "0.5px 0.5px 5px red"
                                                  }
                                                  } 
                                                  
                                               >
                                                    {todo.title}
                                                    
                                                </div>
                                            )
                                        })
                                    
}
{
                                        posts.map((post) =>{
                                            return(
                                                <div  className={active === 2 ? "containers__cell" : "containers__cell unabled"} key={post.title}>
                                                    {post.title}
                                                </div>
                                            )
                                        })
                                    
                                 }
                            
                        
                            </div>
                            </div>
                     </div>
                <Link className='ink' to="/userlist/users">Back to user list</Link> 
           </div> 
           
            
        
    )
}
export default Userinfo





