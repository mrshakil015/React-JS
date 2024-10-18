import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!!</h2>   
            {/* <Link to="/">Go Back Home</Link>          */}
            <Link to="/"><button className="btn">Go Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;