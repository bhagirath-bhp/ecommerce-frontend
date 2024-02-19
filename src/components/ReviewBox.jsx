import { Progress, Rating } from "@material-tailwind/react";
import TestimonialCarousel from "./TestimonialCarousel";
import { getRatingsForAProduct } from "../api/reviews";
import { useEffect, useState } from "react";


const ReviewBox = ({productId}) => {
    const [rating, setRating] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);
    useEffect(()=>{
        const fetchRatings = async () => {
            const response = await getRatingsForAProduct(productId);
            setRating(response.avgRating);
            setTotalReviews(response.ratings.length);
        }
        fetchRatings();
    }, [])
    return (
        <div className="grid grid-rows-1 grid-cols-3">
            <div className="review-stats py-5">
                <div className="rating-head row-start-1 row-end-1 col-span-1">
                    <Rating value={rating} readonly/>
                    <p className="font-medium text-blue-gray-500">
                        {rating} out of 5
                    </p>
                    <p className="font-medium text-blue-gray-500">
                        Based on {totalReviews} Reviews
                    </p>
                </div>
                {/* <div className="review-bars smMobile:w-[90vw] tablet:w-full tablet:col-start-1 tablet:col-end-2 smMobile:col-span-4">
                    <div className="review-star-box flex">
                        <p className="review-star">5 star</p>
                        <Progress className="progress-bar" value={60} color="yellow"/>
                        <p className="review-percent">60 %</p>
                    </div>
                    <div className="review-star-box flex">
                        <p className="review-star">4 star</p>
                        <Progress className="progress-bar" value={60} color="yellow"/>
                        <p className="review-percent">60 %</p>
                    </div>
                    <div className="review-star-box flex">
                        <p className="review-star">3 star</p>
                        <Progress className="progress-bar" value={60} color="yellow"/>
                        <p className="review-percent">60 %</p>
                    </div>
                    <div className="review-star-box flex">
                        <p className="review-star">2 star</p>
                        <Progress className="progress-bar" value={60} color="yellow"/>
                        <p className="review-percent">60 %</p>
                    </div>
                    <div className="review-star-box flex">
                        <p className="review-star">1 star</p>
                        <Progress className="progress-bar" value={60} color="yellow"/>
                        <p className="review-percent">60 %</p>
                    </div>
                </div> */}
            </div>
            <div className="review-cards tablet:col-start-2 tablet:col-end-5 smMobile:col-span-4 overflow-hidden">
                <TestimonialCarousel type="review" productId={productId}/>
            </div>
        </div>
    )
}

export default ReviewBox