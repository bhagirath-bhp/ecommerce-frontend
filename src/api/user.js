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


// Signup
export const signup = async (first_name, last_name, email, password, phone_number) => {
    try {
        const response = await axios.post(`${uri}/signup`, { first_name, last_name, email, password, phone_number });

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


// Add Address
export const addAddress = async (address_line_1, address_line_2, city, country, zipCode, userId) => {
    try {
        const response = await axios.post(`${uri}/address/add`, { address_line_1, address_line_2, city, country, zipCode, userId });

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

// Update Address
export const updateAddress = async (address_line_1, address_line_2, city, zipCode, userId) => {
    try {
        const response = await axios.put(`${uri}/address/update`, { address_line_1, address_line_2, city, zipCode, userId });

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

// Remove Address
export const removeAddress = async (addressId, userId) => {
    try {
        const response = await axios.delete(`${uri}/address/remove`, { data: { addressId, userId } });

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
