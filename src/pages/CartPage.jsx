// CartPage.jsx
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartState } from '../components/CartState';
import Footer from '../components/Footer'; // Assuming this is the path to your Footer component
import CartItem from '../components/CartItem'; // Component for individual cart items
import Navbar2 from '../components/Navbar2';
import { userState } from '../components/state/RecoilState';
import { getCart } from '../api/cart';
const CartPage = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const user =  useRecoilValue(userState);
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await getCart(user.userId);
        const itemExists = cart.some(item => item.id === response.cartitems[0].product.productId);
  
        if (!itemExists) {
          setCart(cart => [
            ...cart,
            {
              id: response.cartitems[0].product.productId,
              name: response.cartitems[0].product.name,
              description: response.cartitems[0].product.name,
              quantity: response.cartitems[0].quantity,
              total: parseInt(response.cartitems[0].product.price) * response.cartitems[0].quantity
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };
  
    getDetails();
  }, []); 
  
  // Function to handle changes in quantity
  const handleQuantityChange = (id, newQuantity) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity, total: newQuantity * item.price } : item
    );
    setCart(newCart);
  };

  // Function to handle item deletion
  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.total, 0);
  const deliveryCharges = 50; // Flat delivery charge; this could be dynamic
  const grandTotal = subtotal + deliveryCharges;

  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar2 />
      <div className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <div className="space-y-4">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={handleQuantityChange}
              onDelete={handleDelete}
            />
          ))}
        </div>
        <div className="mt-4 bg-white p-4 shadow rounded-lg">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges:</span>
            <span>₹{deliveryCharges}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Grand Total:</span>
            <span>₹{grandTotal}</span>
          </div>
          <button className="bg-purple-500 text-white p-2 rounded w-full mt-4 hover:bg-purple-600">
            Check out
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
