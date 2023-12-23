import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RippleButton from '../components/RippleButton';
const SignUpPage = () => {
    const [password, setPassword] = useState('');
    const [showPasswordWarning, setShowPasswordWarning] = useState(false);
  
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    setShowPasswordWarning(e.target.value.length < 6);
};

  return (
    <>
        <Navbar/>
        <div className="flex justify-center font-Roboto items-center">
        <div className="bg-white p-8 rounded tablet:w-[60vw] smMobile:w-[90vw]">
            <h1 className="text-2xl font-bold font-CrimsonText mb-6 text-center">Create Account</h1>

            <label className="block mb-2 font-semibold" htmlFor="name">
            Your Name
            </label>
            <input className="w-full outline-none border border-golden rounded px-3 py-2 mb-4" type="text" id="name" name="name" required />

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
            <p className={`text-red-500 top-2 left-2 text-sm ${(showPasswordWarning)?'opacity-100':'opacity-0'}`}>Password must be at least 6 characters.</p>

            <RippleButton areaLabel="Sign Up" buttonStyles=" px-4 py-2 bg-golden text-black" type="submit"/>
            

            <div className="text-center mt-4">
            Already have an account? <a className="text-golden" href="/login">
                Login
            </a>
            </div>
        </div>
        </div>
        <Footer/>
    </>
  );
};

export default SignUpPage;
