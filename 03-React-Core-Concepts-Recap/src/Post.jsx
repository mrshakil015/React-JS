import './Post.css'
export default function Post({post}){
    const {title, body, id, userId} = post;
    console.log(post)

    return (
        <div className='post'>
            <p><small>userId: {userId}</small></p>
            <p><small>postId: {id}</small></p>
            <h5>Title: {title}</h5>
            <p>{body}</p>
        </div>
    )

}