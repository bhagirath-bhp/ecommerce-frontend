import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


const AdminNavbar = () => {
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
               
            </ul>
            <div className="signin">
                <a href="">Sign in</a>
            </div>
        </nav>
    )
}

export default AdminNavbar