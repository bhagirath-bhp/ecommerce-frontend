import { useState } from "react";
import { Progress, Rating, Typography } from "@material-tailwind/react";
import TestimonialCarousel from "./TestimonialCarousel";

const ReviewBox = () => {
    return (
        <div className="grid grid-rows-1 grid-cols-3">
            <div className="review-stats">
                <Rating value={4} onChange={(value) => setRated(value)} />
                <p className="font-medium text-blue-gray-500">
                    Based on 134 Reviews
                </p>
                <div className="review-bars w-9/12">
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
                </div>
            </div>
            <div className="review-cards col-start-2 col-end-4 overflow-hidden">
                <TestimonialCarousel/>
            </div>
        </div>
    )
}

export default ReviewBox