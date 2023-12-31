import axios from "axios"
import Cookies from 'js-cookie'

const uri = import.meta.env.VITE_APP_URI

// Add Order
export const addOrder = async (userId) => {
    try {
        const response = await axios.post(`${uri}/order/add`, { userId }, {
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
