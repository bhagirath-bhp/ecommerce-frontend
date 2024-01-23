import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RippleButton from '../components/RippleButton';
import { Button } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../api/user';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {
    const [password, setPassword] = useState('');
    const [showPasswordWarning, setShowPasswordWarning] = useState(false);
    const navigate = useNavigate();
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setShowPasswordWarning(e.target.value.length < 6);
    };
    const handleSignUp = async (event) => {
        event.preventDefault();
        const response = await signup(event.target[0].value, event.target[1].value, event.target[4].value, event.target[5].value, event.target[3].value);
        if(response.success){
            toast.success(response.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
            setTimeout(() => {
                navigate("/")
            }, 2000);
        }
        else{
            toast.error(response.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }

    return (
        <>
            <Navbar />
            <div className="flex justify-center font-Roboto items-center">
                {/* <div className="bg-white p-8 rounded tablet:w-[60vw] smMobile:w-[90vw]"> */}
                <form className="bg-white p-8 px-[7rem] rounded tablet:w-[60vw] smMobile:w-[90vw]" onSubmit={ handleSignUp }>
                    <h1 className="text-2xl font-bold font-CrimsonText mb-6 text-center">Create Account</h1>

                    <label className="block mb-2 font-semibold" htmlFor="fname">
                        First Name
                    </label>
                    <input className="w-full outline-none border border-golden rounded px-3 py-2 mb-4" type="text" id="fname" name="name" required />
                    <label className="block mb-2 font-semibold" htmlFor="lname">
                        Last Name
                    </label>
                    <input className="w-full outline-none border border-golden rounded px-3 py-2 mb-4" type="text" id="lname" name="name" required />

                    <label className="block mb-2 font-semibold" htmlFor="mobile">
                        Mobile Number
                    </label>
                    <div className="flex mb-4" id='mobile-wrapper'>
                        <div className="w-1/4 pr-2">
                            <select className="w-full outline-none border border-golden rounded px-3 py-2" id="country" name="country">
                                <option value="+91">IN +91</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div className="w-3/4 pl-2">
                            <input className="w-full outline-none border border-golden rounded px-3 py-2" type="tel" id="mobile" name="mobile" required />
                        </div>
                    </div>

                    <label className="block mb-2 font-semibold" htmlFor="email">
                        E-mail
                    </label>
                    <input className="w-full outline-none border border-golden rounded px-3 py-2 mb-4" type="email" id="email" name="email" required />

                    <label className="block mb-2 font-semibold" htmlFor="password">
                        Password
                    </label>
                    <input
                        className={`w-full outline-none border border-golden rounded px-3 py-2 mb-2 ${showPasswordWarning ? 'border-red-500' : ''}`}
                        type="password"
                        id="password"
                        name="password"
                        minLength="6"
                        required
                        onChange={handlePasswordChange}
                    />
                    <p className={`text-red-500 top-2 left-2 text-sm ${(showPasswordWarning) ? 'opacity-100' : 'opacity-0'}`}>Password must be at least 6 characters.</p>

                    <RippleButton areaLabel="Sign Up" buttonStyles=" px-4 py-2 bg-golden text-black" type="submit"/>
                    <ToastContainer autoClose={1000}/>
                    {/* <Button className="bg-golden text-sm text-black my-2" >Submit</Button> */}



                    <div className="text-center mt-4">
                        Already have an account?
                        <Link className="text-golden" to="/login">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default SignUpPage;
