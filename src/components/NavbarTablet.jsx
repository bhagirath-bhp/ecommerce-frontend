import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


const NavbarTablet = (props) => {
    const [hover, setHover] = useState(false);
    return (
        <nav className='navbar smMobile:hidden tablet:flex'>
            <div className="logo"></div>
            <ul className="navul flex">
                <li className="main-ul-li">
                    Shop Now
                </li>
                <li className="main-ul-li">
                    About Us
                </li>
                <li className="main-ul-li">
                    Contact
                </li>
                <li className="main-ul-li flex relative" onMouseEnter={() => { (!hover) ? setHover(true) : '' }} onMouseLeave={() => { hover ? setHover(false) : "" }}>
                    Categories
                    <IoIosArrowDown className="mt-1 ml-2" />
                    {/* <ul className={`dropdown z-10 absolute top-[2.5rem] flex-column justify-center items-center max-h-0 opacity-0 overflow-hidden bg-goldenLight drop-shadow-[10px_10px_10px_rgba(0,0,0,1)] max-w-[20rem] border-[1px] transition-height duration-[700ms] ease-in-out  ${hover ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"}`} > */}
                    <ul className={`dropdown z-10 absolute top-[2.5rem] flex-column justify-center items-center max-h-0 opacity-0 overflow-hidden bg-goldenLight max-w-[20rem] border-[1px] transition-height duration-[700ms] ease-in-out  ${hover ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"}`} >
                        {props.categoriesComponentSet}
                    </ul>
                </li>
            </ul>
            <div className="signin">
                <a href="">Sign in</a>
            </div>
        </nav>
    )
}

export default NavbarTablet