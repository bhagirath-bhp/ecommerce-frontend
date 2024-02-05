import { useNavigate } from "react-router-dom"
import { IoIosSearch } from "react-icons/io";


const SearchItem = ({name, price, productId}) => {
    const navigate = useNavigate();
    return (
        <div className="item bg-gray-100 hover:bg-gray-300 transition-colors duration-300 border-y-2 w-full flex justify-around items-center verySmMobile:p-[1rem] tablet:px-[2rem] cursor-pointer" onClick={()=>{window.location.replace(`/product/${productId}`)}}>
            <IoIosSearch className="text-2xl"/>
            <p className="name verySmMobile:text-lg tablet:text-2xl text-left">{name}</p>
            {/* <p className="name verySmMobile:text-lg tablet:text-2xl font-bold text-left">{price}</p> */}
        </div>
    )
}

export default SearchItem