import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../slices/userSlisce';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const Users = function(){


  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users)

  

  useEffect(()=>{
    dispatch(fetchUser())
  }, [dispatch])

    
   
    
  return(
    <div className="">
    {
      users.map((info) =>{
        return(
          <div className='cell' key={info.id}>
    <div className="data">
      <div className="namme"><span>Name:</span> {info.name}</div>
      <div className="usernamme"> <span>Username:</span> {info.username}</div>
    </div>
    <Link  className='ink' to={`/userlist/userinfo/${info.id}`}>See more</Link>
    
      </div>
        )
      })
    }
    </div>
    
      
     
  )
}

export default Users