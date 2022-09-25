import { type } from "@testing-library/user-event/dist/type";
import React, { useContext } from "react";
import {Link,useNavigate } from 'react-router-dom'
import { UserContext } from "../App";
const NavBar = ()=>{
    const {state,dispatch}=useContext(UserContext)
    const navigate=useNavigate()
    const renderList=()=>{
      if(state){
          return [
            <li><Link  to ="/profile">Profile</Link></li>,
            <li><Link to ="/create">Create Post</Link></li>,
            <li><Link to ="/myfollowingpost">My following Posts</Link></li>,
            <li>
              <button className="btn #e53935 red darken-1" onClick={()=>{
                localStorage.clear()
                dispatch({type:"CLEAR"})
                navigate('/signin')
              }} >
                Logout
                </button>
            </li>
          ]
      }
      else{
          return [
            <li><Link to ="/signin">Log in</Link></li>,
            <li><Link to ="/signup">Signup</Link></li>
          ]
      }
    }
    return(
        <nav>
    <div className="nav-wrapper white">
      <a href={state?"/":"/signin"} className="brand-logo left">Instagram</a>
      <ul id="nav-mobile" className="right">
        {renderList()}
        
      </ul>
    </div>
  </nav>
       
    )
}

export default NavBar ;