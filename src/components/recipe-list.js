import React, { useContext } from 'react';
import {firestore} from '../firebase';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import RecipeItem from './recipeItem';
import UserContext from '../context/UserContext';



const RecipeList = () => {



  let history = useHistory();
const [recipes,setRecipes] = useState([]);

const user = useContext(UserContext);

useEffect(()=>{
const getRecipes = async () =>{
  const recipeCollection = await firestore.collection("users").doc(user.uid).collection("recipes").get();
  setRecipes(recipeCollection.docs)
}
getRecipes();

},[user])




const renderRecipes = () =>{
 return recipes.map((recipe, i) =>{
   const recipeData = recipe.data();
    return <RecipeItem recipeData={recipeData} key={i} id={recipe.id} recipe={recipe}/>
 })
 
}




    return (
      //container
      <section >
        <div className="recipes-container">

  {renderRecipes()}

        </div>
        

      
         <div className="button-div"> 
{/* <button className="add-new-recipe" onClick={togglePopup}>Add a new Recipe</button> */}
<button value="addRecipe" className="add-new-recipe" onClick={()=>{
  history.push("/create")
}}>Add a new Recipe</button>



</div>
{/* 
  {isOpen && <Popup
      content={<>
       <Recipe/>
      </>}
      handleClose={togglePopup}
    />} */}

      </section>
    )
  }

export default RecipeList;