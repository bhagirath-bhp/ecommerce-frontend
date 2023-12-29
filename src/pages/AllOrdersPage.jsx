// pages/AllOrdersPage.jsx
import React from 'react';
import Footer from '../components/Footer';
import { useRecoilValue } from 'recoil';
import { ordersState } from '../components/OrdersState';
import { IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline } from "react-icons/io";
import Navbar2 from '../components/Navbar2';

const OrderCard = ({ order }) => {
    // Placeholder functions for button actions
    const handleViewItemClick = () => {/* ... */};
    const handleViewOrderDetailsClick = () => {/* ... */};
    const handleBuyAgainClick = () => {/* ... */};
    const handleCancelOrderClick = () => {/* ... */};
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex justify-between">
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
        <div className="mt-4 flex justify-around">
          <button className="bg-black text-white px-3 py-1 rounded hover:bg-golden transition" onClick={handleViewItemClick}>
            View Item
          </button>
          <button className="bg-black text-white px-3 py-1 rounded hover:bg-golden transition" onClick={handleViewOrderDetailsClick}>
            View Order Details
          </button>
          {order.status === 'delivered' ? (
            <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition" onClick={handleBuyAgainClick}>
              <IoMdCheckmarkCircleOutline className="inline mr-2" />
              Buy it again
            </button>
          ) : (
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition" onClick={handleCancelOrderClick}>
              <IoMdCloseCircleOutline className="inline mr-2" />
              Cancel Order
            </button>
          )}
        </div>
      </div>
    );
  };
  
  const AllOrdersPage = () => {
    const orders = useRecoilValue(ordersState);
  
    return (
      <>
        <Navbar2 />
        <div className="max-w-2xl mx-auto py-8 px-4">
          <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
          {orders.map((order, index) => (
            <div key={order.id}>
              <h2 className="text-lg font-semibold my-4">
                {order.status === 'delivered' ? 'Delivered' : 'Delivery by'} {order.date}
              </h2>
              <OrderCard order={order} />
            </div>
          ))}
        </div>
        <Footer />
      </>
    );
  };
  
  export default AllOrdersPage;