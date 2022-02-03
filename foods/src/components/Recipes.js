import React from 'react'

function Recipes(props) {
    return (
        <div id="div1">
        <div class="row">{ 
            props.recipes.map(recipe=>(
                <div class="col-md-3">
                    <div class="card py-2 ">
                        <img src={recipe.recipe.image} className="img-fluid w-60 mx-auto"/>
                        <div class="card-body">
                            <h3>{recipe.recipe.label}</h3>
                        </div>
                        <ul class="list-group list-group-flush">
                            {recipe.recipe.ingredientLines.map(ingredient=>( 
                                <li className="list-group-item">{ingredient}</li>))}
                            
                        </ul>
                    </div>
                </div>
            ))
            }
        </div>
        </div>
    )
}
export default Recipes;