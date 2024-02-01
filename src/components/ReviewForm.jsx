import { Button, Rating } from "@material-tailwind/react";
import { useState } from "react";
import { addReview } from "../api/reviews.js";
import { useSetRecoilState } from "recoil";
import { toastState } from "./state/RecoilState.jsx";



const ReviewForm = (props) => {
    const [rated, setRated] = useState(4);
    const [reviewText, setReviewText] = useState("");
    const setToastState = useSetRecoilState(toastState);

    const handleSubmit = async () => {
        if (!reviewText.trim()) {
            setToastState("Please enter a review before submitting.");
            return;
        }
        const response = await addReview(props.userId , props.productId, rated, reviewText);
        if (response) {
            setToastState([response, 'success', 'top-right']);

            setRated(4);
            // setReviewText("");
        } else {
            setToastState("Error submitting the review. Please try again later.");
            console.log(response)
        }
    };

    return (
        <div className="bg-white p-8 tablet:px-[7rem] rounded smMobile:min-w-[90vw]">
            <h1 className="text-2xl font-bold font-CrimsonText mb-6 text-center">
                Write your thoughts
            </h1>

            <div className="rating-component text-2xl">
                <label className="block font-semibold text-base" htmlFor="review">
                    Rate
                </label>
                <Rating
                    value={rated}
                    onChange={(value) => setRated(value)}
                    className="scale-150 ml-10 my-10"
                />
            </div>
            <label className="block mb-2 font-semibold" htmlFor="review">
                Review
            </label>
            <textarea
                className="w-full outline-none border border-golden rounded px-3 py-2 mb-4"
                name="review"
                id="review"
                cols="30"
                rows="10"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
            <Button
                className="bg-golden text-sm text-black my-2"
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </div>
    );
};

export default ReviewForm;
