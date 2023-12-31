import axios from "axios"
import Cookies from 'js-cookie'

const uri = import.meta.env.VITE_APP_URI

// Add to Wishlist
export const addToWishlist = async (productId, userId) => {
    try {
        const response = await axios.post(`${uri}/wishlist/add`, { productId, userId }, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Get Wishlist
export const getWishlist = async (userId) => {
    try {
        const response = await axios.get(`${uri}/wishlist/${userId}`, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};
