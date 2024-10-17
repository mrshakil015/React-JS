import { useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();

    const handleShowDetail = ()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className="border-2 border-orange-500 rounded-lg p-3">
            <h2 className="text-4xl font-bold">{id}</h2>
            <h3 className="text-lg font-bold">{title}</h3>
            <button onClick={handleShowDetail} className="btn btn-primary m-2">Show Details</button>
        </div>
    );
};

export default Post;