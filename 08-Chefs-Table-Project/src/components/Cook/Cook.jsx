import PropTypes from "prop-types";
import { useState } from "react";
const Cook = ({ wantCook }) => {
    const [currentlyCooking, setCurrentlyCooking] = useState([]);

    const handleToCooking = cookingrecipe => {
        console.log('Currently cooking');
        console.log(cookingrecipe)
        const newCooking = [...currentlyCooking, cookingrecipe]
        setCurrentlyCooking(newCooking)
    }

    const totalCalories = currentlyCooking.reduce((acc, recipe) => acc + recipe.calories, 0);
    const totaltimes = currentlyCooking.reduce((acc, recipe) => acc + recipe.preparing_time, 0)
    return (
        <div className="border-2 border-gray-200 rounded-xl">
            <div className="p-3">
                <h1 className="text-2xl font-semibold mt-4 mb-2">Want to Cook: {wantCook.length}</h1>
                <hr />
                <div className="overflow-x-auto mt-3">
                    {wantCook.length === 0 ? (
                        <h2>There is no recipes for cook.</h2>
                    ) : (
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {wantCook.map((recipe, idx) => (
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>{recipe.recipe_name}</td>
                                        <td>{recipe.preparing_time} minutes</td>
                                        <td>{recipe.calories} calories</td>
                                        <td>
                                            <button
                                                className="btn bg-[#0BE58A] rounded-full"
                                                onClick={() => handleToCooking(recipe)}
                                            >
                                                Preparing
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

            </div>
            <div>
                <h1 className="text-2xl font-semibold mt-4 mb-2">Currently Cooking: {currentlyCooking.length} </h1>
                <hr />
                <div className="overflow-x-auto mt-3">
                    {
                        currentlyCooking.length === 0 ? (
                            <h2>Currently Cooking recipes not available.</h2>
                        ) : (
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentlyCooking.map((recipe, idx) => (
                                        <tr key={idx}>
                                            <td>{idx + 1}</td>
                                            <td>{recipe.recipe_name}</td>
                                            <td>{recipe.preparing_time} minutes</td>
                                            <td>{recipe.calories} calories</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )
                    }

                    {/* Calculate total calories */}

                    <div className="flex justify-between p-4">
                        <strong>Total Time: {totaltimes} minutes</strong>
                        <strong>Total Calories: {totalCalories} calories</strong>
                    </div>
                </div>

            </div>
        </div>
    );
};

Cook.propTypes = {
    wantCook: PropTypes.object.isRequired,
}

export default Cook;