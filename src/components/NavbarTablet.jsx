import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { userState, isLoggedInState } from './state/RecoilState';
import Cookies from 'js-cookie'
import UserBadge from "./UserBadge";



const NavbarTablet = (props) => {
    const [hover, setHover] = useState(false);
    const [currentUser, setCurrentUser] = useRecoilState(userState);
    return (
        <nav className='navbar smMobile:hidden tablet:flex'>
            <div className="logo cursor-pointer" onClick={() => { window.open('/', "_self") }}></div>
            <ul className="navul flex">
                <li className="main-ul-li">
                    <a href="/products">
                        Shop Now
                    </a>
                </li>
                <li className="main-ul-li">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="main-ul-li flex relative" onMouseEnter={() => { (!hover) ? setHover(true) : '' }} onMouseLeave={() => { hover ? setHover(false) : "" }}>
                    Collections
                    <IoIosArrowDown className="mt-1 ml-2" />
                    {/* <ul className={`dropdown z-10 absolute top-[2.5rem] flex-column justify-center items-center max-h-0 opacity-0 overflow-hidden bg-goldenLight drop-shadow-[10px_10px_10px_rgba(0,0,0,1)] max-w-[20rem] border-[1px] transition-height duration-[700ms] ease-in-out  ${hover ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"}`} > */}
                    <ul className={`dropdown z-10 absolute top-[2.5rem] flex-column justify-center items-center opacity-0 overflow-y-auto bg-goldenLight min-w-[20rem] border-[1px] transition-height duration-[700ms] ease-in-out  ${hover ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"}`} >
                        {props.categoriesComponentSet}
                    </ul>
                </li>
            </ul>
            <div className="signin">
                {Cookies.get('token') ? (
                    <Link to="/profile">Profile</Link>
                ) : (
                    currentUser ? (
                        <UserBadge user={setCurrentUser} />
                    )
                    : (
                        <Link to="/login" className="mx-4 py-1 hover:bg-goldenLight text-center">Sign in</Link>
                    )
                )}
            </div>
        </nav>
    )
}

export default NavbarTablet