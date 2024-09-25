import './Profile.css'
export default function Profile(){
    const user ={
        name: 'Hedy Lamar',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    };
    
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of '+ user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
            <p>Hello there.<br />How do you do?</p>
        </>
    );
}