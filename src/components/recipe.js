import React from 'react'


 const Recipe = ({title,ingredients,instructions}) => {


 const ingredientsList =  ingredients.map((ingredient,i)=>(
    <li key={i}>{ingredient}</li>
 ))
    return (
        <div className="recipe-page">
            <div className="recipe-contents" >

           
            <h1 className="title">{title}</h1>

 <h2><span>Ingredients</span></h2>
           <ol>
              {ingredientsList}
           </ol>
      <h2><span>Instructions</span></h2>
           <p>{instructions}</p>
            </div>
        </div>
    )
}

export default Recipe;