import React from 'react';
import  {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom'
import { firestore } from '../firebase';
import UserContext from '../context/UserContext';

const  CreateRecipe  = () => {

let history = useHistory();


const [name,setName] = useState("");
const [description,setDescription] = useState("");
const [ingredients,setIngredients] = useState([]);
const [instructions,setInstructions] = useState("");
const [mealType,setMealType] = useState("");

const onChangeName=(e)=>{
setName(e.target.value);
}
const onChangeDescription=(e)=>{
setDescription(e.target.value);
}
const onChangeInstructions=(e)=>{
setInstructions(e.target.value);
}
const onChangeMealType=(e)=>{
setMealType(e.target.value);
}
const onChangeIngredients=(e)=>{
setIngredients(e.target.value);

}


const user = useContext(UserContext);
 const saveRecipe = async (e) =>{
   e.preventDefault();
   const ingredientsArray = ingredients.split(",");
   
await firestore.collection("users").doc(user.uid).collection("recipes").add({
  name,
  description,
  ingredients:ingredientsArray,
  instructions,
  mealType,

})
setName("");
setDescription("");
setIngredients("");
setInstructions("");
setMealType("");
console.log("recipe Added!");
history.push("/");
 }

    return (

<div className="add-recipe-con">
<div className="con">
   <div className="title">Add Recipe</div>
   <form >
     <div className="recipe-details">
       <div className="input-box">
         <span className="details">Name</span>
         <input type="text" value={name}  onChange={onChangeName}></input> 
       </div>
         <div className="input-box">
         {/* <div> */}
         <span className="details">Ingredients</span>
          <textarea value={ingredients}  onChange={onChangeIngredients} placeholder="separate each ingredient by a comma"></textarea>
       </div>
  
      
        <div className="text-box">
         <span className="details">Description</span>
         <textarea value={description}  onChange={onChangeDescription}></textarea>
       </div>
      
       <div className="text-box">
         <span className="details">Instructions</span>
         <textarea value={instructions}  onChange={onChangeInstructions}></textarea>
       </div>
       <div className="meal-box">
         <span className="meal-details">Meal Type</span>
          <select onChange={onChangeMealType} value={mealType}>
            <option defaultValue disabled>Meal Type</option>
               <option value="Breakfast" >
                  Breakfast </option>     
  <option value="Lunch" >Lunch</option>
 <option value="Dinner" >Dinner</option>
</select>
       </div>
       
     </div>
     <div className="add-recipe-button" onClick={saveRecipe}>
       <input type="submit" value="Add Recipe"></input>
     </div>
   </form>

  
   </div>
   </div>
      
    )


  }

export default CreateRecipe;


