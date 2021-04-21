import React from 'react';
import {Link } from 'react-router-dom';

import { auth } from '../firebase';
import { useState } from 'react'
import {signInWithGoogle} from '../firebase'
import {useHistory} from 'react-router-dom'

const LoginForm = (props) =>{


// const [email,setEmail,password,setPassword,emailError,passwordError] = props;
let history = useHistory();
// const [username,setUsername]= useState("");
const [email, setEmail] = useState("");
const [password,setPassword] = useState("");
const [emailError,setEmailError] = useState("");
const [passwordError,setPasswordError] = useState("");

// const clearInputs = () =>{
//   setEmail('');
//   setPassword('')
// }
const clearErrors = () =>{
  setEmailError("");
  setPasswordError("");
}

 const handleLogin = async (e) =>{
  e.preventDefault();
  clearErrors();
 await auth.signInWithEmailAndPassword(email,password)
  .catch(err => {
    switch(err.code){
      case "auth/invalid-email":
        case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
              default:
              console.log("other problem");
              break;
    }
  })
   history.push("/");
} 
const signIn = async () => {
  await signInWithGoogle();
   history.push("/");
}



    return (
      <div className="container">
     <div className="wrapper">
         <div className="title"><span>Recipe Book</span></div>
         <h3 className="text">Login</h3>
         <div className="button-div">
         <button className="googleBtn" onClick={signIn} > Sign in using google</button>
         </div>
         <h2><span>or log in with your email</span></h2>
         <form onSubmit={handleLogin}>
             {/* <label>Username:</label>
             <input type="text"  value={username} onChange={(e)=>setUsername(e.target.value)}  required></input>
            */}
             <label>Email Address:</label>
             <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="smile@gmail.com" required></input>
           <p>{emailError}</p>
             <label>Password:</label>
             <input type="password"value={password} onChange={(e)=>setPassword(e.target.value)}placeholder="Enter your password" required></input>
             <p>{passwordError}</p>
             <div className="pass" >Forgot password?</div>
             <div className="button-div">
             <button className="loginBtn" type="submit"  > Log In </button>
             </div>
<p>Don't have an account? {" "} 
  <Link to="/signup" >Sign up here</Link>

</p>
      
         </form>
     </div>
     </div>
    )
  
          }
export default LoginForm;