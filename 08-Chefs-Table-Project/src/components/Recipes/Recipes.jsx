import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = () => {
    // fetch data from the json file
    const [recipe, setRecipe] = useState([]);
    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipe(data))
    },[])
    return (
        <div className="max-w-6xl mx-auto mt-20 text-center mb-20">
            <div className="recipes-head px-5 lg:px-40">
                <h1 className="text-4xl font-bold text-center">Our Recipes</h1>
                <p className="py-6">
                    Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.
                </p>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-between mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 recipes-container">
                    {
                        recipe.map(recipe => <Recipe
                        key={recipe.recipe_id}
                        recipe={recipe}
                        ></Recipe>)
                    }
                </div>
                <div className="w-1/2">
                    <h1>Side container</h1>
                </div>
            </div>
        </div>
    );
};

export default Recipes;