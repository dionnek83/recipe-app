import React from 'react'
import {useState,useContext} from 'react';
import Popup from './popup';
import Recipe from './recipe'
import {useHistory} from 'react-router-dom'
import { firestore } from '../firebase';
import UserContext from '../context/UserContext';

const RecipeItem = ({recipeData,id}) => {




const user = useContext(UserContext);


  const deleteRecipe = async () =>{
    await firestore.collection("users").doc(user.uid).collection("recipes").doc(id).delete();
      console.log("Recipe Deleted!");
     window.location.reload();
  }


let history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

      
    return (


          <div className="recipe" >
            <div className="title-container">
            <h3 className="recipe-title">{recipeData.name}</h3>
            <p className="mealtype">{recipeData.mealType}</p>
            </div>
            
            <p className="description">{recipeData.description}</p>
          <div className="buttons-container">
          <button className="deleteBtn" onClick={deleteRecipe}>Delete</button>
          <button className="updateBtn" onClick={() => history.push(`/updaterecipe/${id}`)}> 
            Update
          </button>
               
               
               
          <button className="ViewBtn" onClick={togglePopup}>View
          </button>
          </div>
         { isOpen && <Popup
      content={<>
     
         <Recipe id={id} title={recipeData.name} ingredients={recipeData.ingredients} instructions={recipeData.instructions}/>
      </>}
      handleClose={togglePopup}
    />}
          </div>
    )
}


  

     
  
 


export default RecipeItem
