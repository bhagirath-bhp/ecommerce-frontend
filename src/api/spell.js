import axios from "axios"
import Cookies from 'js-cookie'

const uri = import.meta.env.VITE_APP_URI;


export const addSpell = async (name, description) => {
    const response = await axios
        .post(`${uri}/spells`, { name, description }, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        })
        .catch((error)=>{
            console.log(error)
        })

    if (response.status === 200) {
        return response.data;
    } else {
        return null;
    }
};

export const getSpells = async (wishlistId, productId) => {
    const response = await axios
        .get(`${uri}/spells`)
        .catch((error)=>{
            console.log(error)
        })

    if (response.status === 200) {
        return response.data;
    } else {
        return null;
    }
};