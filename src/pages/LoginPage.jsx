import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RippleButton from '../components/RippleButton';
import { login } from '../api/user';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userState } from '../components/state/RecoilState';
import { useSetRecoilState } from 'recoil';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPasswordWarning, setShowPasswordWarning] = useState(false);
    const setUser = useSetRecoilState(userState);

    const navigate = useNavigate()

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setShowPasswordWarning(e.target.value.length < 6);
    };

    const handleClick = async (e) => {
        e.preventDefault()
        const response = await login(email, password);
        if(response.success){
            setUser({userId: response.userId, token: response.token, role: response.role});
            toast.success(response.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
            console.log(response.role);
            setTimeout(() => {
                if(response.role==="admin"){
                    navigate("/admin/orders")
                }
                else{
                    navigate("/")
                }
            }, 2000);
        }
        else{
            toast.error(response.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }

    return (
        <div className='loginpage flex flex-col justify-between h-screen'>
            <Navbar />
            <div className="flex justify-center font-Roboto items-center">
                {/* <div className="bg-white p-8 rounded tablet:w-[60vw] smMobile:w-[90vw]"> */}
                <div className="bg-white p-8 px-[7rem] rounded tablet:w-[60vw] smMobile:w-[90vw]">
                    <h1 className="text-2xl font-bold font-CrimsonText mb-6 text-center">Login</h1>

                    <label className="block mb-2 font-semibold" htmlFor="email">
                        E-mail
                    </label>
                    <input className="w-full outline-none border border-golden rounded px-3 py-2 mb-4" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

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

                    <div onClick={handleClick}>
                        <RippleButton areaLabel="Login" buttonStyles=" px-4 py-2 bg-golden text-black" type="submit" />
                        <ToastContainer autoClose={1000}/>
                    </div>


                    <div className="text-center mt-4">
                        Don't have an account? <a className="text-golden" href="/signup">
                            SignUp
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default LoginPage;
