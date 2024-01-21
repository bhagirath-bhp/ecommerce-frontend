import axios from "axios"
import Cookies from 'js-cookie'

const uri = import.meta.env.VITE_APP_URI

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${uri}/login`, { email, password })
        if (response.status == 200) {
            Cookies.set('token', response.data.token)
            return { message: "Logged In Successfully !", success: true, userId: response.data.userId, token: response.data.token, role: response.data.role }
        }
        return false
    } catch (error) {
        // console.error(error);
        return { message: error.response.data, success: false };
    }
}


// Signup
export const signup = async (first_name, last_name, email, password, phone_number) => {
    try {
        const response = await axios.post(`${uri}/signup`, { first_name, last_name, email, password, phone_number });
        console.log(response);
        if (response.status === 200) {
            return { message: "Signed Up Successfully !", success: true };
        }
        return false;
    } catch (error) {
        // console.error(error);
        return { message: error.response.data, success: false };
    }
};


// Add Address
export const addAddress = async (address_line_1, address_line_2, city, country, zipCode, userId) => {
    const response = await axios
        .post(`${uri}/address/add`, { address_line_1, address_line_2, city, country, zipCode, userId }, {
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
export const getAddress = async (userId) => {
    const response = await axios
        .get(`${uri}/address/${userId}`, {
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
