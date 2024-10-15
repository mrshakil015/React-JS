const Cook = () => {
    return (
        <div className="border-2 border-gray-200 rounded-xl">
            <div className="p-3">
                <h1 className="text-2xl font-semibold mt-4 mb-2">Want to Cook:</h1>
                <hr />
                <div className="overflow-x-auto mt-3">
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
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Grilled Chicken with Basil</td>
                                <td>30 minutes</td>
                                <td>320 calories</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-semibold mt-4 mb-2">Currently Cooking:</h1>
                <hr />
                <div className="overflow-x-auto mt-3">
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
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Grilled Chicken with Basil</td>
                                <td>30 minutes</td>
                                <td>320 calories</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Cook;