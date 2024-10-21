const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <div>
            <div className="mx-auto md:w-1/2">
            <h3 className="text-3xl text-center font-bold my-5">Please Register</h3>       
            <form onSubmit={handleRegister}>
                <input className="mb-4 border-2 py-2 px-4 rounded-lg w-full" type="email" name="email" placeholder="Your Email" />   
                <br/>
                <input className="mb-4 border-2 py-2 px-4 rounded-lg w-full" type="password" name="password" placeholder="Your Password" id="" />
                <br />
                <input className="btn btn-secondary text-white mb-4 w-full" type="submit" value="REGISTER" />
            </form>     
            </div>
        </div>
    );
};

export default Register;