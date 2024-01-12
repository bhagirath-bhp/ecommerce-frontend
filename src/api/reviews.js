import axios from "axios"
import Cookies from 'js-cookie'

const uri = import.meta.env.VITE_APP_URI

export const addReview = async (userId, productId, rating, comment) => {
    const response = await axios
        .post(`${uri}/review`, { userId, productId, rating, comment }, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        })
        .catch((error) => {
            console.log(error);
        })

    if (response.status == 200) {
        return response;
    }
}