import { Button, Rating } from "@material-tailwind/react"
import RippleButton from "./RippleButton"
import { useState } from "react"
const ReviewForm = () => {
    const [rated, setRated] = useState(4)
    return (
        <div className="bg-white p-8 tablet:px-[7rem] rounded smMobile:min-w-[90vw] ">
            <h1 className="text-2xl font-bold font-CrimsonText mb-6 text-center">Write your thoughts</h1>

            <div className="rating-component text-2xl">
                <label className="block font-semibold text-base" htmlFor="review">
                    Rate
                </label>
                <Rating value={4} onChange={(value) => setRated(value)} className="scale-150 ml-10 my-10" />
            </div>
            <label className="block mb-2 font-semibold" htmlFor="review">
                Review
            </label>
            <textarea className="w-full outline-none border border-golden rounded px-3 py-2 mb-4" name="" id="review" cols="30" rows="10"></textarea>
            <RippleButton areaLabel="Submit" buttonStyles=" px-4 py-2 bg-golden text-black" type="submit" />
        </div>
    )
}

export default ReviewForm