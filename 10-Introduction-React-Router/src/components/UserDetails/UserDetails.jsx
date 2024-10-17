import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h2>Details About User: {name}</h2>
            <p>Websie: {website}</p>
        </div>
    );
};

export default UserDetails;