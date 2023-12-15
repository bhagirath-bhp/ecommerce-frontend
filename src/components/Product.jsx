import { IoMdArrowDroprightCircle } from "react-icons/io";

const Product = (props) => {
    return (
        <div className="product w-[350px] overflow-hidden rounded-lg border-[1px] my-5">
            <div className="product-img w-full h-[261px] overflow-hidden">
                <img src={props.url} alt="" className='w-full' />
            </div>
            <div className="product-details px-5 pt-5">
                <h3 className="product-title font-bold text-3xl">{props.title}</h3>
                <p className="product-description">{props.description}</p>
            </div>
            <div className="product-price flex justify-between p-5">
                <h3 className="product-title font-bold text-3xl">₹ {props.price}</h3>
                <IoMdArrowDroprightCircle className='text-5xl text-indigo' />
            </div>
        </div>
    )
}

export default Product