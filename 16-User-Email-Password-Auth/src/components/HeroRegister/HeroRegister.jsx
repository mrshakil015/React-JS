import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const HeroRegister = () => {

    const [registerError, setRegisterError] = useState('');
    const [registreSuccess, setRegisterSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleHeroRegister = e => {
        e.preventDefault();
        console.log("Form submit")
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // reset success
        setRegisterSuccess('');
        // reset error 
        setRegisterError('');

        // Password length validation
        if (password.length < 6) {
            setRegisterError('Password must be longer than 6 characters');
            return;
        }
        // uppercase
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase characters.');
            return;
        }
        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential.user)
                setRegisterSuccess('User Created Successfully.')
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Hero Register</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleHeroRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password" className="input input-bordered w-full" required />
                                <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? "Hide" : "Show"
                                    }
                                </span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>

                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        {
                            registerError && <p className="text-red-700">{registerError}</p>
                        }
                        {
                            registreSuccess && <p className="text-green-700">{registreSuccess}</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HeroRegister;