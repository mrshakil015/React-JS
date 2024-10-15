import PropTypes from "prop-types";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineLocalFireDepartment } from "react-icons/md";

const Recipe = ({ recipe,handleWantToCook }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <div>
            <div className="rounded-xl border-2 border-gray-200 mx-2">
                <figure className="px-5 pt-5">
                    <img
                        src={recipe_image}
                        alt="Shoes"
                        className="w-full h-[200px] object-cover rounded-xl" />
                </figure>
                <div className="text-left p-5 space-y-4">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description} </p>
                    <hr />
                    <h2 className="text-lg font-medium">Ingredients: {ingredients.length} </h2>
                    <ul className="pl-3">
                        {
                            ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                        }
                    </ul>
                    <hr />
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <p className="mr-2 text-xl"><FaRegClock /></p>
                            <p>{preparing_time} minutes</p>
                        </div>
                        <div className="flex">
                            <p className="mr-2 text-xl"><MdOutlineLocalFireDepartment /></p>
                            <p>{calories}</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button 
                        className="btn bg-[#0BE58A] rounded-full"
                        onClick={()=>handleWantToCook(recipe)}
                        >Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func.isRequired
}

export default Recipe;