import React, {useContext} from 'react';
import  {auth} from '../firebase';
import {useHistory} from 'react-router-dom';
import UserContext from '../context/UserContext';

const  Navbar = () =>  {

 let history = useHistory();

 const user = useContext(UserContext);
const logout = async () =>{
 await auth.signOut();
 history.push("/");
}


    return (
      <nav>
<h1 className="title" onClick={()=>{history.push("/")}}> 
{ user.displayName && user.displayName +"'s "} 
  Recipe Book</h1>
<button className="add-new-recipe" onClick={()=> logout()} >Log Out</button>
        
       
      </nav>
    );
  }

export default Navbar;