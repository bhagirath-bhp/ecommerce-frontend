import axios from "axios"
import Cookies from 'js-cookie'

const uri = import.meta.env.VITE_APP_URI

// Add to Cart
export const addToCart = async (userId, productId, quantity = 1) => {
    try {
        const response = await axios.post(`${uri}/cart`, { userId, productId, quantity }, {
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

// Get Cart
export const getCart = async (userId) => {
    try {
        const response = await axios.get(`${uri}/cart/${userId}`, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });
        // console.log(response);
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

// Reduce Quantity
export const reduceQuantity = async (cartId, productId, quantity) => {
    try {
        const response = await axios.post(`${uri}/cart/reduce`, { "cartId": cartId, "productId": productId, "quantity": quantity }, {
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

// Remove from Cart
export const removeFromCart = async (cartId, productId) => {
    try {
        const response = await axios.delete(
            `${uri}/cart/remove`,
            {
                data: { cartId, productId },
                headers: {
                    'Authorization': `Bearer ${Cookies.get('token')}`
                }
            }
        );
        
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


