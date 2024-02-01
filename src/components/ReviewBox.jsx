import { Progress, Rating } from "@material-tailwind/react";
import TestimonialCarousel from "./TestimonialCarousel";

const ReviewBox = ({productId}) => {
    return (
        <div className="grid grid-rows-1 grid-cols-3">
            <div className="review-stats py-5">
                <div className="rating-head row-start-1 row-end-1 col-span-1">
                    <Rating value={4} readonly/>
                    <p className="font-medium text-blue-gray-500">
                        4 out of 5
                    </p>
                    <p className="font-medium text-blue-gray-500">
                        Based on 134 Reviews
                    </p>
                </div>
                <div className="review-bars smMobile:w-[90vw] tablet:w-full tablet:col-start-1 tablet:col-end-2 smMobile:col-span-4">
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
            <div className="review-cards tablet:col-start-2 tablet:col-end-5 smMobile:col-span-4 overflow-hidden">
                <TestimonialCarousel type="review" productId={productId}/>
            </div>
        </div>
    )
}

export default ReviewBox