import { Link } from "react-router-dom"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const SuccessPage = () => {
    return (
        <div className="flex h-[calc(100vh)] items-center justify-center p-5 w-full bg-green-50">
            <div className="text-center">
                <div className="inline-flex rounded-full bg-green-100 p-7">
                    <div className="rounded-full stroke-green-600 bg-green-200 p-4 text-xl">
                        {/* <IoMdCheckmarkCircleOutline className="text-[5rem]" /> */}
                        {/* <img src="/success.svg" alt="" /> */}
                        <svg id="Vector" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full max-h-full">
                            <path d="M14.8648 20.0352L11.575 23.325L22.15 33.9L45.65 10.4L42.3602 7.11023L22.15 27.2023L14.8648 20.0352ZM43.3 24.5C43.3 34.8398 34.8397 43.3 24.5 43.3C14.1603 43.3 5.7 34.8398 5.7 24.5C5.7 14.1602 14.1602 5.7 24.5 5.7C26.2625 5.7 28.025 5.93523 29.6705 6.40511L33.3125 2.7625C30.6102 1.5875 27.6727 1 24.5 1C11.575 1 1 11.575 1 24.5C1 37.425 11.575 48 24.5 48C37.425 48 48 37.425 48 24.5H43.3Z" stroke="#039100" strokeDasharray="0,0,0,319.5854797363281"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="1" dur="2.5s" values="0,0,0,319.5854797363281; 
          0,159.79273986816406,159.79273986816406,0; 
          319.5854797363281,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
                        </svg>
                    </div>
                </div>
                <h1 className="mt-5 text-[36px] font-bold text-slate-800 lg:text-[50px]">Order Confirmed</h1>
                <p className="text-slate-600 mt-5 lg:text-lg">Success! Your order was confirmed successfully.
                    Visit <Link to="/" className="text-blue-700 underline">Home</Link> page or <br /> Feel free to explore more or contact us if you have any questions.</p>
            </div>
        </div>
    )
}

export default SuccessPage;