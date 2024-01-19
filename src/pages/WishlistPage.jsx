import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartState } from '../components/CartState';
// import { wishlistState } from '../components/WishlistState';
import { FaHeart } from 'react-icons/fa';
import { getWishlist } from '../api/wishlist';
import { userState } from '../components/state/RecoilState';

const WishlistPage = () => {
  // const [cart, setCart] = useRecoilState(cartState);
  const user = useRecoilValue(userState);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await getWishlist(user.userId);
        setWishlist((prevWishlist) => [
          ...prevWishlist,
          {
            id: response.wishlistId,
            title: response[0].product.name,
            description: response[0].product.description,
            price: response[0].product.price,
          },
        ]);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    getDetails();
  }, []);

  const addToCart = (wishlistItem) => {
    const existingItem = cart.find((item) => item.id === wishlistItem.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === wishlistItem.id
          ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
          : item
      );
      // setCart(updatedCart);
    } else {
      const newItem = {
        ...wishlistItem,
        quantity: 1,
        total: wishlistItem.price,
      };
      setCart([...cart, newItem]);
    }
  };

  const removeFromWishlist = (itemId) => {
    const newWishlist = wishlist.filter((item) => item.id !== itemId);
    setWishlist(newWishlist);
  };

  const wishlistComponentSet = wishlist.map((item) => (
    <div key={item.id} className="p-4 border border-gold rounded bg-white">
      <img src={item.imageUrl} alt={item.title} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-xl font-bold">{item.title}</h2>
      <p>{item.description}</p>
      <div className="flex justify-between items-center">
        <button
          onClick={() => addToCart(item)}
          className="bg-black text-golden px-4 py-2 rounded border border-gold hover:bg-opacity-80 transition duration-200"
        >
          Add to Cart
        </button>
        <FaHeart
          onClick={() => removeFromWishlist(item.id)}
          className={`text-gold text-2xl cursor-pointer ${
            wishlist.some((wItem) => wItem.id === item.id) ? 'filled' : ''
          }`}
        />
      </div>
    </div>
  ))
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gold mb-6">Your Wishlist</h1>
          {wishlist.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              { wishlistComponentSet }
            </div>
          ) : (
            <p className="text-gold">No items in your wishlist yet.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WishlistPage;
