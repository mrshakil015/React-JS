import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";

const Login = () => {

    const [showError, setShowError] = useState('');
    const [showSuccess, setShowSuccess] = useState('');
    const emailRef = useRef();


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setShowError('')
        setShowSuccess('')

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                if(result.user.emailVerified){
                    setShowSuccess('Login successfully')
                }
                else{
                    alert('Please verify your email address.')
                }
            })
            .catch(error => {
                setShowError(error.message)
            })

    }

    const handleForgetPassword = e => {
        const email = emailRef.current.value;
        if(!email){
            console.log('Please provide an email', email)
            return;
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            console.log('Please write a valid email')
        }

        // send validation email
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('Please check your email')
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="email"
                                name="email"
                                ref={emailRef}
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p> Do not have any account? Please <Link to="/heroRegister">Register</Link></p>
                        {
                            showError && <p className="text-red-600">{showError}</p>
                        }
                        {
                            showSuccess && <p className="text-green-600">{showSuccess}</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;