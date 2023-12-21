import { useState } from "react"
import Testimonial from "./Testimonial"

const TestimonialCarousel = (props) => {
    const cardType = props.type;
    const testimonialSet = [
        { key: 1, type: "testimonial", name: "Chhota Bheem 1", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image1.png" },
        { key: 2, type: "testimonial", name: "Chhota Bheem 2", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image2.png" },
        { key: 3, type: "testimonial", name: "Chhota Bheem 3", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image3.png" },
        { key: 4, type: "testimonial", name: "Chhota Bheem 4", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image4.png" },
        { key: 5, type: "testimonial", name: "Chhota Bheem 5", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image1.png" },
        { key: 6, type: "testimonial", name: "Chhota Bheem 1", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image2.png" },
        { key: 7, type: "testimonial", name: "Chhota Bheem 2", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image3.png" },
        { key: 8, type: "testimonial", name: "Chhota Bheem 3", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image4.png" },
        { key: 9, type: "testimonial", name: "Chhota Bheem 4", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image1.png" },
    ]
    const customerReviewSet = [
        { key: 1, type: "review", date: "12 December 2023", reviewTitle: "Good Product", name: "Chhota Bheem 1", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image1.png" },
        { key: 2, type: "review", date: "12 December 2023", reviewTitle: "Good Product", name: "Chhota Bheem 2", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image2.png" },
        { key: 3, type: "review", date: "12 December 2023", reviewTitle: "Good Product", name: "Chhota Bheem 3", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image3.png" },
        { key: 4, type: "review", date: "12 December 2023", reviewTitle: "Good Product", name: "Chhota Bheem 4", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image4.png" },
        { key: 5, type: "review", date: "12 December 2023", reviewTitle: "Good Product", name: "Chhota Bheem 5", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image1.png" },
        { key: 6, type: "review", date: "12 December 2023", reviewTitle: "Good Product", name: "Chhota Bheem 1", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image2.png" },
        { key: 7, type: "review", date: "12 December 2023", reviewTitle: "Good Product", name: "Chhota Bheem 2", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image3.png" },
        { key: 8, type: "review", date: "12 December 2023", reviewTitle: "Good Product", name: "Chhota Bheem 3", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image4.png" },
        { key: 9, type: "review", date: "12 December 2023", reviewTitle: "Good Product", name: "Chhota Bheem 4", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image1.png" },
    ]
    const testimonialComponentSet = testimonialSet.map((testimonial) => (<Testimonial key={testimonial.key} type={testimonial.type} name={testimonial.name} message={testimonial.message} url={testimonial.url} designation={testimonial.designation} />))
    const customerReviewComponentSet = customerReviewSet.map((testimonial) => (<Testimonial key={testimonial.key} type={testimonial.type} date={testimonial.date} reviewTitle={testimonial.reviewTitle} name={testimonial.name} message={testimonial.message} url={testimonial.url} designation={testimonial.designation} />))

    return (
        (cardType==="testimonial") ?
            (<div className="testimonial-container blur-mask noscrollbar my-9">
                <div className="testimonial-inner flex w-fit gap-[1rem] scroll-animation-left">
                    {testimonialComponentSet}
                </div>
            </div>)
        :
            (<div className="testimonial-container blur-mask noscrollbar my-9">
                <div className="testimonial-inner flex w-fit gap-[1rem] scroll-animation-left">
                    {customerReviewComponentSet}
                </div>
            </div>)

    )
}

export default TestimonialCarousel