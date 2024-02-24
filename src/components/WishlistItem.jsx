import { useState } from "react";
import { Button } from "@material-tailwind/react"
import { FaHeart } from "react-icons/fa";
import { addToCart } from "../api/cart";
import { removeFromWishlist } from "../api/wishlist";


const WishlistItem = ({item}) => {
    const [cartLoading, setCartLoading] = useState(false);



    const handleAddToCart = async (productId) => {
        setCartLoading(true);
        const response = await addToCart(user.userId, productId)
        setToastState([response, 'success', 'top-right', productId]);
        console.log(response)
        if (response)
            setTimeout(() => {
                navigate('/cart');
            }, 1500);
        console.log(productId)
    }

    const handleRemoveFromWishlist = async (wishlistId, productId) => {
        const response = await removeFromWishlist(wishlistId, productId);
        console.log(response);
    }
    return (
        <div key={item.id} className="p-4 border border-gold rounded bg-white">
            <img src={item.imageURL} alt={item.title} className="w-full h-64 object-cover mb-4" />
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p>{item.description}</p>
            <div className="flex justify-between items-center">
                <Button
                    className="bg-golden text-sm text-black my-2"
                    loading={cartLoading}
                    onClick={() => { handleAddToCart(item.id) }}
                >Add to Cart</Button>
                <FaHeart
                    onClick={() => removeFromWishlist(item.id, item.productId)}
                    //   className={`text-gold text-2xl cursor-pointer ${wishlist.some((wItem) => wItem.id === item.id) ? 'filled' : ''
                    //     }`}
                    className={`text-gold text-2xl cursor-pointer`}
                />
            </div>
        </div>
    )
}

export default WishlistItem