
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Navbar from "./navbar";
import RecipeList from "./recipe-list";
import UpdateRecipe from "./update-recipe";
import LoginForm from './loginForm';
import SignUp from './signUp';
import CreateRecipe from './create-recipe';

import UserContext from '../context/UserContext';
import { useContext } from 'react';

const Router = () =>{

    const user = useContext(UserContext)
    
    return (
  user ? (
<BrowserRouter> 
     <Navbar />
     <Switch>
   <Route exact path="/"> <RecipeList /></Route>
   <Route exact path="/create"> <CreateRecipe/> </Route>
   <Route exact path="/updaterecipe/:id"> <UpdateRecipe/> </Route>
</Switch>
</BrowserRouter>
)
:
(

<BrowserRouter>
   <Switch> 
  <Route exact path="/"> <LoginForm /> </Route> 
  <Route exact path="/signup" > <SignUp/> </Route>
  {/* <PasswordReset path = "passwordReset" /> */}
 


</Switch>
</BrowserRouter>
   )  
    
    )}

    export default Router;

    //1:09:40