import { useNavigate } from "react-router-dom"

const SearchItem = ({name, price, productId}) => {
    const navigate = useNavigate();
    return (
        <div className="item bg-gray-100 border-y-2 w-full flex justify-between items-center verySmMobile:p-[1rem] tablet:p-[2rem]" onClick={()=>{navigate(`/product/${productId}`)}}>
            <p className="name verySmMobile:text-lg tablet:text-2xl font-bold text-left">{name}</p>
            <p className="name verySmMobile:text-lg tablet:text-2xl font-bold text-left">{price}</p>
        </div>
    )
}

export default SearchItem