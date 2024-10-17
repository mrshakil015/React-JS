import { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleFormSubmit = e =>{
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(password)
    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }

    const handleEmailChange = e =>{
        console.log(e.target.value)
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input 
                onChange={handleNameChange}
                type="text" name="name" />
                <br />
                <input 
                onChange={handleEmailChange}
                type="email" name="email" id="" />
                <br />
                <input
                onChange={handlePasswordChange}
                type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulForm;