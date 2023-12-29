import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';// Adjust the import path as needed
import { useRecoilState } from 'recoil';
import { cartState } from '../components/CartState';
import { wishlistState } from '../components/WishlistState'; 
import { FaHeart } from 'react-icons/fa';

const WishlistPage = () => {
  // Dummy data for wishlist items
  const [cart, setCart] = useRecoilState(cartState);
  const [wishlist, setWishlist] = useRecoilState(wishlistState);
  const wishlistItems = [
    {
      id: 1,
      title: "Enchanted Crystal",
      description: "A mystical crystal with calming powers.",
      imageUrl: "path-to-image.jpg", // Replace with your image path
    },
    // ... more wishlist items
  ];

  const addToCart = (wishlistItem) => {
    // Check if item is already in the cart
    const existingItem = cart.find(item => item.id === wishlistItem.id);
    if (existingItem) {
      // If it exists, update the quantity
      const updatedCart = cart.map(item => {
        if (item.id === wishlistItem.id) {
          return { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      // If it doesn't exist, add the new item to the cart
      const newItem = {
        ...wishlistItem,
        quantity: 1, // Assuming we add one quantity for new items
        total: wishlistItem.price, // Total is price * quantity
      };
      setCart([...cart, newItem]);
    }
    // Optionally, remove the item from the wishlist if needed
  };

  const removeFromWishlist = (itemId) => {
    const newWishlist = wishlist.filter((item) => item.id !== itemId);
    setWishlist(newWishlist);
  };
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gold mb-6">Your Wishlist</h1>
          {wishlist.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {wishlist.map((item) => (
                <div key={item.id} className="p-4 border border-gold rounded bg-white">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-64 object-cover mb-4" />
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => addToCart(item)}
                      className="bg-black text-golden px-4 py-2 rounded border border-gold hover:bg-opacity-80 transition duration-200">
                      Add to Cart
                    </button>
                    <FaHeart
                      onClick={() => removeFromWishlist(item.id)}
                      className={`text-gold text-2xl cursor-pointer ${wishlist.some(wItem => wItem.id === item.id) ? 'filled' : ''}`}
                    />
                  </div>
                </div>
              ))}
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
