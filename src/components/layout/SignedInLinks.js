import React from 'react';
import { NavLink } from 'react-router-dom';
 
const SignedInLinks= () => {
    return(
       <ul className="right hide-on-med-and-down">
           <li><NavLink to="/createresume" >Create Resume</NavLink></li>
           <li><NavLink to="/" >Log out</NavLink></li>
           <li><NavLink to="/" className="btn-floating purple accent-3 btn-small waves-effect ">MA</NavLink></li>
       </ul>
    )
}
export default SignedInLinks;