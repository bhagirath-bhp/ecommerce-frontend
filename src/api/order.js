import axios from "axios"
import Cookies from 'js-cookie'

const uri = import.meta.env.VITE_APP_URI

// Add Order
export const addOrder = async (userId) => {
    try {
        const response = await axios.post(`${uri}/orders/add`, { userId }, {
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

export const getAllOrdersForAUser = async (userId) => {
    const response = await axios
        .get(`${uri}/orders/${userId}`, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    if(response.status===200){
        return response.data;
    }

}
