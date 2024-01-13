import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import Cookies from 'js-cookie'
import UserBadge from "./UserBadge";
import { Link } from "react-router-dom";


const NavbarMobile = (props) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <nav className="navbar smMobile:flex tablet:hidden text-xl">
            <div className="logo cursor-pointer" onClick={() => { window.open('/') }}></div>
            <HiBars3 onClick={() => { (isNavOpen) ? setIsNavOpen(false) : setIsNavOpen(true) }} />

            <ul className={`navul flex-column items-center w-full overflow-hidden max-h-0 opacity-0 transition-height duration-1000 ease-in-out ${isNavOpen ? "max-h-[50rem] opacity-100" : "max-h-0 opacity-0"} border-[1px] border-golden absolute top-[7rem] left-0 p-3 z-10 bg-black`}>
                <li className="main-ul-li">
                    <a href="/products">
                        Shop Now
                    </a>
                </li>
                <li className="main-ul-li">
                    About Us
                </li>
                <li className="flex justify-center text-center">
                    <ul className="dropdown top-[1.7rem] left-1/2 flex-column justify-center items-center h-auto overflow-hidden bg-black transition-height duration-500 ease-in-out w-full">
                        <div className="border-y-2 border-golden w-full my-5">
                            {props.categoriesComponentSet}
                        </div>
                    </ul>
                </li>
                <div className="signin w-full flex justify-center">
                    {Cookies.get('token') ? (
                        <ul className="py-2">
                            <li>
                                <Link to="#" className="block px-4 py-2 hover:text-golden hover:bg-goldenLight">Profile</Link>
                            </li>
                            <li>
                                <Link to="/cart" className="block px-4 py-2 hover:text-golden hover:bg-goldenLight">Cart</Link>
                            </li>
                            <li>
                                <Link to="/orders" className="block px-4 py-2 hover:text-golden hover:bg-goldenLight">Orders</Link>
                            </li>
                            <li>
                                <Link to="#" className="block px-4 py-2 hover:text-golden hover:bg-goldenLight" onClick={() => {
                                    Cookies.remove('token').then(() => {
                                        window.location.reload()
                                    })
                                }}>Sign out</Link>
                            </li>
                        </ul>
                    ) : (
                        <Link to="/login" className="mx-4 main-ul-li hover:bg-goldenLight text-center">Sign in</Link>
                    )}
                </div>
            </ul>
        </nav>
    )
}

export default NavbarMobile