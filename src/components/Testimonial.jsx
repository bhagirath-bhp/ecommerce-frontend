const Testimonial = (props) => {
    return (
        <div className="testimonial min-w-[400px] bg-[#4b006e23] rounded-lg mx-5 py-5">
            <div className="testimonial-author flex justify my-5">
                <div className="testimonial-author-img mx-5">
                    <img src={props.url} alt="" className='h-[50px] w-[50px] rounded-full border-[1px] p-[2px]' />
                </div>
                <div className="testimonial-author-detail">
                    <h3 className='font-bold text-xl'>{props.name}</h3>
                    <p>{props.designation}</p>
                </div>
            </div>
            <div className="testimonial-message w-full pl-5">{props.message}</div>
        </div>
    )
}

export default Testimonial