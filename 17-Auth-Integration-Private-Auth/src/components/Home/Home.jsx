import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo);
    return (
        <div>
            This is home for: {authInfo.name}           
        </div>
    );
};

export default Home;