import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title,body} = post;
    const navigate = useNavigate();
    const handleGoBack = ()=>{
        navigate(-1)
    }
    return (
        <div>
            <h2 className="text-4xl font-bold">Post Id: {id}</h2>
            <h3 className="text-3xl font-bold">Title: {title}</h3>
            <p>{body}</p>
            <button onClick={handleGoBack} className="btn btn-primary m-3">Go Back</button>
        </div>
    );
};

export default PostDetails;