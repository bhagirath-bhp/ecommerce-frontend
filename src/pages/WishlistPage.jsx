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


const WishlistPage = () => {
  // const [cart, setCart] = useRecoilState(cartState);
  const user = useRecoilValue(userState);
  const [wishlist, setWishlist] = useState([]);
  const [cartLoading, setCartLoading] = useState(false);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await getWishlist(user.userId);
        console.log(response)
        // setWishlist((prevWishlist) => [
        //   ...prevWishlist,
        //   {
        //     id: response.wishlistId,
        //     title: response[0].product.name,
        //     description: response[0].product.description,
        //     price: response[0].product.price,
        //   },
        // ]);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    getDetails();
  }, []);

  const handleAddToCart = async (productId) => {
    // setCartLoading(true);
    // const response = await addToCart(user.userId, item.id)
    // setToastState([response, 'success', 'top-right', productId]);
    // console.log(response)
    // if (response)
    //   setTimeout(() => {
    //     navigate('/cart');
    //   }, 1500);
    console.log(productId)

  }

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
        <Button
          className="bg-golden text-sm text-black my-2"
          loading={cartLoading}
          onClick={()=>{handleAddToCart(item.id)}}
        >Add to Cart</Button>
        <FaHeart
          onClick={() => removeFromWishlist(item.id)}
          className={`text-gold text-2xl cursor-pointer ${wishlist.some((wItem) => wItem.id === item.id) ? 'filled' : ''
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
