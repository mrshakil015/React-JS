import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>Home</h1>
            <h2>This is the home components</h2>            
            <Outlet></Outlet>
        </div>
    );
};

export default Home;