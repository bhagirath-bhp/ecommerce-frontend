import { Rating } from "@material-tailwind/react";
import { useState } from "react"


const Testimonial = (props) => {
    const [cardType, setCardType] = useState(props.type);
    return (
        (cardType==="testimonial") ?
        (<div className="testimonial min-w-[400px] bg-goldenLight rounded-lg mx-5 py-5">
            <div className="testimonial-author flex justify m-5">
                {/* <div className="testimonial-author-img mx-5">
                    <img src={props.url} alt="" className='h-[50px] w-[50px] rounded-full border-[1px] p-[2px]' />
                </div> */}
                <div className="testimonial-author-detail">
                    <h3 className='font-bold text-xl'>{props.name}</h3>
                    <p>{props.designation}</p>
                </div>
            </div>
            <div className="testimonial-message w-full pl-5">{props.message}</div>
        </div>)
        :
        (<div className="testimonial min-w-[400px] rounded-lg mx-5 py-5">
        <div className="testimonial-author flex justify m-5">
            {/* <div className="testimonial-author-img mx-5">
                <img src={props.url} alt="" className='h-[50px] w-[50px] rounded-full border-[1px] p-[2px]' />
            </div> */}
            <div className="testimonial-author-detail">
                <h3 className='font-bold text-xl'>{props.name}</h3>
                {/* <p className="font-bold">{props.reviewTitle}</p> */}
                <Rating value={4} readonly/>
                <p>Reviewed on {props.date} </p>
            </div>
        </div>
        <div className="testimonial-content">
            <div className="testimonial-message w-full pl-5">{props.message}</div>
        </div>
    </div>)
    )
}

export default Testimonial