import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cook from "../Cook/Cook";


const Recipes = () => {
    // fetch data from the json file
    const [recipes, setRecipe] = useState([]);
    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipe(data))
    },[])

    const [wantCook, setWantCook] = useState([]);

    const handleWantToCook = recipe =>{
        console.log('Recipe info will be added');
        const newWantCook = [...wantCook, recipe]
        setWantCook(newWantCook)
    }

    return (
        <div className="max-w-7xl mx-auto mt-20 text-center mb-20">
            <div className="recipes-head px-5 lg:px-40">
                <h1 className="text-4xl font-bold text-center">Our Recipes</h1>

                <p className="py-6">
                    Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.
                </p>
            </div>
            
            <div className="flex flex-col gap-6 lg:flex-row justify-between mt-5">
                <div className="lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-3 recipes-container">
                    {
                        recipes.map(recipe => <Recipe
                        key={recipe.recipe_id}
                        recipe={recipe}
                        handleWantToCook = {handleWantToCook}
                        ></Recipe>)
                    }
                </div>
                <div className="lg:w-2/5">
                    <Cook
                        wantCook={wantCook}
                    ></Cook>
                    
                </div>
            </div>
        </div>
    );
};

export default Recipes;