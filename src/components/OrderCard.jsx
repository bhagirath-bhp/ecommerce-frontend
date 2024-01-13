import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ order }) => {
    // Placeholder functions for button actions
    const navigate = useNavigate();
    // const handleViewItemClick = () => {/* ... */};
    // const handleBuyAgainClick = () => {/* ... */};
    // const handleCancelOrderClick = () => {/* ... */};
    // const handleViewOrderDetailsClick = () => {/* ... */ };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <div className="flex justify-between smMobile:flex-col tablet:flex-row">
                <div>
                    <h3 className="font-semibold">{order.productName}</h3>
                    <p className="text-sm text-gray-600">{order.description}</p>
                </div>
                <div className="flex items-center">
                    <img
                        src={order.imageUrl}
                        alt={order.productName}
                        className="w-20 h-20 object-cover rounded-lg"
                    />
                </div>
            </div>
            <div className="mt-4 flex justify-end">
                <Button className="bg-golden text-sm text-black my-2" onClick={() => { navigate('/ordersdetails', { state: { productId: "abc" } }) }}>View Order Details</Button>
                {/* <Button className="bg-golden text-sm text-black my-2" onClick={()=>{navigate('/oneproduct', {state: {productId: "abc"}})}}>View Item</Button> */}

                {/* {order.status === 'delivered' ? (
              <Button className="text-sm text-white my-2" color='green' onClick={()=>{navigate('/cart', {state: {productId: "abc"}})}}>
                <IoMdCheckmarkCircleOutline className="inline mr-2" />
                Buy Again
              </Button>
            ) : (
              <Button className="text-sm text-white my-2" color='red' onClick={()=>{navigate('/cart', {state: {productId: "abc"}})}}>
                <IoMdCloseCircleOutline className="inline mr-2" />
                Cancel Order
              </Button>
            )} */}
            </div>
        </div>
    );
};

export default OrderCard;