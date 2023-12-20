import { useState } from "react";
import "../App.css";
import { HiBars3 } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
    const [hover, setHover] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const categoriesSet = [
        {key: 1, title:"Category 1"},
        {key: 2, title:"Category 2"},
        {key: 3, title:"Category 3"},
        {key: 4, title:"Category 4"},
        {key: 5, title:"Category 5"},
        {key: 6, title:"Category 6"},
    ]
    const categoriesComponentSet = categoriesSet.map((category)=>(<li key={category.key}>{category.title}</li>))
    return (
        <div className="nav">
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
                    <li className="main-ul-li flex relative" onMouseEnter={() => { (!hover) ? setHover(true) : ''}} onMouseLeave={() => { hover ? setHover(false) : ""}}>
                        Categories
                        <IoIosArrowDown className="mt-1 ml-2" />
                        <ul className={`dropdown z-10 absolute top-[2.5rem] flex-column justify-center items-center max-h-0 opacity-0 overflow-hidden bg-[#653a799c] max-w-[20rem] rounded border-[1px] transition-height duration-[700ms] ease-in-out  ${hover ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"}`} >
                            {categoriesComponentSet}
                        </ul>
                    </li>
                </ul>
                <div className="signin">
                    <a href="">Sign in</a>
                </div>
            </nav>
            <nav className="navbar smMobile:flex tablet:hidden text-xl">
                <div className="logo"></div>
                <HiBars3 onClick={()=>{(isNavOpen)?setIsNavOpen(false):setIsNavOpen(true)}}/>

                <ul className={`navul flex-column items-center w-full overflow-hidden max-h-0 opacity-0 transition-height duration-1000 ease-in-out ${isNavOpen ? "max-h-[50rem] opacity-100" : "max-h-0 opacity-0"} border-[1px] absolute top-[7rem] left-0 p-3 z-10 bg-indigo`}>
                    <li className="main-ul-li">
                        Shop Now
                    </li>
                    <li className="main-ul-li">
                        About Us
                    </li>
                    <li className="main-ul-li">
                        Contact
                    </li>
                    <li className="flex justify-center text-center">
                        <ul className="dropdown top-[1.7rem] left-1/2 flex-column justify-center items-center h-auto overflow-hidden bg-indigo transition-height duration-500 ease-in-out w-full">
                            <div className="border-y-2 w-full my-5">
                                {categoriesComponentSet}
                            </div>
                        </ul>
                    </li>
                    <div className="signin mx-4 py-1 hover:bg-[#725188] text-center">
                        <a href="">Sign in</a>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar