import Testimonial from "./Testimonial"

const TestimonialCarousel = () => {
    const testimonialSet = [
        { key: 1, name: "Chhota Bheem 1", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image1.png", className: "first" },
        { key: 2, name: "Chhota Bheem 2", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image2.png" },
        { key: 3, name: "Chhota Bheem 3", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image3.png" },
        { key: 4, name: "Chhota Bheem 4", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image4.png" },
        { key: 5, name: "Chhota Bheem 5", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image1.png" },
        { key: 6, name: "Chhota Bheem 1", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image2.png" },
        { key: 7, name: "Chhota Bheem 2", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image3.png" },
        { key: 8, name: "Chhota Bheem 3", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image4.png" },
        { key: 9, name: "Chhota Bheem 4", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image1.png" },
        { key: 10, name: "Chhota Bheem 5", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image2.png" },
    ]
    const testimonialComponentSet = testimonialSet.map((testimonial) => (<Testimonial key={testimonial.key} name={testimonial.name} message={testimonial.message} url={testimonial.url} designation={testimonial.designation} />))

    return (
        <div className="testimonial-container blur-mask noscrollbar my-9">
            <div className="testimonial-inner flex w-fit gap-[1rem] scroll-animation-left">
                {testimonialComponentSet}
            </div>
        </div>
    )
}

export default TestimonialCarousel