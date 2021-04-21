import React,{useState} from 'react';
import {Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import {signInWithGoogle} from '../firebase'
import { auth } from '../firebase';


 const SignUp = () => {
   
 let history = useHistory();

//  const [username,setUsername] = useState("");
const [email, setEmail] = useState("");
const [password,setPassword] = useState("");
const [emailError,setEmailError] = useState("");
const [passwordError,setPasswordError] = useState("");


const clearErrors = () =>{
  setEmailError("");
  setPasswordError("");
}



const signIn = async () => {
  await signInWithGoogle();
   history.push("/");
}

const handleSignup = (e) =>{
e.preventDefault();
  clearErrors();
   auth.createUserWithEmailAndPassword(email,password)

  .catch(err => {
    switch(err.code){
      case "auth/email-already-in-use":
        case "auth/invalid-email":
            setEmailError(err.message);
            break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
               default:
              console.log("other problem");
              break;
    }
  })
  
}


    return (
   <>
   
 <div className="container">
      <div className="wrapper">
         <div className="title"><span>Sign Up</span></div>
         <form onSubmit={handleSignup}>
               {/* <label>Username:</label> 
             <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required></input>  */}
             <label>Email Address:</label>
             <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="smile@gmail.com" required></input>
             <p>{emailError}</p>
             <label>Password:</label>
             <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter your password" required></input>
             <p>{passwordError}</p>
             <div className="button-div">
             <button className="signUpBtn"  type="submit" > Create Account </button>
             <p>or</p>
               <div className="button-div">
         <button className="signUpGoogle" onClick={signIn}> Sign in using google</button>
         </div>
             </div>

       <p>Already have an account? {" "} <Link to="/">Log in</Link> </p>

         </form>
     </div>
     </div>
</>
    )
  }
 
  export default SignUp;