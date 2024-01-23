import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartState } from '../components/CartState';
// import { wishlistState } from '../components/WishlistState';
import { FaHeart } from 'react-icons/fa';
import { getWishlist } from '../api/wishlist';
import { userState } from '../components/state/RecoilState';
import { Button } from '@material-tailwind/react';
import { addToCart } from '../api/cart';
import { transformWishlistArray } from '../components/handles/utility';
import WishlistItem from '../components/WishlistItem';


const WishlistPage = () => {
  // const [cart, setCart] = useRecoilState(cartState);
  const user = useRecoilValue(userState);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await getWishlist(user.userId);
        console.log(response)
        const transformedRes = transformWishlistArray(response)
        console.log(transformedRes)
        setWishlist(transformedRes);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    getDetails();
  }, []);



  const removeFromWishlist = (itemId) => {
    const newWishlist = wishlist.filter((item) => item.id !== itemId);
    setWishlist(newWishlist);
  };

  const wishlistComponentSet = wishlist.map((item) => (
    <WishlistItem item={item} key={Math.random()}/>
  ))
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gold mb-6">Your Wishlist</h1>
          {wishlist.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {wishlistComponentSet}
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
