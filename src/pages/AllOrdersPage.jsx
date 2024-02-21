// pages/AllOrdersPage.jsx
import React, { useState } from 'react';
import Footer from '../components/Footer';
import { useRecoilValue } from 'recoil';
import { ordersState } from '../components/OrdersState';
import { IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline } from "react-icons/io";
import Navbar2 from '../components/Navbar2';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import OrderCard from '../components/OrderCard';
import { useEffect } from 'react';
import { getAllOrdersForAUser } from '../api/order';
import { userState } from '../components/state/RecoilState';
import { DefaultPagination } from '../components/DefaultPagination';


const AllOrdersPage = () => {
  // const orders = useRecoilValue(ordersState);
  const [orders, setOrders] = useState();
  const [ordersComponentSet, setOrdersComponentSet] = useState();
  const [pagination, setPagination] = useState({ page: 1, pageSize: 6, totalPages: 1, totalProducts: 1 });
  const user = useRecoilValue(userState);
  async function fetchOrders() {
    const myOrders = await getAllOrdersForAUser(user.userId);
    setOrders(myOrders);
  }
  useEffect(() => {
    fetchOrders();
  }, [])
  useEffect(() => {
    console.log(orders)
    const orderItemsComponentSet = (orderSet) => {
      if (orderSet)
        return orderSet.orderitems.map((item) => (
          <OrderCard
            key={Math.random()}
            order={{
              productName: item.product.name,
              price: item.price,
              imageUrl: (item.imgUrl) || "/noimg.jpg",
              description: (item.description) || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, explicabo!"
            }} />
        ))
      else
        return <p>Something Went Wrong</p>
    }
    const ordersComponentSetHold = (orders)
      ? orders.orders.map((orderSet) => (
        <div key={orderSet.orderId} className='border-b-[1px] border-gray-400 my-[3rem] py-[2rem] w-full'>
          {
            orderItemsComponentSet(orderSet)
          }
        </div>
      ))
      : (
        <p>No orders found</p>
      );

    setOrdersComponentSet(ordersComponentSetHold);
  }, [orders])



  return (
    <>
      <Navbar2 />
      <div className="w-full mx-auto py-8 px-[5rem]">
        <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
        {ordersComponentSet}
      </div>
      <Footer />
    </>
  );
};

export default AllOrdersPage;