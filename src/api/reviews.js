import axios from "axios"
import Cookies from 'js-cookie'

const uri = import.meta.env.VITE_APP_URI

export const addReview = async (userId, productId, rating, comment) => {
    try {
        const response = await axios.post(`${uri}/review`, {
            userId,
            productId,
            rating,
            comment
        }, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error("Internal Server Error");
    }
};

export const removeRating = async (userId, productId) => {
    try {
        const response = await axios.post(`${uri}/removeRating`, {
            userId,
            productId
        }, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error("Internal Server Error");
    }
};

export const getRatingsForAProduct = async (productId) => {
    try {
        const response = await axios.get(`${uri}/review/${productId}`, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error("Internal Server Error");
    }
};
