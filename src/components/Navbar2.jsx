import { IoIosSearch, IoMdCart, IoIosArrowRoundBack } from 'react-icons/io';
import { HiBars3 } from 'react-icons/hi2';
const Navbar2 = () => {
    return (
        <nav className="bg-indigo text-white p-4 flex items-center justify-evenly">
            <a href="#" className="text-5xl">
                <IoIosArrowRoundBack />
            </a>
            <div className="flex items-center space-x-4 w-10/12">
                <div className="relative w-full flex bg-white rounded-lg">
                    <IoIosSearch className="text-black text-2xl my-2 mx-5" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-white w-full text-black rounded-lg p-2 focus:outline-none "
                    />
                </div>
                <a href="#" className="text-3xl mx-9 text-emerald">
                    <IoMdCart />
                </a>
                <div className="text-3xl text-emerald">
                    <HiBars3 />
                </div>
            </div>
        </nav>
    )
}

export default Navbar2