import React from "react"
import Userinfo from "../../UsersInformation/components/Userinfo"
import Users from "./Users"
import { useEffect } from "react"
import { fetchUser } from "../slices/userSlisce"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



const UserFetching = function(){

    const array =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
   

    return(
        <div className="">
          
          
             
                <div>
                  <Route path='/userlist/users'>
                <Users
                />
                </Route>
                

                {
                  array.map((id) => {
                    
                    return(
                      <Route path={`/userlist/userinfo/${id}`} key={id}> 
                    
                    
                    
                <Userinfo
                id={id}
                key={id}/> 
                </Route>
                    )
                    
                  })
                }
                
                </div>
              
            
        </div>
    )
}

export default UserFetching