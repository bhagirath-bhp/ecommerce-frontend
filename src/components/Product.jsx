import { IoMdArrowDroprightCircle } from "react-icons/io";

const Product = (props) => {
    return (
        // Add hover effects for shadow and scale for a subtle animation
        <div className="product w-[350px] overflow-hidden rounded-lg border-[1px] border-black my-5 transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 cursor-pointer">
            <div className="product-img w-full h-[261px] overflow-hidden">
                <img src={props.url} alt={props.title} className='w-full h-full object-cover' /> {/* Added h-full object-cover for better image fit */}
            </div>
            <div className="product-details px-5 pt-5">
                <h3 className="product-title font-bold text-3xl">{props.title}</h3>
                <p className="product-description">{props.description}</p>
            </div>
            <div className="product-price flex justify-between items-center p-5">
                <h3 className="product-title font-bold text-3xl">₹{props.price}</h3>
                <IoMdArrowDroprightCircle className='icon text-indigo cursor-pointer' /> {/* Added cursor-pointer for icon interaction */}
            </div>
        </div>
    )
}

export default Product;
