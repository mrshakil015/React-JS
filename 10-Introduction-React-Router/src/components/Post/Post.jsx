import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();
    const postStyles = {
        border: '2px solid tomato',
        padding: '10px',
        borderRadius: '20px',
    }
    const handleShowDetail = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyles}>
            <h2>{id}</h2>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>
                <button>Post Details</button>
            </Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;