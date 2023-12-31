import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
    const navigate = useNavigate();
    return (
        <div className="product max-w-[350px] overflow-hidden rounded-lg border-[1px] border-black m-5 transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 cursor-pointer" onClick={()=>{navigate('/oneproduct', {state: {productId: "abc"} })}}>
            <div className="product-img w-full h-[261px] overflow-hidden">
                <img src={props.url} alt={props.title} className='w-full h-full object-cover' />
            </div>
            <div className="product-details px-5 pt-5">
                <h3 className="product-title font-bold text-[20px]">{props.title}</h3>
                <p className="product-description">{props.description.slice(0,50)+'....'}</p>
                <p className="my-5 border-[1px] rounded-xl font-normal text-base text-center px-5 bg-goldenLight text-golden border-golden">Limited Quantities Left</p>
            </div>
            <div className="product-price flex justify-between items-center p-5">
                <h3 className="product-title font-bold text-3xl">₹{props.price}</h3>
                <IoMdArrowDroprightCircle className='icon text-black cursor-pointer' />
            </div>
        </div>
    )
}

export default Product;
