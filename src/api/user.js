import axios from "axios"
import Cookies from 'js-cookie'

const uri = import.meta.env.VITE_APP_URI

export const login = async(email,password) => {
    try {
        const response = await axios.post(`${uri}/login`,{email,password})
        if(response.status == 200){
            Cookies.set('token',response.data.token)
            return true
        }
        return false
    } catch (error) {
        console.error(error);
    }
}